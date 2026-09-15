import { Link } from 'react-router-dom';
import './teamCard.css';
import { getTeamLogo } from '../utils/teamUtils';

function TeamCard({ team }) {
  return (
    <div className='team-card'>
      <img src={`/images/${getTeamLogo(team)}`} alt={team} />

      <h3>{team}</h3>

      <div className='team-overlay'>
        <Link to={`/teams/${team}`}>See details</Link>
      </div>
    </div>
  );
}

export default TeamCard;
