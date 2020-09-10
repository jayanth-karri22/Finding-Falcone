import {GET_PLANETS, GET_VEHICLES, GET_TOKEN, FIND_FALCONE} from "../actions/actionTypes";

const initialState = {
    planets: {},
    vehicles: {},
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_PLANETS:
            return {
                ...state,
                planets: action.payload
            }
        default:
            return state;    
    }
}