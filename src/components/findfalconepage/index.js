import React, { useEffect, Fragment, useState } from "react";
import Header from "../common/header";
import { useSelector, useDispatch } from "react-redux";
import { getPlanets, getVehicles } from "../../actions/rootActions";
import SelectPlanet from "./selectplanet";
import "./index.css";

function FindFalconePage() {
  const planets = useSelector((state) => state.planets);
  const vehicles = useSelector((state) => state.vehicles);
  const [selectedOptions, setSelectedOptions] = useState({
    destination1: "",
    destination2: "",
    destination3: "",
    destination4: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlanets());
    dispatch(getVehicles());
  }, []);

  const handleChangePlanet = (e) => {
    let selectedOptionsCopy = {
      ...selectedOptions,
      [e.target.name]: e.target.value,
    };
    setSelectedOptions(selectedOptionsCopy);
  };

  let selectedPlanets = Object.values(selectedOptions);

  const getOptions = (destination) => {
    return planets.filter(
      (planet) =>
        !selectedPlanets.includes(planet.name) || planet.name === destination
    );
  };

  return (
    <Fragment>
      <Header activeTab="findfalcone" />
      <div className="container">
        <h3>Select planets you want to search in:</h3>
        <div className="planets-container">
          {Array(4)
            .fill(undefined)
            .map((_, id) => (
              <SelectPlanet
                handleChangePlanet={handleChangePlanet}
                name={`destination${id+1}`}
                options={getOptions(selectedOptions[`destination${id+1}`])}
                value={selectedOptions[`destination${id+1}`]}
              />
            ))}
        </div>
      </div>
    </Fragment>
  );
}

export default FindFalconePage;
