import GameCard from './components/GameCard';
import games from '../data/games';

/**
 * SEAMLESS LOOPING ANIMATION LANES
 * 
 * Each lane has a different speed to create visual interest:
 * - Slow: PC and Mobile (2s per card)
 * - Medium: PlayStation (1.75s per card)
 * - Fast: Xbox (1.22s per card)
 * 
 * The CSS animation will smoothly scroll these lanes infinitely
 * with no visible breaks or pauses.
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
            <header className="header">
                <h1>Free-to-Play Showcase</h1>
                <p>Browse rotating lanes of free-to-play titles by platform.</p>
            </header>

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
                                  .marquee: Hides overflow to create the scrolling viewport
                                  .marquee--{speed}: Applies animation speed (slow/medium/fast)
                                */}
                                <div className={`marquee marquee--${lane.speed}`} aria-hidden="false">
                                    {/* 
                                      MARQUEE TRACK (Animated Element)
                                      Contains two identical sets of game cards for seamless looping:
                                      
                                      1. Original set: Slides out to the left
                                      2. Duplicate set: Slides in from the right
                                      
                                      When the animation reaches 100% (moved -50%):
                                      - First set is completely off-screen
                                      - Duplicate set fills the entire viewport
                                      - Animation resets imperceptibly because layouts are identical
                                      
                                      This creates the illusion of an infinite loop!
                                    */}
                                    <div className="marquee-track">
                                        {/* Original game cards */}
                                        {laneGames.map(game => (
                                            <GameCard key={game.id} game={game} />
                                        ))}
                                        {/* Duplicate game cards for seamless looping */}
                                        {laneGames.map(game => (
                                            <GameCard key={`${game.id}-dup`} game={game} />
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
