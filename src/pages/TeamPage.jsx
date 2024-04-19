import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDetailCard from "../components/MatchDetailCard";
//import MAtchSmallCard from "../components/MAtchSmallCard";
import MatchesSmallCard from "../components/MatchesSmallCard";
import "./TeamPage.scss";
import { PieChart } from "react-minimal-pie-chart";
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
      <div className="TeamName">
        <h1>{team.teamName}</h1>
      </div>
      <div className="win-loss">
        Wins/loss
        <PieChart
          data={[
            {
              title: "Losses",
              value: team.totalMatches - team.totalWins,
              color: "#5cbd89",
            },
            { title: "Wins", value: team.totalWins, color: "#ec3c5c" },
          ]}
        />
      </div>
      <div className="matchdetail">
        <h3>Latest Matches</h3>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </div>
      <div className="matchsmall-container">
        <div className="matchsmall">
          {team.matches.slice(1).map((match) => (
            <MatchesSmallCard
              key={match._id}
              teamName={team.teamName}
              match={match}
            />
          ))}
          <div className="more">
            <a href="#">More </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
