import React, { useEffect, Fragment, useState } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import { useSelector, useDispatch } from "react-redux";
import {
  getPlanets,
  getVehicles,
  increaseVehicleCount,
  decreaseVehicleCount,
  getToken,
  findFalcone,
  countTime,
} from "../../actions/rootActions";
import SelectPlanet from "./selectplanet";
import Controls from "./controls.js";
import "./index.css";
import { useHistory } from "react-router-dom";

function FindFalconePage() {
  const planets = useSelector((state) => state.planets);
  const vehicles = useSelector((state) => state.vehicles);
  const token = useSelector((state) => state.token);
  const totalTime = useSelector((state) => state.totalTime);
  const history = useHistory();
  const [selectedOptions, setSelectedOptions] = useState({
    destination1: '',
    destination2: '',
    destination3: '',
    destination4: '',
  });

  const [selectedVehicles, setSelectedVehicles] = useState({
    destination1: '',
    destination2: '',
    destination3: '',
    destination4: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlanets());
    dispatch(getVehicles());
    dispatch(getToken());
  }, []);

  useEffect(() => {
    if (vehicles && vehicles.length) {
      calculateTime();
    }
  }, [vehicles, selectedOptions]);

  const calculateTime = () => {
    let time = 0;
    for (let i = 1; i <= 4; i++) {
      let vehicleSpeed = vehicles.find(
        (vehicle) => vehicle.name === selectedVehicles[`destination${i}`]
      )?.speed;
      let planetDistance = planets.find(
        (planet) => planet.name === selectedOptions[`destination${i}`]
      )?.distance;
      if (vehicleSpeed && planetDistance) {
        time += planetDistance / vehicleSpeed;
      }
    }
    dispatch(countTime(time));
  };

  const handleChangePlanet = (value, name) => {
    let selectedOptionsCopy = {
      ...selectedOptions,
      [name]: value,
    };
 
    setSelectedOptions(selectedOptionsCopy);
    handleChangeVehicle("",name);
  };

  let selectedPlanets = Object.values(selectedOptions);

  const getOptions = (destination) => {
    return planets.filter(
      (planet) =>
        !selectedPlanets.includes(planet.name) || planet.name === destination
    );
  };

  const handleChangeVehicle = (e, name) => {
    let value = ''
    if(e){
      value = e.target.value
    }
    let selectedVehiclesCopy = {
      ...selectedVehicles,
      [name]: value,
    };
    setSelectedVehicles(selectedVehiclesCopy);
    if (!selectedVehicles[name]) {
      dispatch(
        decreaseVehicleCount(value, () => {
          setSelectedVehicles(selectedVehiclesCopy);
        })
      );
    } else {
      dispatch(increaseVehicleCount(selectedVehicles[name]));
      dispatch(decreaseVehicleCount(value), () => {
        setSelectedVehicles(selectedVehiclesCopy);
      });
    }
  };

  const handleReset = () => {
    setSelectedOptions({
      destination1: '',
      destination2: '',
      destination3: '',
      destination4: '',
    });
    setSelectedVehicles({
      destination1: '',
      destination2: '',
      destination3: '',
      destination4: '',
    });
    dispatch(countTime(0));
    dispatch(getVehicles());
  };

  const isFindFalconeValid = () => {
    for (let i = 1; i <= 4; i++) {
      if (
        !selectedOptions[`destination${i}`] ||
        !selectedVehicles[`destination${i}`]
      ) {
        return false;
      }
    }
    return true;
  };

  const handleFindFalcone = () => {
    let requestBody = {
      token: token,
      planet_names: [],
      vehicle_names: [],
    };
    for (let i = 1; i <= 4; i++) {
      requestBody["planet_names"].push(selectedOptions[`destination${i}`]);
      requestBody["vehicle_names"].push(selectedVehicles[`destination${i}`]);
    }
    dispatch(findFalcone(requestBody, history, totalTime));
  };

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
                currentVehicle={selectedVehicles[`destination${id + 1}`]}
                vehicles={vehicles}
                planets={planets}
                handleChangeVehicle={handleChangeVehicle}
              />
            ))}
        </div>

        <Controls
          totalTime={totalTime}
          isFindFalconeValid={isFindFalconeValid}
          handleFindFalcone={handleFindFalcone}
          handleReset={handleReset}
        />
      </div>
      <Footer />
    </Fragment>
  );
}

export default FindFalconePage;
