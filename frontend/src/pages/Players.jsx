import { useState } from 'react';
import usePlayers from '../hooks/usePlayers';
import PlayerList from '../components/PlayerList';
import '../components/search.css';

function Players() {
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

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className='container'>
      <h2>Players</h2>
      <input
        type='text'
        placeholder='Search player...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='search-input'
        style={{ marginBottom: '20px' }}
      />
      {search && filteredPlayers.length === 0 ? (
        <p className='error-message' style={{ margin: 0 }}>
          Player not found.
        </p>
      ) : (
        <PlayerList players={filteredPlayers} />
      )}
    </div>
  );
}

export default Players;
