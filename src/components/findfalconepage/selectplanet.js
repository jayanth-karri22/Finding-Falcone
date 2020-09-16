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
  planets,
  calculateTotalTime,
}) {

  const dispatch = useDispatch();
  const [currentVehicle, setCurrentVehicle] = useState("");
  
  const [timeTaken, setTimeTaken] = useState(0);
  const canVehicleReachPlanet = (vehicle) => {
    const planet = options.find((option) => option?.name === currentPlanet);
    if (vehicle?.max_distance < planet?.distance || (vehicle.total_no == 0) && vehicle.name!=currentVehicle) {
      return false;
    } else {
      return true;
    }
  };

  const handleChangeVehicle = async e => {
    setCurrentVehicle(e.target.value)
    if(!currentVehicle){
      dispatch(decreaseVehicleCount(e.target.value,()=>{
        setCurrentVehicle(e.target.value)
      }))
    }
    else{
      dispatch(increaseVehicleCount(currentVehicle));
      dispatch(decreaseVehicleCount(e.target.value),()=>{
        setCurrentVehicle(e.target.value)
      })
    }

    let vehicleSpeed = vehicles.find((vehicle)=>vehicle.name === e.target.value).speed;
    let planetDistance = planets.find((planet)=>planet.name === currentPlanet).distance;
    await calculateTotalTime(timeTaken,planetDistance/vehicleSpeed);
    setTimeTaken(planetDistance/vehicleSpeed);
  }


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
