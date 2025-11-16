import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number, isActive: boolean) => React.ReactNode;
  onActiveIndexChange?: (index: number) => void;
  className?: string;
  itemClassName?: string;
}

/**
 * React Slick-based Carousel Component
 * 
 * Behavior:
 * - Click: Clicked card slides to leftmost position and becomes active
 * - Scroll: Manual scroll/swipe updates active card (leftmost visible)
 * - Infinite loop: Seamless looping from last to first card
 * - Active detection: Leftmost visible card is always active
 */
function Carousel<T extends { id: string }>({
  items,
  renderItem,
  onActiveIndexChange,
  className = '',
  itemClassName = '',
}: CarouselProps<T>) {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Notify parent of active index changes
  useEffect(() => {
    if (onActiveIndexChange) {
      onActiveIndexChange(currentSlide);
    }
  }, [currentSlide, onActiveIndexChange]);

  const handleBeforeChange = (_oldIndex: number, newIndex: number) => {
    // Update state during transition
    setCurrentSlide(newIndex);
  };

  const handleAfterChange = (index: number) => {
    // Confirm final position
    setCurrentSlide(index);
  };

  const handleCardClick = (index: number) => {
    // Move clicked card to leftmost position
    if (sliderRef.current && index !== currentSlide) {
      sliderRef.current.slickGoTo(index);
    }
  };

  // React Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show multiple cards
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: true, // Enable click to slide
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    swipe: true,
    draggable: true,
    arrows: false,
    variableWidth: true, // Allow custom card widths
    adaptiveHeight: false,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };

  if (items.length === 0) {
    return (
      <div className={`carousel-container ${className}`}>
        <p className="text-gray-500">No items to display</p>
      </div>
    );
  }

  return (
    <div className={`carousel-container ${className}`}>
      <style>{`
        .slick-slider {
          overflow: hidden;
        }
        
        .slick-list {
          overflow: visible;
          padding: 0 !important;
        }
        
        .slick-track {
          display: flex !important;
          gap: 24px;
          margin-left: 0 !important;
        }
        
        .slick-slide {
          float: none !important;
          height: auto !important;
          padding: 0 !important;
        }
        
        .slick-slide > div {
          height: 100%;
        }
      `}</style>
      
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => {
          const isActive = index === currentSlide;
          
          return (
            <div
              key={item.id}
              className={itemClassName}
              onClick={() => handleCardClick(index)}
            >
              {renderItem(item, index, isActive)}
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;

