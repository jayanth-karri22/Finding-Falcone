import React, { useEffect, Fragment, useState } from "react";
import Header from "../common/header";
import { useSelector, useDispatch } from "react-redux";
import { getPlanets, getVehicles } from "../../actions/rootActions";
import SelectPlanet from "./selectplanet";
import "./index.css";

function FindFalconePage() {
  const planets = useSelector((state) => state.planets);
  const vehicles = useSelector((state) => state.vehicles);
  const [selectedOptions,setSelectedOptions] = useState({dropdown1:"",dropdown2:"",dropdown3:"",dropdown4:""})
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlanets());
    dispatch(getVehicles());
  }, []);

  const handleChangePlanet = (e) => {
    let selectedOptionsCopy = {...selectedOptions,[e.target.name] : e.target.value};  
    setSelectedOptions(selectedOptionsCopy);
  };

  let selectedPlanets = Object.values(selectedOptions)
  let options = {
    dropdown1 : planets.filter((planet)=> !selectedPlanets.includes(planet.name) || planet.name === selectedOptions.dropdown1),
    dropdown2 : planets.filter((planet)=> !selectedPlanets.includes(planet.name) || planet.name === selectedOptions.dropdown2),
    dropdown3 : planets.filter((planet)=> !selectedPlanets.includes(planet.name) || planet.name === selectedOptions.dropdown3),
    dropdown4 : planets.filter((planet)=> !selectedPlanets.includes(planet.name) || planet.name === selectedOptions.dropdown4), 
  }

  return (
    <Fragment>
      <Header activeTab="findfalcone" />
      <div className="container">
        <h3>Select planets you want to search in:</h3>
        <div className="planets-container">
            <SelectPlanet handleChangePlanet={handleChangePlanet} name="dropdown1" options={options.dropdown1} value={selectedOptions.dropdown1}/>
            <SelectPlanet handleChangePlanet={handleChangePlanet} name="dropdown2" options={options.dropdown2} value={selectedOptions.dropdown2}/>
            <SelectPlanet handleChangePlanet={handleChangePlanet} name="dropdown3" options={options.dropdown3} value={selectedOptions.dropdown3}/>
            <SelectPlanet handleChangePlanet={handleChangePlanet} name="dropdown4" options={options.dropdown4} value={selectedOptions.dropdown4}/>
        </div>
      </div>
    </Fragment>
  );
}

export default FindFalconePage;
