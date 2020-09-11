import React, { Fragment } from "react";
import "./index.css";

function SelectPlanet({options,handleChangePlanet,name,value}) {
  return (
    <div className="dropdown-container">
    <p style={{display:"inline-block",margin:"10px"}}>{name}</p>
    <select onChange={(e)=>handleChangePlanet(e)} name={name} value={value} className="dropdown">
    <option>Select</option>
      {options
        .map((planet, index) => (
          <option key={index}>
            {planet.name}
          </option>
        ))}
    </select>
    </div>
  );
}

export default SelectPlanet;