import React from 'react';
import PropTypes from 'prop-types'

function SelectVehicle({canVehicleReachPlanet,vehicles,handleChangeVehicle,name,currentVehicle}){
    return(
        <form className="vehicles">
        {vehicles.map((vehicle, index) => (
          <div className="radio" key={index}>
            <label
              className={
                !canVehicleReachPlanet(vehicle) ? "radio-disabled" : "radio"
              }
            >
              <input
                style={{ border: "10px solid #90DDD0" }}
                type="radio"
                value={vehicle.name}
                name="vehicle"
                disabled={!canVehicleReachPlanet(vehicle)}
                onChange={(e) => handleChangeVehicle(e, name)}
                checked={vehicle.name === currentVehicle}
              />
              {vehicle.name}-({vehicle.total_no})
            </label>
          </div>
        ))}
      </form>
    )
}

SelectVehicle.propTypes = {
  canVehicleReachPlanet: PropTypes.func.isRequired,
  vehicles:PropTypes.array.isRequired,
  handleChangeVehicle:PropTypes.func.isRequired,
  name:PropTypes.string.isRequired,
  currentVehicle:PropTypes.string.isRequired
}

export default SelectVehicle;