import React, { Fragment, useEffect, useState } from "react";
import "./index.css";
import Select from 'react-select';


function SelectPlanet({
  options,
  handleChangePlanet,
  name,
  currentPlanet,
  vehicles,
  currentVehicle,
  handleChangeVehicle
}) {

  const canVehicleReachPlanet = (vehicle) => {
    const planet = options.find((option) => option?.name === currentPlanet);
    if (vehicle?.max_distance < planet?.distance || (vehicle.total_no == 0) && vehicle.name!=currentVehicle) {
      return false;
    } else {
      return true;
    }
  };

 


  return (
    <div className="dropdown-container">
      <p style={{ display: "inline-block", margin: "10px" }}>{name}</p>
      <Select onChange={(option) => handleChangePlanet(option.value,name)} name={name} value={[{label:currentPlanet || "Select Planet",value:currentPlanet || null}]} className="dropdown" options={options.map((option)=>{
        return {
          label:option.name,
          value:option.name
        }
      })}
      >
       
      </Select>
      {currentPlanet ? (
        <form className="vehicles">
            {vehicles.map((vehicle,index) => (
              <div className="radio" key={index}>
                <label className={!canVehicleReachPlanet(vehicle) ? "radio-disabled":"radio"}>
                  <input
                    style={{border: "10px solid #90DDD0"}}
                    type="radio"
                    value={vehicle.name}
                    name="vehicle"
                    disabled={!canVehicleReachPlanet(vehicle)}
                    onChange={(e)=>handleChangeVehicle(e,name)}
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
