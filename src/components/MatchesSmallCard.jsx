import React from "react";
import { Link } from "react-router-dom";

function MatchesSmallCard({ match, teamName }) {
  if (!match) return null;
  let otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  let otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div>
      <h1>
        <Link to={otherTeamRoute}>{otherTeam}</Link>
      </h1>
      <p>
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </p>
    </div>
  );
}

export default MatchesSmallCard;
