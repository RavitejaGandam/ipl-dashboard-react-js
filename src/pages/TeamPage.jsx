import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDetailCard from "../components/MatchDetailCard";
//import MAtchSmallCard from "../components/MAtchSmallCard";
import MatchesSmallCard from "../components/MatchesSmallCard";
import "./TeamPage.scss";
function TeamPage() {
  let [team, setTeam] = useState(null);
  let { teamName } = useParams();
  useEffect(() => {
    let fetchMatches = async () => {
      let res = await fetch(`http://localhost:8080/team/${teamName}`);
      if (res.status !== 200) throw new Error("Failed to load team");
      let data = await res.json();
      setTeam(data);
      console.log(data); //TODO: change to real
    };
    fetchMatches();
  }, [teamName]);

  if (!team || !team.teamName) {
    return <h1>Oops!Team Not Found..</h1>;
  }
  return (
    <div className="TeamPage">
      {/* {team ? (
        <div>
          <h2>teamname : {team.teamName}</h2>
          <h3>total matches : {team.totalMatches}</h3>
          <p>totalWins: {team.totalWins}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )} */}
      <h1>{team.teamName}</h1>
      <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      {team.matches.slice(1).map((match) => (
        <MatchesSmallCard
          key={match._id}
          teamName={team.teamName}
          match={match}
        />
      ))}
    </div>
  );
}

export default TeamPage;
