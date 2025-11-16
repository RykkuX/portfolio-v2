import { useState, useRef, useEffect, useCallback } from 'react';

interface UseCarouselOptions {
  itemCount: number;
  intersectionThreshold?: number[];
  intersectionRatio?: number;
}

interface UseCarouselReturn {
  activeIndex: number;
  carouselRef: React.RefObject<HTMLDivElement | null>;
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  setActiveIndex: (index: number) => void;
  scrollToIndex: (index: number) => void;
  snapToLeftmost: () => void;
}

/**
 * Custom hook for managing infinite carousel with repositioning
 * - Click: Cards slide to reposition clicked card to leftmost
 * - Scroll: Natural scroll positions, active card updates instantly
 * - Infinite loop: Last card → First card
 */
export const useCarousel = ({
  itemCount,
  intersectionThreshold = [0.3, 0.5, 0.7, 1.0],
  intersectionRatio = 0.3,
}: UseCarouselOptions): UseCarouselReturn => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrollingRef = useRef(false);
  const isRepositioningRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reset refs array when item count changes
  useEffect(() => {
    cardRefs.current = new Array(itemCount).fill(null);
  }, [itemCount]);

  // Intersection Observer to detect leftmost visible card during manual scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let observer: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      const cards = cardRefs.current.filter(Boolean);
      if (cards.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          // Ignore during programmatic operations
          if (isScrollingRef.current || isRepositioningRef.current) return;

          // Find the leftmost visible card
          const visibleCards = entries
            .filter((entry) => entry.isIntersecting && entry.intersectionRatio > intersectionRatio)
            .map((entry) => {
              const index = cardRefs.current.findIndex((ref) => ref === entry.target);
              return { index, left: entry.boundingClientRect.left };
            })
            .filter((item) => item.index !== -1)
            .sort((a, b) => a.left - b.left);

          if (visibleCards.length > 0) {
            const leftmostIndex = visibleCards[0].index;
            setActiveIndex(leftmostIndex);
            // Active card updates instantly, no snapping
          }
        },
        {
          root: carousel,
          rootMargin: '0px',
          threshold: intersectionThreshold,
        }
      );

      cards.forEach((card) => {
        if (card) observer!.observe(card);
      });
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [itemCount, intersectionThreshold, intersectionRatio]);

  // Snap leftmost card to precise position
  const snapToLeftmostCard = useCallback((index: number) => {
    const card = cardRefs.current[index];
    const carousel = carouselRef.current;
    if (!card || !carousel) return;

    isScrollingRef.current = true;

    const cardLeft = card.offsetLeft;
    carousel.scrollTo({
      left: cardLeft,
      behavior: 'smooth',
    });

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      scrollTimeoutRef.current = null;
    }, 600);
  }, []);

  // Reposition cards: clicked card moves to leftmost position
  const scrollToIndex = useCallback((index: number) => {
    const carousel = carouselRef.current;
    if (!carousel || itemCount === 0) return;

    isRepositioningRef.current = true;
    setActiveIndex(index);

    // Calculate the scroll position to bring clicked card to leftmost
    const card = cardRefs.current[index];
    if (!card) {
      isRepositioningRef.current = false;
      return;
    }

    // Calculate position within the set
    const cardWidth = card.offsetWidth || 0;
    const gap = 24; // gap-6 = 24px
    const setWidth = itemCount * (cardWidth + gap);
    const cardOffsetInSet = card.offsetLeft % setWidth;
    
    // Position in middle set (middle set starts at setWidth)
    const middleSetPosition = setWidth + cardOffsetInSet;
    
    carousel.scrollTo({
      left: middleSetPosition,
      behavior: 'smooth',
    });

    // Re-enable observer after animation completes
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      isRepositioningRef.current = false;
      isScrollingRef.current = false;
      scrollTimeoutRef.current = null;
    }, 600);
  }, [itemCount]);

  const snapToLeftmost = useCallback(() => {
    snapToLeftmostCard(activeIndex);
  }, [activeIndex, snapToLeftmostCard]);

  return {
    activeIndex,
    carouselRef,
    cardRefs,
    setActiveIndex,
    scrollToIndex,
    snapToLeftmost,
  };
};
