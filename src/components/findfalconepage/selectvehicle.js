import React from 'react';

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

export default SelectVehicle;