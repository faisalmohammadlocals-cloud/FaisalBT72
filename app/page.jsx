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
        <main className="min-h-screen bg-neutral-950 text-white font-sans p-8">
            <header className="max-w-7xl mx-auto mb-8">
                <h1 className="text-3xl sm:text-4xl font-extrabold">Free-to-Play Showcase</h1>
                <p className="mt-2 text-neutral-400">Browse rotating lanes of free-to-play titles by platform.</p>
            </header>

            <section className="space-y-8">
                {lanes.map((lane, idx) => {
                    const laneGames = games.filter(g => g.platform === lane.label);
                    if (!laneGames.length) return null;
                    return (
                        <div key={lane.id} className="max-w-full overflow-hidden">
                            <div className="max-w-7xl mx-auto px-2">
                                <div className="flex items-center justify-between mb-3">
                                    <h2 className="text-xl font-semibold">{lane.label}</h2>
                                </div>

                                <div className={`marquee marquee--${lane.speed}`} aria-hidden="false">
                                    <div className="marquee-track flex gap-4 items-center">
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

            <footer className="max-w-7xl mx-auto mt-12 text-sm text-neutral-500">Placeholder images via placehold.co</footer>
        </main>
    );
}
