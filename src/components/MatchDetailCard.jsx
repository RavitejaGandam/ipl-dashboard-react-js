import React from "react";
import { Link } from "react-router-dom";
import "./MatchDetailCard.scss";
function MatchDetailCard({ match, teamName }) {
  if (!match) return null;
  let otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  let otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div className="MatchDetailCard">
      <div>
        <span className="vs">VS</span>
        <h1>
          <Link to={otherTeamRoute}>{otherTeam}</Link>
        </h1>
        <h2 className="date">{match.date}</h2>
        <h3 className="venue">at {match.venue}</h3>
        <h3 className="result">
          {match.matchWinner} won by {match.resultMargin} {match.result}
        </h3>
      </div>
      <div className="innings">
        <h3>First Innings</h3>
        <p>{match.team1}</p>
        <h3>Second Innings</h3>
        <p>{match.team2}</p>
        <h3>Man of the match</h3>
      </div>
    </div>
  );
}

export default MatchDetailCard;
