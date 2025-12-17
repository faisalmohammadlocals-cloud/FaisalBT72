/**
 * GenreHeader Component
 * 
 * Displays a list of general game genres to help users navigate content.
 * Shows genres in a responsive, interactive format.
 * 
 * Features:
 * - Horizontal scrollable genre list
 * - Hover effects for interactivity
 * - Responsive design for all screen sizes
 * - Accessible semantic HTML structure
 */

export default function GenreHeader() {
  const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Adventure' },
    { id: 3, name: 'Role-Playing (RPG)' },
    { id: 4, name: 'Simulation' },
    { id: 5, name: 'Strategy' },
    { id: 6, name: 'Sports' },
    { id: 7, name: 'Puzzle' },
    { id: 8, name: 'Horror' },
    { id: 9, name: 'Platformer' },
    { id: 10, name: 'Battle Royale' }
  ];

  return (
    <section className="genre-header-section">
      <div className="lane-container">
        {/* Genre Header Title */}
        <h2 className="genre-header-title">Game Genres</h2>
        
        {/* Genre List Container */}
        <div className="genre-list-wrapper">
          <div className="genre-list">
            {genres.map((genre) => (
              <button
                key={genre.id}
                className="genre-button"
                aria-label={`Filter by ${genre.name} games`}
              >
                <span className="genre-name">{genre.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
