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
        // With 3 full iterations, original items start at items.length * itemWidth
        const originalItemsStart = items.length * (cardWidth + gap);
        carousel.scrollTo({ left: originalItemsStart, behavior: 'auto' });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [carouselRef, items.length, cardRefs]);

  // Handle infinite loop boundaries using buffer approach
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || items.length === 0) return;

    let rafId: number | null = null;
    let loopTimeoutId: NodeJS.Timeout | null = null;
    let lastScrollLeft = carousel.scrollLeft;
    let lastJumpTime = 0;
    let expectedPositionAfterJump: number | null = null;

    const performJump = (newPosition: number) => {
      isLoopingRef.current = true;
      lastJumpTime = Date.now();
      expectedPositionAfterJump = newPosition;
      
      if (loopTimeoutId) {
        clearTimeout(loopTimeoutId);
      }
      
      // Remove scroll listener temporarily to prevent re-triggering
      carousel.removeEventListener('scroll', handleScroll);
      
      // Perform the jump
      carousel.scrollLeft = newPosition;
      lastScrollLeft = newPosition;
      
      // Re-add scroll listener after a delay
      loopTimeoutId = setTimeout(() => { 
        isLoopingRef.current = false;
        expectedPositionAfterJump = null;
        carousel.addEventListener('scroll', handleScroll, { passive: true });
        loopTimeoutId = null;
      }, 600);
    };

    const handleScroll = () => {
      // Ignore during programmatic operations
      if (isLoopingRef.current) return;

      const currentScrollLeft = carousel.scrollLeft;
      
      // Ignore if we're at the expected position after a jump (prevents immediate re-trigger)
      if (expectedPositionAfterJump !== null && Math.abs(currentScrollLeft - expectedPositionAfterJump) < 10) {
        lastScrollLeft = currentScrollLeft;
        return;
      }

      const scrollDelta = currentScrollLeft - lastScrollLeft;
      
      // Ignore tiny movements
      if (Math.abs(scrollDelta) < 1) {
        lastScrollLeft = currentScrollLeft;
        return;
      }

      // Cooldown
      const now = Date.now();
      if (now - lastJumpTime < 600) {
        lastScrollLeft = currentScrollLeft;
        return;
      }

      // Use requestAnimationFrame
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
        const originalItemsStart = setWidth;
        const appendedBufferStart = setWidth * 2;

        // Only check boundaries if we're actually moving
        const scrollingRight = scrollLeft > lastScrollLeft;
        const scrollingLeft = scrollLeft < lastScrollLeft;
        
        if (!scrollingRight && !scrollingLeft) {
          lastScrollLeft = scrollLeft;
          return;
        }

        // Calculate position within set
        const positionInSet = scrollLeft % setWidth;

        // Only jump when we're well into the boundary sets
        // This prevents premature jumps that cause erratic behavior
        const jumpThreshold = setWidth * 0.3; // 30% into the set

        // Jump from third set to first set when scrolling right
        // Only if we're past the threshold in the third set (well into the third set)
        if (scrollLeft >= appendedBufferStart + jumpThreshold && scrollingRight) {
          performJump(positionInSet);
          return;
        }
        
        // Jump from first set to third set when scrolling left
        // Only if we're in the first set and past the threshold (well into the first set from the start)
        // This means we're near the end of the first set, ready to loop back
        if (scrollLeft < originalItemsStart && scrollLeft >= jumpThreshold && scrollingLeft) {
          performJump(appendedBufferStart + positionInSet);
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

  // Create infinite loop using exactly 3 full iterations:
  // 1. First iteration (prepended) - full set of items
  // 2. Second iteration (original) - full set of items (this is where we start)
  // 3. Third iteration (appended) - full set of items
  // This ensures consistent behavior regardless of item count
  const bufferedItems = [...items, ...items, ...items];
  
  // Calculate positions for tracking
  // Original items start at index = items.length (middle set)
  const originalItemsStart = items.length;

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
