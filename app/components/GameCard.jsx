export default function GameCard({ game }) {
  return (
    <div className="w-64 min-w-[16rem] bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 rounded-xl overflow-hidden shadow-lg">
      <div className="relative h-40 w-full bg-neutral-800">
        <img src={game.image} alt={game.name} className="object-cover w-full h-full" />
        <span className="absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded bg-black/60 backdrop-blur text-white">{game.platform}</span>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold line-clamp-2">{game.name}</h3>
      </div>
    </div>
  );
}
