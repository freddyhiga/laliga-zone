import { useState } from 'react';
import usePlayers from '../hooks/usePlayers';
import NationCard from '../components/NationCard';
import { getNationName } from '../utils/nationUtils';
import './teams.css';
import '../components/search.css';

function Nations() {
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

  const nations = [...new Set(players.map((player) => player.nation))];

  const filteredNations = nations.filter((nation) =>
    getNationName(nation).toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className='container'>
      <h2>Nations</h2>
      <input
        type='text'
        placeholder='Search nation...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='search-input'
        style={{ marginBottom: '20px' }}
      />
      <div className='teams-container'>
        {filteredNations.map((nation) => (
          <NationCard key={nation} nation={nation} />
        ))}
      </div>
    </div>
  );
}

export default Nations;
