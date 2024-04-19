import React from "react";
import { Link } from "react-router-dom";
import "./YearSelector.scss";
function YearSelector({ teamName }) {
  let years = [];
  let startYear = process.env.REACT_APP_DATA_START_YEAR;
  let endYear = process.env.REACT_APP_DATA_END_YEAR;
  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  return (
    <ol className="year-selector">
      {years.map((year) => (
        <li key={year}>
          <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
        </li>
      ))}
    </ol>
  );
}

export default YearSelector;
