import React from "react";
import { Link } from "react-router-dom";
import "./MatchesSmallCard.scss";
function MatchesSmallCard({ match, teamName }) {
  if (!match) return null;
  let otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  let otherTeamRoute = `/teams/${otherTeam}`;
  let isMatchWon = teamName === match.matchWinner;
  return (
    <div
      className={
        isMatchWon ? "MatchesSmallCard won-card" : "MatchesSmallCard lost-card"
      }
    >
      <span className="vs">VS</span>
      <h1>
        <Link to={otherTeamRoute}>{otherTeam}</Link>
      </h1>
      <p className="result">
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </p>
    </div>
  );
}

export default MatchesSmallCard;
