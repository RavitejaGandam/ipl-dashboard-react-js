import React from "react";

function MatchDetailCard({ match, teamName }) {
  if (!match) return null;
  let otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  return (
    <div>
      <h3>Latest Matches</h3>
      <h1>VS {otherTeam}</h1>
      <h2>{match.date}</h2>
      <h3>at {match.venue}</h3>
      <h3>
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </h3>
    </div>
  );
}

export default MatchDetailCard;
