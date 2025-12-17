'use client';

import { useState, useMemo } from 'react';
import ImageCarousel from './ImageCarousel';

/**
 * ImageCarouselLane Component
 * 
 * Creates a full-width lane displaying additional images from all games
 * Allows users to browse through all supplementary images in sequence
 * 
 * Features:
 * - Displays images from all games in a continuous carousel
 * - Next/Previous navigation through all images
 * - Image counter and game title display
 * - Smooth transitions
 * - Keyboard and touch friendly
 */
export default function ImageCarouselLane({ games }) {
  // Create a flat array of all images with game info
  const allImages = useMemo(() => {
    const images = [];
    games.forEach(game => {
      if (game.additionalImages && game.additionalImages.length > 0) {
        game.additionalImages.forEach((img, idx) => {
          images.push({
            url: img,
            gameTitle: game.name,
            gamePlatform: game.platform,
            gameId: game.id,
            imageIndex: idx
          });
        });
      }
    });
    return images;
  }, [games]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  if (allImages.length === 0) {
    return null;
  }

  const currentImage = allImages[currentImageIndex];

  return (
    <ImageCarousel
      image={currentImage.url}
      gameTitle={currentImage.gameTitle}
      onPrevious={goToPrevious}
      onNext={goToNext}
      onDotClick={goToImage}
      currentIndex={currentImageIndex}
      totalImages={allImages.length}
    />
  );
}
