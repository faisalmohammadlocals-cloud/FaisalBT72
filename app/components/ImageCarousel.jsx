'use client';

import { useState } from 'react';

/**
 * ImageCarousel Component
 * 
 * Full-width carousel for displaying additional game images
 * Shows one large image at a time with navigation controls
 * 
 * Features:
 * - Large image display (fills width of container)
 * - Previous/Next navigation buttons
 * - Navigation dots
 * - Smooth fade transitions
 * - Game title and platform info
 */
export default function ImageCarousel({ image, gameTitle, onPrevious, onNext, onDotClick, currentIndex, totalImages }) {
  return (
    <div className="image-carousel-item">
      {/* Image Display */}
      <div className="image-carousel-image-container">
        <img 
          src={image} 
          alt={`${gameTitle} - Image ${currentIndex + 1}`}
          className="image-carousel-image"
        />
        
        {/* Navigation Buttons */}
        {totalImages > 1 && (
          <>
            <button
              className="image-carousel-nav image-carousel-nav-prev"
              onClick={onPrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="image-carousel-nav image-carousel-nav-next"
              onClick={onNext}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>
      
      {/* Game Info */}
      <div className="image-carousel-info">
        <h3 className="image-carousel-title">{gameTitle}</h3>
        {totalImages > 1 && (
          <span className="image-carousel-counter">{currentIndex + 1} / {totalImages}</span>
        )}
      </div>
      
      {/* Navigation Dots */}
      {totalImages > 1 && (
        <div className="image-carousel-dots">
          {Array.from({ length: totalImages }).map((_, index) => (
            <button
              key={index}
              className={`image-carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => onDotClick(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
