import { useState } from 'react';
import usePlayers from '../hooks/usePlayers';
import PositionCard from '../components/PositionCard';
import '../components/search.css';

function Positions() {
  const { players, loading, error } = usePlayers();
  const [search, setSearch] = useState('');

  if (loading) {
    return (
      <div className='loading-container'>
        <div className='spinner'></div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  const positions = [...new Set(players.map((player) => player.position))];

  const filteredPositions = positions.filter((position) =>
    position.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className='container'>
      <h2>Positions</h2>

      <input
        type='text'
        placeholder='Search positions...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='search-input'
        style={{ marginBottom: '20px' }}
      />

      <div className='teams-container'>
        {filteredPositions.map((position) => (
          <PositionCard key={position} position={position} />
        ))}
      </div>
    </div>
  );
}

export default Positions;
