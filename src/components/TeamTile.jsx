import React from "react";
import "./TeamTile.scss";
import { Link } from "react-router-dom";
function TeamTile({ teamName }) {
  return (
    <div className="TeamTile">
      <h2>
        <Link to={`/teams/${teamName}`}>{teamName}</Link>
      </h2>
    </div>
  );
}

export default TeamTile;
