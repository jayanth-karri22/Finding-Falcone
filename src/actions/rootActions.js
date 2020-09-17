import axios from "axios";

import {
  GET_PLANETS,
  GET_VEHICLES,
  GET_TOKEN,
  FIND_FALCONE,
  INCREASE_VEHICLE_COUNT,
  DECREASE_VEHICLE_COUNT,
  COUNT_TIME
} from "./actionTypes";

import {
  PLANETS_URL,
  VEHICLES_URL,
  TOKEN_URL,
  FIND_FALCONE_URL,
} from "../api/api";

export const getPlanets = () => (dispatch) => {
  return axios.get(PLANETS_URL).then((response) => {
    dispatch({
      type: GET_PLANETS,
      payload: response.data,
    });
  });
};

export const getVehicles = () => (dispatch) => {
  return axios.get(VEHICLES_URL).then((response) => {
    dispatch({
      type: GET_VEHICLES,
      payload: response.data,
    });
  });
};

export const increaseVehicleCount = (vehicle) => (dispatch) => {
  dispatch({
    type: INCREASE_VEHICLE_COUNT,
    payload: vehicle,
  });
};

export const decreaseVehicleCount = (vehicle) => (dispatch) => {
  dispatch({
    type: DECREASE_VEHICLE_COUNT,
    payload: vehicle,
  });
};

export const getToken = () => (dispatch) => {
  return axios
    .post(
      TOKEN_URL,
      {},
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
    .then((response) => {
      dispatch({
        type: GET_TOKEN,
        payload: response.data.token,
      });
    });
};

export const findFalcone = (data,history) => (dispatch) => {
  return axios
    .post(
      FIND_FALCONE_URL,
      data,
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
    .then((response) => {
        dispatch({
            type:FIND_FALCONE,
            payload:response.data
        })
    })
    .then(()=>{
      history.push({pathname:"/result"})
    })
    .catch((err)=>{
        console.log(err.message)
    })
};

export const countTime = (time) => dispatch => {
  dispatch({
    type:COUNT_TIME,
    payload:time
  })
}