import React from "react";
import { Link } from "react-router-dom";
import "./MatchDetailCard.scss";
function MatchDetailCard({ match, teamName }) {
  if (!match) return null;
  let otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  let otherTeamRoute = `/teams/${otherTeam}`;
  let isMatchWon = teamName === match.matchWinner;
  return (
    <div
      className={
        isMatchWon ? "MatchDetailCard won-card" : "MatchDetailCard lost-card"
      }
    >
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
        <p>{match.playerOfMatch}</p>
        <h3>Umpires</h3>
        <p>
          {match.umpire1},{match.umpire2}
        </p>
      </div>
    </div>
  );
}

export default MatchDetailCard;
