import React, { Fragment, useState } from "react";
import "./index.css";

function SelectPlanet({
  options,
  handleChangePlanet,
  name,
  currentPlanet,
  vehicles,
}) {
  const [planetSelected, setPlanetSelected] = useState();

  const handleSelect = (e) => {
    handleChangePlanet(e);
  };

  const canVehicleReachPlanet = (vehicle) => {
    const planet = options.find((option) => option?.name === currentPlanet);
    if (vehicle?.max_distance < planet?.distance) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="dropdown-container">
      <p style={{ display: "inline-block", margin: "10px" }}>{name}</p>
      <select onChange={handleSelect} name={name} value={currentPlanet} className="dropdown">
        <option>Select</option>
        {options.map((planet, index) => (
          <option key={index}>{planet.name}</option>
        ))}
      </select>
      {currentPlanet ? (
        <form className="vehicles">
            {vehicles.map((vehicle) => (
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={vehicle.name}
                    name="vehicle"
                    disabled={!canVehicleReachPlanet(vehicle)}
                    on
                  />
                  {vehicle.name}-({vehicle.total_no})
                </label>
              </div>
            ))}
        </form>
      ) : (
        <Fragment />
      )}
    </div>
  );
}

export default SelectPlanet;
