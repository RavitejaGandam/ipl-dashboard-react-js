//import logo from './logo.svg';
import './App.scss';
import TeamTile from './components/TeamTile';
import HomePage from './pages/HomePage';
import MatchPage from './pages/MatchPage';
import TeamPage from './pages/TeamPage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path="/teams/:teamName" element={<TeamPage />}></Route>
          <Route path="/teams/:teamName/matches/:year" element={<MatchPage />}></Route>
          <Route path="/team" element={<TeamTile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
