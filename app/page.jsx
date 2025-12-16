import GameCard from './components/GameCard';
import games from '../data/games';

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

                                <div className={`marquee marquee--${lane.speed}`} aria-hidden="false">
                                    <div className="marquee-track">
                                        {laneGames.map(game => (
                                            <GameCard key={game.id} game={game} />
                                        ))}
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
