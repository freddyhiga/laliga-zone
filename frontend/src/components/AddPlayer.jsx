import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { addPlayer } from '../api/playerApi';
import './formMessages.css';
import './details.css';
import './playerForm.css';
import teamColors from '../utils/teamColors';
import { getTeamLogo } from '../utils/teamUtils';
import { playerValidation } from '../utils/playerValidation';
import { nations } from '../utils/nationUtils';
import { getPositionName } from '../utils/positionUtils';

const positions = [
  'GK',
  'DF',
  'MF',
  'FW',
  'MF,DF',
  'MF,FW',
  'FW,DF',
  'FW,MF',
  'DF,MF',
  'DF,FW',
];

function AddPlayer() {
  const { team } = useParams();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    name: '',
    nation: '',
    position: '',
    age: '',
    matchesPlayed: '',
    starts: '',
    minutes: '',
    goals: '',
    assists: '',
    penaltyGoals: '',
    yellowCards: '',
    redCards: '',
    expectedGoals: '',
    expectedAssists: '',
  });

  const [player, setPlayer] = useState({
    name: '',
    nation: '',
    position: '',
    age: '',
    matchesPlayed: '',
    starts: '',
    minutes: '',
    goals: '',
    assists: '',
    penaltyGoals: '',
    yellowCards: '',
    redCards: '',
    expectedGoals: '',
    expectedAssists: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = playerValidation(name, value);

    setPlayer({
      ...player,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: error,
    });

    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((error) => error !== '');

    if (hasErrors) {
      return;
    }

    const playerData = {
      ...player,
      age: Number(player.age),
      matchesPlayed: Number(player.matchesPlayed),
      starts: Number(player.starts),
      minutes: Number(player.minutes),
      goals: Number(player.goals),
      assists: Number(player.assists),
      penaltyGoals: Number(player.penaltyGoals),
      yellowCards: Number(player.yellowCards),
      redCards: Number(player.redCards),
      expectedGoals: Number(player.expectedGoals),
      expectedAssists: Number(player.expectedAssists),
      team: team,
    };

    addPlayer(playerData)
      .then((data) => {
        console.log('Player created:', data);
        setMessage('Player added successfully!');

        setTimeout(() => {
          navigate(`/teams/${team}`);
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
        setMessage(error.message);
      });
  };

  return (
    <div className='container'>
      <div
        className='detail-header'
        style={{ backgroundColor: teamColors[team] }}
      >
        <img src={`/images/teams/${getTeamLogo(team)}`} alt={team} />

        <h2 className='detail-title'>{team}</h2>
      </div>

      <h2>Add Player</h2>

      {message === 'Player added successfully!' && (
        <div className='success-overlay'>
          <div className='success-alert'>
            <h3>Player added successfully!</h3>
          </div>
        </div>
      )}

      {message && message !== 'Player added successfully!' && (
        <p className='error-message'>{message}</p>
      )}

      <form onSubmit={handleSubmit}>
        <div className='player-form-grid'>
          <div className='form-field'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              value={player.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className='error-message'>{errors.name}</span>
            )}
          </div>

          <div className='form-field'>
            <label>Matches Played</label>
            <input
              type='number'
              name='matchesPlayed'
              value={player.matchesPlayed}
              onChange={handleChange}
            />
            {errors.matchesPlayed && (
              <span className='error-message'>{errors.matchesPlayed}</span>
            )}
          </div>

          <div className='form-field'>
            <label>Penalty Goals</label>
            <input
              type='number'
              name='penaltyGoals'
              value={player.penaltyGoals}
              onChange={handleChange}
            />
            {errors.penaltyGoals && (
              <span className='error-message'>{errors.penaltyGoals}</span>
            )}
          </div>

          <div className='form-field'>
            <label>Nation</label>

            <select name='nation' value={player.nation} onChange={handleChange}>
              <option value=''>Select a nation</option>

              {Object.entries(nations).map(([fifaCode, nation]) => (
                <option key={fifaCode} value={`${nation.code} ${fifaCode}`}>
                  {nation.name}
                </option>
              ))}
            </select>

            {errors.nation && (
              <span className='error-message'>{errors.nation}</span>
            )}
          </div>

          <div className='form-field'>
            <label>Starts</label>
            <input
              type='number'
              name='starts'
              value={player.starts}
              onChange={handleChange}
            />
            {errors.starts && (
              <span className='error-message'>{errors.starts}</span>
            )}
          </div>

          <div className='form-field'>
            <label>Yellow Cards</label>
            <input
              type='number'
              name='yellowCards'
              value={player.yellowCards}
              onChange={handleChange}
            />
            {errors.yellowCards && (
              <span className='error-message'>{errors.yellowCards}</span>
            )}
          </div>

          <div className='form-field'>
            <label>Position</label>

            <select
              name='position'
              value={player.position}
              onChange={handleChange}
            >
              <option value=''>Select a position</option>

              {positions.map((position) => (
                <option key={position} value={position}>
                  {getPositionName(position)}
                </option>
              ))}
            </select>

            {errors.position && (
              <span className='error-message'>{errors.position}</span>
            )}
          </div>

          <div className='form-field'>
            <label>Minutes</label>
            <input
              type='number'
              name='minutes'
              value={player.minutes}
              onChange={handleChange}
            />
            {errors.minutes && (
              <span className='error-message'>{errors.minutes}</span>
            )}
          </div>

          <div className='form-field'>
            <label>Red Cards</label>
            <input
              type='number'
              name='redCards'
              value={player.redCards}
              onChange={handleChange}
            />
            {errors.redCards && (
              <span className='error-message'>{errors.redCards}</span>
            )}
          </div>

          <div className='form-field'>
            <label>Age</label>
            <input
              type='number'
              name='age'
              value={player.age}
              onChange={handleChange}
            />
            {errors.age && <span className='error-message'>{errors.age}</span>}
          </div>

          <div className='form-field'>
            <label>Goals</label>
            <input
              type='number'
              name='goals'
              value={player.goals}
              onChange={handleChange}
            />
            {errors.goals && (
              <span className='error-message'>{errors.goals}</span>
            )}
          </div>

          <div className='form-field'>
            <label>Expected Goals</label>
            <input
              type='number'
              step='0.01'
              name='expectedGoals'
              value={player.expectedGoals}
              onChange={handleChange}
            />
            {errors.expectedGoals && (
              <span className='error-message'>{errors.expectedGoals}</span>
            )}
          </div>

          <div className='form-field'>
            <label>Assists</label>
            <input
              type='number'
              name='assists'
              value={player.assists}
              onChange={handleChange}
            />
            {errors.assists && (
              <span className='error-message'>{errors.assists}</span>
            )}
          </div>

          <div className='form-field'>
            <label>Expected Assists</label>
            <input
              type='number'
              step='0.01'
              name='expectedAssists'
              value={player.expectedAssists}
              onChange={handleChange}
            />
            {errors.expectedAssists && (
              <span className='error-message'>{errors.expectedAssists}</span>
            )}
          </div>
        </div>

        <div className='form-actions'>
          <button type='submit' className='form-btn'>
            Add Player
          </button>

          <Link to={`/teams/${team}`} className='back-btn'>
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddPlayer;
