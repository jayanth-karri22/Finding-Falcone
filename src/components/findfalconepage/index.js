import React, { useEffect, Fragment, useState } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
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

  const [totalTime, setTotalTime] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlanets());
    dispatch(getVehicles());
  }, []);

  const calculateTotalTime = (prevCalculated, currentCalculated) => {
    setTotalTime(totalTime + currentCalculated - prevCalculated);
  };

  const handleChangePlanet = (value, name) => {
    let selectedOptionsCopy = {
      ...selectedOptions,
      [name]: value,
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

  const handleReset = () => {
    setSelectedOptions({
      destination1: "",
      destination2: "",
      destination3: "",
      destination4: "",
    });
    setTotalTime(0);
    dispatch(getVehicles());
  }

  return (
    <Fragment>
      <Header activeTab="findfalcone" />
      <div className="container">
        <p style={{ fontSize: "28px" }}>
          Select planets you want to search in:
        </p>
        <div className="planets-container">
          {Array(4)
            .fill(undefined)
            .map((_, id) => (
              <SelectPlanet
                key={id}
                handleChangePlanet={handleChangePlanet}
                name={`destination${id + 1}`}
                options={getOptions(selectedOptions[`destination${id + 1}`])}
                currentPlanet={selectedOptions[`destination${id + 1}`]}
                vehicles={vehicles}
                planets={planets}
                calculateTotalTime={calculateTotalTime}
              />
            ))}
        </div>
        <div className="timer-container">
          <div className="timer">
            <p>Time Taken : {totalTime}</p>
          </div>
          <div className="button-container">
            <button className="btn btn-disabled" type="button" disabled={true}>Find Falcone</button>
            <button className="btn" onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default FindFalconePage;
