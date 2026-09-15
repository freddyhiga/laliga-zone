import { Link } from 'react-router-dom';
import { getPositionName } from '../utils/positionUtils';
import './teamCard.css';

function PositionCard({ position }) {
  return (
    <div className='team-card'>
      <img src='/images/player.png' alt='player' />
      <h3>{getPositionName(position)}</h3>

      <div className='team-overlay'>
        <Link to={`/positions/${position}`}>See details</Link>
      </div>
    </div>
  );
}

export default PositionCard;
