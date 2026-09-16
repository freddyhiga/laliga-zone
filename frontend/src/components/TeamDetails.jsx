import { Link, useParams } from 'react-router-dom';
import useTeamPlayers from '../hooks/useTeamPlayers';
import PlayerList from './PlayerList';
import './details.css';
import teamColors from '../utils/teamColors';
import { getTeamLogo } from '../utils/teamUtils';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext.jsx';

function TeamDetails() {
  const { team } = useParams();
  const { players, loading, error } = useTeamPlayers(team);
  const { isLoggedIn } = useContext(AuthContext);

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

  return (
    <div className='container'>
      <div
        className='detail-header'
        style={{ backgroundColor: teamColors[team] }}
      >
        <img src={`/images/teams/${getTeamLogo(team)}`} alt={team} />

        <h2 className='detail-title'>{team}</h2>
      </div>

      <div className='detail-actions'>
        <Link to='/teams' className='back-link'>
          <img src='/images/icons/circle-chevron-left.svg' alt='back' />
          Back
        </Link>

        {isLoggedIn && (
          <Link to={`/teams/${team}/add-player`} className='add-player-link'>
            <img src='/images/icons/circle-plus.svg' alt='update' />
            Add Player
          </Link>
        )}
      </div>
      <PlayerList players={players} showUpdate={true} showDelete={true} />
    </div>
  );
}

export default TeamDetails;
