import React, { Fragment, useEffect, useState } from "react";
import "./index.css";
import Select from 'react-select';
import { useDispatch } from "react-redux";
import { increaseVehicleCount, decreaseVehicleCount } from "../../actions/rootActions";

function SelectPlanet({
  options,
  handleChangePlanet,
  name,
  currentPlanet,
  vehicles,
}) {

  const dispatch = useDispatch();
  const [currentVehicle, setCurrentVehicle] = useState();

  const canVehicleReachPlanet = (vehicle) => {
    console.log(vehicle,currentVehicle)
    const planet = options.find((option) => option?.name === currentPlanet);
    if (vehicle?.max_distance < planet?.distance || (vehicle.total_no == 0) && vehicle.name!=currentVehicle) {
      return false;
    } else {
      return true;
    }
  };

  const handleChangeVehicle = e => {
    setCurrentVehicle(e.target.value)
    dispatch(decreaseVehicleCount(e.target.value))
  }


  return (
    <div className="dropdown-container">
      <p style={{ display: "inline-block", margin: "10px" }}>{name}</p>
      <Select onChange={(option) => handleChangePlanet(option.value,name)} name={name} className="dropdown" options={options.map((option)=>{
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
                <label>
                  <input
                    style={{border: "10px solid #90DDD0"}}
                    type="radio"
                    value={vehicle.name}
                    name="vehicle"
                    disabled={!canVehicleReachPlanet(vehicle)}
                    onChange={handleChangeVehicle}
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
