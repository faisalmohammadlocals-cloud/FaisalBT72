import { SiWindows, SiPlaystation, SiXbox, SiAndroid } from 'react-icons/si';

const platformIcons = {
  PC: <SiWindows />,
  PlayStation: <SiPlaystation />,
  Xbox: <SiXbox />,
  Mobile: <SiAndroid />,
};

export default function GameCard({ game }) {
  return (
    <div className="game-card">
      <div className="game-image">
        <img src={game.image} alt={game.name} />
        <span className="game-platform" title={game.platform}>
          {platformIcons[game.platform] || game.platform}
        </span>
      </div>
      <div className="game-content">
        <h3>{game.name}</h3>
      </div>
    </div>
  );
}
