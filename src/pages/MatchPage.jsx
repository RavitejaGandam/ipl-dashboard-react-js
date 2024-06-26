import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDetailCard from "../components/MatchDetailCard";
import "./MatchPage.scss";
import YearSelector from "./YearSelector";
import { Link } from "react-router-dom";

function MatchPage() {
  let [matches, setMatches] = useState([]);
  let { teamName, year } = useParams();
  useEffect(() => {
    let fetchMatches = async () => {
      let response = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`
      );
      if (!response.ok) throw new Error("HTTP-Error: " + response.status);
      let data = await response.json();
      setMatches(data);
      console.log(data);
    };
    fetchMatches();
  }, [teamName, year]);
  return (
    <div className="MatchPage">
      <div className="year-selector">
        <h3> Select Year </h3>
        <YearSelector teamName={teamName} />
      </div>
      <div>
        <div className="gobacktohomepage">
          <Link to="/homepage">Go Back To Home Page</Link>
        </div>
        <h1 className="page-heading">
          {teamName} matches in {year}
        </h1>
        {matches.map((match) => (
          <MatchDetailCard key={match.id} teamName={teamName} match={match} />
        ))}
      </div>
    </div>
  );
}

export default MatchPage;
