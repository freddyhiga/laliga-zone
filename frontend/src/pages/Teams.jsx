import { useState } from 'react';
import usePlayers from '../hooks/usePlayers';
import TeamCard from '../components/TeamCard';
import './teams.css';
import '../components/search.css';

function Teams() {
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

  const teams = [...new Set(players.map((player) => player.team))];

  const filteredTeams = teams.filter((team) =>
    team.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className='container'>
      <h2>Teams</h2>
      <input
        type='text'
        placeholder='Search team...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='search-input'
        style={{ marginBottom: '20px' }}
      />
      <div className='teams-container'>
        {filteredTeams.map((team) => (
          <TeamCard key={team} team={team} />
        ))}
      </div>
    </div>
  );
}

export default Teams;
