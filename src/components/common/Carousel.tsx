import React, { useEffect, useRef } from 'react';
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
 * - Scroll: Snaps leftmost card to precise position
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
  const { activeIndex, carouselRef, cardRefs, setActiveIndex, scrollToIndex } = useCarousel({
    itemCount: items.length,
    intersectionThreshold,
    intersectionRatio,
  });

  const scrollPositionRef = useRef(0);
  const isUserScrollingRef = useRef(false);

  // Notify parent of active index changes
  useEffect(() => {
    if (onActiveIndexChange) {
      onActiveIndexChange(activeIndex);
    }
  }, [activeIndex, onActiveIndexChange]);

  // Initialize carousel to show first card in middle set
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || items.length === 0) return;

    // Wait for cards to render, then scroll to middle set
    const timeout = setTimeout(() => {
      const firstCard = cardRefs.current[0];
      if (firstCard) {
        // Calculate position of first card in middle set
        const cardWidth = firstCard.offsetWidth;
        const gap = 24; // gap-6 = 24px
        const middleSetStartPosition = items.length * (cardWidth + gap);
        carousel.scrollTo({ left: middleSetStartPosition, behavior: 'auto' });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [carouselRef, items.length]);

  // Handle infinite loop and snap on scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      isUserScrollingRef.current = true;
      scrollPositionRef.current = carousel.scrollLeft;

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // After scroll ends, snap to leftmost card and handle infinite loop
      scrollTimeout = setTimeout(() => {
        isUserScrollingRef.current = false;
        
        const scrollLeft = carousel.scrollLeft;
        const scrollWidth = carousel.scrollWidth;
        const clientWidth = carousel.clientWidth;
        const cardWidth = cardRefs.current[0]?.offsetWidth || 0;
        const gap = 24;
        const setWidth = items.length * (cardWidth + gap);

        // Handle infinite loop: if near end, jump to beginning of middle set
        if (scrollLeft >= setWidth * 2 - clientWidth / 2) {
          const newPosition = setWidth + (scrollLeft % setWidth);
          carousel.scrollTo({ left: newPosition, behavior: 'auto' });
          return;
        }
        // Handle infinite loop: if near beginning, jump to end of middle set
        if (scrollLeft <= setWidth / 2) {
          const newPosition = setWidth + (scrollLeft % setWidth);
          carousel.scrollTo({ left: newPosition, behavior: 'auto' });
          return;
        }
        
        // Find leftmost visible card in middle set
        const cards = cardRefs.current.filter(Boolean);
        type LeftmostCard = {
          index: number;
          left: number;
        };
        let leftmostCard: LeftmostCard | null = null;

        cards.forEach((card, index) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const carouselRect = carousel.getBoundingClientRect();
          
          // Check if card is visible and to the left of current leftmost
          if (rect.right > carouselRect.left && rect.left < carouselRect.right) {
            const relativeLeft = rect.left - carouselRect.left;
            if (!leftmostCard || relativeLeft < leftmostCard.left) {
              leftmostCard = { index, left: relativeLeft };
            }
          }
        });

        // Snap to leftmost card
        if (leftmostCard) {
          const leftmostIndex = (leftmostCard as LeftmostCard).index;
          const card = cardRefs.current[leftmostIndex];
          if (card) {
            carousel.scrollTo({
              left: card.offsetLeft,
              behavior: 'smooth',
            });
            setActiveIndex(leftmostIndex);
          }
        }
      }, 150); // Debounce scroll end
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [carouselRef, cardRefs, setActiveIndex]);

  const handleItemClick = (index: number) => {
    // Reposition clicked card to leftmost with slide animation
    scrollToIndex(index);
  };

  // Create infinite loop by duplicating items (3 sets: before, current, after)
  const duplicatedItems = [...items, ...items, ...items];
  const middleSetStart = items.length;

  return (
    <div
      ref={carouselRef}
      className={`flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4 ${className}`}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {duplicatedItems.map((item, absoluteIndex) => {
        const relativeIndex = absoluteIndex % items.length;
        const isActive = relativeIndex === activeIndex;
        
        // Only track refs for middle set (the visible/active set)
        const isInMiddleSet = absoluteIndex >= middleSetStart && absoluteIndex < middleSetStart + items.length;
        
        return (
          <div
            key={`${item.id}-${absoluteIndex}`}
            ref={(el) => {
              if (isInMiddleSet) {
                cardRefs.current[relativeIndex] = el;
              }
            }}
            onClick={() => handleItemClick(relativeIndex)}
            className={itemClassName}
          >
            {renderItem(item, relativeIndex, isActive && isInMiddleSet)}
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
