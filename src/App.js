//import logo from './logo.svg';
import './App.css';
import MatchPage from './pages/MatchPage';
import TeamPage from './pages/TeamPage';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/teams/:teamName" element={<TeamPage />}></Route>
          <Route path="/teams/:teamName/matches/:year" element={<MatchPage />}></Route>
          {/* <Route path="/teams/:teamName" element={<TeamPage />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
