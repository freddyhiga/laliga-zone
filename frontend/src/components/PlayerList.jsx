import { useState } from 'react';
import { Link } from 'react-router-dom';
import './playerList.css';
import '../index.css';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext.jsx';
import { deletePlayer } from '../api/playerApi';

function PlayerList({ players, showUpdate = false, showDelete = false }) {
  const [playerList, setPlayerList] = useState(players);

  const [playersToShow, setPlayersToShow] = useState(20);
  const { isLoggedIn } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  const handleDelete = (player) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${player.name}?`,
    );

    if (!confirmed) {
      return;
    }

    deletePlayer(player)
      .then(() => {
        setPlayerList((currentPlayers) =>
          currentPlayers.filter((p) => p.id !== player.id),
        );

        setMessage('Player deleted successfully!');

        setTimeout(() => {
          setMessage('');
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
        setMessage(error.message);
      });
  };

  return (
    <>
      <div className='table-container'>
        {message === 'Player deleted successfully!' && (
          <div className='success-overlay'>
            <div className='success-alert'>
              <h3>Player deleted successfully!</h3>
            </div>
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Nation</th>
              <th>Position</th>
              <th>Team</th>
              <th>Age</th>
              <th>Matches Played</th>
              <th>Starts</th>
              <th>Minutes</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>Penalty Goals</th>
              <th>Yellow Cards</th>
              <th>Red Cards</th>
              <th>Expected Goals</th>
              <th>Expected Assists</th>

              {isLoggedIn && showUpdate && showDelete && <th>Action</th>}
            </tr>
          </thead>

          <tbody>
            {playerList.slice(0, playersToShow).map((player) => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.nation}</td>
                <td>{player.position}</td>
                <td>{player.team}</td>
                <td>{player.age}</td>
                <td>{player.matchesPlayed}</td>
                <td>{player.starts}</td>
                <td>{player.minutes}</td>
                <td>{player.goals}</td>
                <td>{player.assists}</td>
                <td>{player.penaltyGoals}</td>
                <td>{player.yellowCards}</td>
                <td>{player.redCards}</td>
                <td>{player.expectedGoals}</td>
                <td>{player.expectedAssists}</td>

                {isLoggedIn && showUpdate && showDelete && (
                  <td>
                    <div className='actions-btn'>
                      <Link
                        to={`/teams/${player.team}/players/${player.id}/update`}
                        className='update-btn'
                      >
                        Update
                      </Link>
                      <button
                        type='button'
                        className='delete-btn'
                        onClick={() => handleDelete(player)}
                      >
                        <img src='/icon/x.svg' alt='Delete player' />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {playersToShow < playerList.length && (
          <button
            className='show-more-button'
            onClick={() => setPlayersToShow(playersToShow + 20)}
            style={{ marginTop: '20px', marginBottom: '10px' }}
          >
            Show more
          </button>
        )}
        {playerList.length > 20 && playersToShow >= playerList.length && (
          <button
            className='back-to-top-button'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src='/icon/circle-arrow-up.svg' alt='back to top' />
          </button>
        )}
      </div>
    </>
  );
}

export default PlayerList;
