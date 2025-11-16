import React, { useEffect } from 'react';
import { useCarousel } from '../hooks/useCarousel';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number, isActive: boolean) => React.ReactNode;
  onActiveIndexChange?: (index: number) => void;
  className?: string;
  itemClassName?: string;
  intersectionThreshold?: number[];
  intersectionRatio?: number;
}

/**
 * Infinite looping carousel with card repositioning
 * - Click: Cards slide to bring clicked card to leftmost position
 * - Scroll: Natural scroll positions, active card updates instantly
 * - Infinite loop: Last card → First card
 */
function Carousel<T extends { id: string }>({
  items,
  renderItem,
  onActiveIndexChange,
  className = '',
  itemClassName = '',
  intersectionThreshold,
  intersectionRatio,
}: CarouselProps<T>) {
  const { activeIndex, carouselRef, cardRefs, scrollToIndex, scrollToCardInstance, isLoopingRef } = useCarousel({
    itemCount: items.length,
    intersectionThreshold,
    intersectionRatio,
  });

  // Notify parent of active index changes
  useEffect(() => {
    if (onActiveIndexChange && items.length > 0) {
      onActiveIndexChange(activeIndex);
    }
  }, [activeIndex, onActiveIndexChange, items.length]);

  // Initialize carousel to show first card in the original items section
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || items.length === 0) return;

    // Wait for cards to render, then scroll to the start of original items
    const timeout = setTimeout(() => {
      const firstCard = cardRefs.current[0];
      if (firstCard && firstCard.offsetWidth > 0) {
        const cardWidth = firstCard.offsetWidth;
        const gap = 24; // gap-6 = 24px
        // Scroll to start of original items (middle set)
        // With 5 full iterations, original items start at 2 * items.length * itemWidth
        const originalItemsStart = items.length * 2 * (cardWidth + gap);
        carousel.scrollTo({ left: originalItemsStart, behavior: 'auto' });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [carouselRef, items.length, cardRefs]);

  // Handle infinite loop boundaries - truly seamless infinite scrolling
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || items.length === 0) return;

    let rafId: number | null = null;
    let loopTimeoutId: NodeJS.Timeout | null = null;
    let lastScrollLeft = carousel.scrollLeft;

    const handleScroll = () => {
      // Ignore during programmatic operations
      if (isLoopingRef.current) return;

      // Use requestAnimationFrame for smooth processing
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        if (isLoopingRef.current) return;

        const scrollLeft = carousel.scrollLeft;
        const cardWidth = cardRefs.current[0]?.offsetWidth || 0;
        const gap = 24;
        const itemWidth = cardWidth + gap;
        
        if (itemWidth === gap) {
          lastScrollLeft = scrollLeft;
          return;
        }
        
        const setWidth = items.length * itemWidth;
        // With 5 sets: [prepend2][prepend1][original][append1][append2]
        // Set boundaries:
        const prepend2Start = 0;
        const prepend1Start = setWidth;
        // originalStart = setWidth * 2 (not used directly in logic)
        // append1Start = setWidth * 3 (not used directly in logic)
        const append2Start = setWidth * 4;

        // Detect scroll direction
        const scrollingRight = scrollLeft > lastScrollLeft;
        const scrollingLeft = scrollLeft < lastScrollLeft;

        // Calculate position within set using modulo for seamless mapping
        const positionInSet = scrollLeft % setWidth;

        // Jump from append2 to prepend1 when scrolling right
        // Trigger when entering second half of append2 to ensure smooth jump
        const append2MidPoint = append2Start + (setWidth / 2);
        if (scrollLeft >= append2MidPoint && scrollingRight) {
          isLoopingRef.current = true;
          
          // Jump to same relative position in prepend1
          const newPosition = prepend1Start + positionInSet;
          carousel.scrollLeft = newPosition;
          lastScrollLeft = newPosition;
          
          if (loopTimeoutId) {
            clearTimeout(loopTimeoutId);
          }
          loopTimeoutId = setTimeout(() => {
            isLoopingRef.current = false;
            loopTimeoutId = null;
          }, 100);
          return;
        }
        
        // Jump from prepend1 to append2 when scrolling left
        // Trigger when entering second half of prepend1 (scrolling leftward into it)
        const prepend1MidPoint = prepend1Start + (setWidth / 2);
        if (scrollLeft < prepend1MidPoint && scrollLeft >= prepend2Start && scrollingLeft) {
          isLoopingRef.current = true;
          
          // Jump to same relative position in append2
          const newPosition = append2Start + positionInSet;
          carousel.scrollLeft = newPosition;
          lastScrollLeft = newPosition;
          
          if (loopTimeoutId) {
            clearTimeout(loopTimeoutId);
          }
          loopTimeoutId = setTimeout(() => {
            isLoopingRef.current = false;
            loopTimeoutId = null;
          }, 100);
          return;
        }

        lastScrollLeft = scrollLeft;
      });
    };

    carousel.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (loopTimeoutId) {
        clearTimeout(loopTimeoutId);
      }
    };
  }, [carouselRef, cardRefs, items.length, isLoopingRef]);

  const handleItemClick = (relativeIndex: number, absoluteIndex: number) => {
    // Find the clicked card instance and scroll it to leftmost
    const carousel = carouselRef.current;
    if (!carousel || items.length === 0) return;

    // Ensure relativeIndex is within valid range
    if (relativeIndex < 0 || relativeIndex >= items.length) return;

    const clickedCard = carousel.querySelector(`[data-absolute-index="${absoluteIndex}"]`) as HTMLElement;
    if (!clickedCard) {
      // Fallback to middle set
      scrollToIndex(relativeIndex);
      return;
    }

    // Scroll the clicked card instance to leftmost position
    // This works with infinite loop - scrolls to the card in whichever set it's in
    scrollToCardInstance(clickedCard, relativeIndex);
  };

  // Handle empty items array
  if (items.length === 0) {
    return (
      <div
        ref={carouselRef}
        className={`flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      />
    );
  }

  // Create infinite loop using exactly 5 full iterations:
  // 1. Prepend2 - full set of items (buffer for scrolling left)
  // 2. Prepend1 - full set of items (buffer for scrolling left)
  // 3. Original - full set of items (this is where we start)
  // 4. Append1 - full set of items (buffer for scrolling right)
  // 5. Append2 - full set of items (buffer for scrolling right)
  // This ensures smooth infinite scrolling with enough buffer on both sides
  const bufferedItems = [...items, ...items, ...items, ...items, ...items];
  
  // Calculate positions for tracking
  // Original items start at index = items.length * 2 (middle set)
  const originalItemsStart = items.length * 2;

  return (
    <div
      ref={carouselRef}
      className={`flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 ${className}`}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {bufferedItems.map((item, absoluteIndex) => {
        // Calculate relative index: all three sets contain the same items in the same order
        // So relativeIndex is just the modulo of absoluteIndex
        const relativeIndex = absoluteIndex % items.length;
        const isActive = relativeIndex === activeIndex;
        
        // Track refs for original items section (middle set, for click scrolling)
        const isInOriginalItems = absoluteIndex >= originalItemsStart && absoluteIndex < originalItemsStart + items.length;
        
        return (
          <div
            key={`${item.id}-${absoluteIndex}`}
            ref={(el) => {
              // Track original items refs for click scrolling
              // React calls this with null when element is unmounted, so we clear the ref
              if (isInOriginalItems) {
                cardRefs.current[relativeIndex] = el;
              }
            }}
            onClick={() => handleItemClick(relativeIndex, absoluteIndex)}
            className={itemClassName}
            data-relative-index={relativeIndex}
            data-absolute-index={absoluteIndex}
          >
            {renderItem(item, relativeIndex, isActive)}
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
