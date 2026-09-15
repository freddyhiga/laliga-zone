import { Link } from 'react-router-dom';
import './teamCard.css';
import { getNationName } from '../utils/nationUtils';

function getNationLogo(nation) {
  const countryCode = nation.split(' ')[0];
  return countryCode + '.svg';
}

function NationCard({ nation }) {
  return (
    <div className='team-card'>
      <img src={`/images/flags/${getNationLogo(nation)}`} alt={nation} />

      <h3>{getNationName(nation)}</h3>

      <div className='team-overlay'>
        <Link to={`/nations/${nation}`}>See details</Link>
      </div>
    </div>
  );
}

export default NationCard;
