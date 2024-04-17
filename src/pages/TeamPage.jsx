import React, { useEffect, useState } from "react";

function TeamPage() {
  let [team, setTeam] = useState([]);
  useEffect(() => {
    let fetchMatches = async () => {
      let res = await fetch("http://localhost:8080/team");
      let data = await res.json();
      setTeam(data);
      console.log(data); //TODO: change to real
    };
    fetchMatches();
  }, []);
  return (
    <div>
      {team.map((team, index) => (
        <div key={index}>
          <ul>
            <li>id : {team.id}</li>
            <li>teamname : {team.teamName}</li>
            <li>total matches : {team.totalMatches}</li>
            <li>totalWins: {team.totalWins}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TeamPage;
