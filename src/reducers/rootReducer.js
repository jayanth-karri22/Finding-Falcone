import {
  GET_PLANETS,
  GET_VEHICLES,
  GET_TOKEN,
  FIND_FALCONE,
  INCREASE_VEHICLE_COUNT,
  DECREASE_VEHICLE_COUNT,
} from "../actions/actionTypes";

const initialState = {
  planets: [],
  vehicles: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANETS:
      return {
        ...state,
        planets: action.payload,
      };
    case GET_VEHICLES:
      return {
        ...state,
        vehicles: action.payload,
      };
    case INCREASE_VEHICLE_COUNT:
      return {
        ...state,
        vehicles: state.vehicles.map((vehicle)=>{
            if(vehicle.name === action.payload){
                return {
                    ...vehicle,
                    ["total_no"] : vehicle.total_no + 1
                }
            }
            else{
                return {...vehicle}
            }
        })
      }
    case DECREASE_VEHICLE_COUNT:
      return {
        ...state,
        vehicles: state.vehicles.map((vehicle)=>{
            if(vehicle.name === action.payload){
                return {
                    ...vehicle,
                    ["total_no"] : vehicle.total_no - 1
                }
            }
            else{
                return {...vehicle}
            }
        })
      }
      
    default:
      return state;
  }
};
