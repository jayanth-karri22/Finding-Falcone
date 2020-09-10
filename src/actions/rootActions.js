import axios from 'axios';

import {GET_PLANETS, GET_VEHICLES, GET_TOKEN, FIND_FALCONE} from './actionTypes';

import {PLANETS_URL, VEHICLES_URL, TOKEN_URL, FIND_FALCONE_URL} from "../api/api";

export const getPlanets = () => dispatch => {
    return axios.get(PLANETS_URL)
    .then((response)=>{
        dispatch({
            type: GET_PLANETS,
            payload:response.data
        })
    })
}