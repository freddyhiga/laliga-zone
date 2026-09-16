import { Link, useParams } from 'react-router-dom';
import usePositionPlayers from '../hooks/usePositionPlayers';
import PlayerList from './PlayerList';
import { getPositionName } from '../utils/positionUtils';
import './details.css';

function PositionDetails() {
  const { position } = useParams();
  const { players, loading, error } = usePositionPlayers(position);

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
      <h2>{getPositionName(position)}</h2>

      <Link to='/positions' className='back-link'>
        <img src='/images/icons/circle-chevron-left.svg' alt='back' />
        Back
      </Link>

      <div style={{ marginTop: '20px' }}>
        <PlayerList players={players} />
      </div>
    </div>
  );
}

export default PositionDetails;
