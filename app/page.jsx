import GameCard from './components/GameCard';
import ImageCarouselLane from './components/ImageCarouselLane';
import GenreHeader from './components/GenreHeader';
import games from '../data/games';

/**
 * BOUNCING BACK-AND-FORTH ANIMATION LANES
 * 
 * Game lanes now feature a slow-paced bouncing animation that moves
 * cards gently back and forth, creating a soft, organic motion effect.
 * 
 * Animation speeds:
 * - PC: 8 seconds (slow gentle bounce)
 * - PlayStation: 7 seconds (medium bounce)
 * - Xbox: 6 seconds (slightly quicker bounce)
 * - Mobile: 7 seconds (mobile-optimized pace)
 * 
 * Note: This bouncing animation does NOT require DOM duplication
 * like the previous seamless looping did. Items move in place rather
 * than scrolling off-screen.
 */
const lanes = [
    { id: 'pc', label: 'PC', speed: 'slow' },
    { id: 'ps', label: 'PlayStation', speed: 'medium' },
    { id: 'xb', label: 'Xbox', speed: 'fast' },
    { id: 'mb', label: 'Mobile', speed: 'slow' }
];

export default function Page() {
    return (
        <main className="main">
            {/* Genre Navigation Header */}
            <GenreHeader />

            <header className="header">
                <h1>Free-to-Play Showcase</h1>
                <p>Browse rotating lanes of free-to-play titles by platform.</p>
            </header>

            {/* Full-Width Image Carousel Lane */}
            <section className="image-carousel-section">
                <div className="lane-container">
                    <div className="lane-header">
                        <h2>Featured Images</h2>
                    </div>
                    <ImageCarouselLane games={games} />
                </div>
            </section>

            <section className="section">
                {lanes.map((lane, idx) => {
                    const laneGames = games.filter(g => g.platform === lane.label);
                    if (!laneGames.length) return null;
                    return (
                        <div key={lane.id} className="lane-wrapper">
                            <div className="lane-container">
                                <div className="lane-header">
                                    <h2>{lane.label}</h2>
                                </div>

                                {/* 
                                  MARQUEE CONTAINER
                                  .marquee: Hides overflow to create the bouncing viewport
                                  .marquee--{speed}: Applies animation speed (slow/medium/fast)
                                */}
                                <div className={`marquee marquee--${lane.speed}`} aria-hidden="false">
                                    {/* 
                                      MARQUEE TRACK (Animated Element)
                                      Contains a SINGLE set of game cards for bouncing animation:
                                      
                                      Unlike the previous seamless looping that required DOM duplication,
                                      the bouncing animation moves the entire track back and forth in place.
                                      
                                      Animation behavior:
                                      0% → Centered position (0 offset)
                                      50% → Maximum left offset (-15%)
                                      100% → Back to center (smooth return)
                                      
                                      The ease-in-out timing creates a natural, organic bouncing motion
                                      that feels gentle and visually appealing.
                                    */}
                                    <div className="marquee-track">
                                        {/* Single set of game cards (no duplicates needed) */}
                                        {laneGames.map(game => (
                                            <GameCard key={game.id} game={game} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>

            <footer className="footer">Placeholder images via placehold.co</footer>
        </main>
    );
}
