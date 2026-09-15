import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className='home'>
      <video autoPlay muted loop playsInline>
        <source src='/videos/intro.mp4' type='video/mp4' />
      </video>

      <div className='home-title'>
        <h1>La Liga Zone</h1>
        <p>Explore teams, players and nations.</p>
      </div>

      <Link to='/teams' className='get-started'>
        Get Started
      </Link>
    </div>
  );
}

export default Home;
