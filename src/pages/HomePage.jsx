import React, { useEffect, useState } from "react";
import TeamTile from "../components/TeamTile";
import "./HomePage.scss";
function HomePage() {
  let [teams, setTeams] = useState([]);
  useEffect(() => {
    let fetchAllTeams = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/team`
      );
      let data = await response.json();
      setTeams(data);
    };
    fetchAllTeams();
  }, []);
  return (
    <div className="HomePage">
      <div className="header-section">
        <h1 className="app-name">GRT IPL Dashboard</h1>
      </div>
      <div className="team-grid">
        {teams.map((team) => (
          <TeamTile key={team.id} teamName={team.teamName} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
