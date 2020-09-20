import React, { Fragment } from "react";
import "./index.css";
import Select from "react-select";
import SelectVehicle from "./selectvehicle.js"

function SelectPlanet({
  options,
  handleChangePlanet,
  name,
  currentPlanet,
  vehicles,
  currentVehicle,
  handleChangeVehicle,
}) {
  const canVehicleReachPlanet = (vehicle) => {
    const planet = options.find((option) => option?.name === currentPlanet);
    if (
      vehicle?.max_distance < planet?.distance ||
      (vehicle.total_no === 0 && vehicle.name !== currentVehicle)
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="dropdown-container">
      <p style={{ display: "inline-block", margin: "10px" }}>{name}</p>
      <Select
        onChange={(option) => handleChangePlanet(option.value, name)}
        name={name}
        value={[
          {
            label: currentPlanet || 'Select Planet',
            value: currentPlanet || '',
          },
        ]}
        className="dropdown"
        options={options?.map((option) => {
          return {
            label: option.name,
            value: option.name,
          };
        })}
      ></Select>
      {currentPlanet ? (
        <SelectVehicle vehicles={vehicles} canVehicleReachPlanet={canVehicleReachPlanet} handleChangeVehicle={handleChangeVehicle} name={name} currentVehicle={currentVehicle}/>
      ) : (
        <Fragment />
      )}
    </div>
  );
}

export default SelectPlanet;
