import { Link, useParams } from 'react-router-dom';
import useNationPlayers from '../hooks/useNationPlayers';
import PlayerList from './PlayerList';
import { getNationName } from '../utils/nationUtils';
import './details.css';

function NationDetails() {
  const { nation } = useParams();

  console.log('nation:', JSON.stringify(nation));
  const { players, loading, error } = useNationPlayers(nation);

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
      <h2>{getNationName(nation)}</h2>

      <Link to='/nations' className='back-link'>
        <img src='/icon/circle-chevron-left.svg' alt='back' />
        Back
      </Link>

      <PlayerList players={players} />
    </div>
  );
}

export default NationDetails;
