import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Nations from './pages/Nations';
import Positions from './pages/Positions';
import TeamDetails from './components/TeamDetails';
import NationDetails from './components/NationDetails';
import PositionDetails from './components/PositionDetails';
import AddPlayer from './components/AddPlayer';
import UpdatePlayer from './components/UpdatePlayer';
import Login from './components/Login';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/teams/:team/add-player' element={<AddPlayer />} />
        <Route path='/teams/:team' element={<TeamDetails />} />

        <Route
          path='/teams/:team/players/:id/update'
          element={<UpdatePlayer />}
        ></Route>

        <Route path='/nations' element={<Nations />} />
        <Route path='/nations/:nation' element={<NationDetails />} />

        <Route path='/positions' element={<Positions />} />
        <Route path='/positions/:position' element={<PositionDetails />} />

        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
