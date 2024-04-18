import React from "react";

function MAtchSmallCard({ match, teamName }) {
  if (!match) return null;
  let otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  return (
    <div>
      <p>data from small card</p>
      <p>vs {otherTeam}</p>
    </div>
  );
}

export default MAtchSmallCard;
