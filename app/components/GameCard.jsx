'use client';

import { FaWindows, FaPlaystation, FaXbox, FaMobileAlt } from 'react-icons/fa';
import { useState } from 'react';

const platformIcons = {
  PC: <FaWindows />,
  PlayStation: <FaPlaystation />,
  Xbox: <FaXbox />,
  Mobile: <FaMobileAlt />,
};

/**
 * GameCard Component
 * 
 * Features:
 * 1. Displays main game image (or special image if available)
 * 2. Shows platform icon overlay
 * 3. Renders carousel of additional images below the main image
 * 4. Smooth transitions between images in carousel
 * 5. Navigation dots for carousel
 * 
 * The special image creates visual variety within the looping lanes
 * while additional images showcase more content about each game.
 */
export default function GameCard({ game }) {
  // State for carousel navigation
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const additionalImages = game.additionalImages || [];
  const hasAdditionalImages = additionalImages.length > 0;
  
  // Determine which image to display as main image
  const displayImage = game.specialImage ? game.specialImage : game.image;
  
  // Handle carousel navigation
  const goToPreviousImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? additionalImages.length - 1 : prev - 1
    );
  };
  
  const goToNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === additionalImages.length - 1 ? 0 : prev + 1
    );
  };
  
  const goToImage = (index, e) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };
  
  return (
    <div className="game-card">
      {/* Main Game Image Section */}
      <div className="game-image">
        <img 
          src={displayImage} 
          alt={game.name}
          className={game.specialImage ? 'special-game-image' : 'regular-game-image'}
        />
        {/* Dark gradient overlay for better text readability */}
        <div className="game-image-overlay"></div>
        {/* Game Title Overlay - Shows on hover */}
        <div className="game-title-overlay">
          <h2 className="game-title-text">{game.name}</h2>
        </div>
        <span className="game-platform" title={game.platform}>
          {platformIcons[game.platform] || game.platform}
        </span>
      </div>
      
      {/* Additional Images Carousel */}
      {hasAdditionalImages && (
        <div className="additional-images-section">
          {/* Carousel Container */}
          <div className="carousel-container">
            <div className="carousel-wrapper">
              {additionalImages.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-slide ${
                    index === currentImageIndex ? 'active' : ''
                  }`}
                >
                  <img
                    src={img}
                    alt={`${game.name} Image ${index + 1}`}
                    className="carousel-image"
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons - Only show if more than 1 image */}
            {additionalImages.length > 1 && (
              <>
                <button
                  className="carousel-nav carousel-nav-prev"
                  onClick={goToPreviousImage}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  className="carousel-nav carousel-nav-next"
                  onClick={goToNextImage}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
          </div>
          
          {/* Navigation Dots */}
          {additionalImages.length > 1 && (
            <div className="carousel-dots">
              {additionalImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={(e) => goToImage(index, e)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* Game Content */}
      <div className="game-content">
        <h3>{game.name}</h3>
      </div>
    </div>
  );
}
