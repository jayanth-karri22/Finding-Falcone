import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

function Result() {
  const result = useSelector((state) => state.result);
  const timeTaken = useSelector((state) => state.totalTime);
  let dialogue =
    result?.status === "success"
      ? "Success! Congratulations on Finding Falcone. King Shan is mighty pleased."
      : "Al Falcone has escaped";
  let foundInPlanet = result?.planet_name
    ? `Found in planet : ${result.planet_name}`
    : "";
  let time = result?.status === "success" ? `Time Taken : ${timeTaken}` : "";
  return (
    <div className="result-container">
      <div className="result-content">
        <p>{dialogue}</p>
        <p>{foundInPlanet}</p>
        <p>{time}</p>
        <div className="btn-container">
          <Link to="findfalcone">
            <button className="btn">Try Again</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Result;
