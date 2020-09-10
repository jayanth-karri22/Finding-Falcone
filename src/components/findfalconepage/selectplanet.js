import React from "react";
import {useSelector} from 'react-redux';

function SelectPlanet({options,handleChangePlanet,name,value}) {
  return (
    <select onChange={(e)=>handleChangePlanet(e)} name={name} value={value}>
    <option>Select</option>
      {options
        .map((planet, index) => (
          <option key={index}>
            {planet.name}
          </option>
        ))}
    </select>
  );
}

export default SelectPlanet;