import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDetailCard from "../components/MatchDetailCard";

function MatchPage() {
  let [matches, setMatches] = useState([]);
  let { teamName, year } = useParams();
  useEffect(() => {
    let fetchMatches = async () => {
      let response = await fetch(
        `http://localhost:8080/team/${teamName}/matches?year=${year}`
      );
      if (!response.ok) throw new Error("HTTP-Error: " + response.status);
      let data = await response.json();
      setMatches(data);
      console.log(data);
    };
    fetchMatches();
  }, [teamName, year]);
  return (
    <div>
      <h1>Match page</h1>
      {matches.map((match) => (
        <MatchDetailCard teamName={teamName} match={match} />
      ))}
    </div>
  );
}

export default MatchPage;
