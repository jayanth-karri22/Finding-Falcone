import React from "react";
import PropTypes from 'prop-types';

function Controls({totalTime, isFindFalconeValid, handleFindFalcone, handleReset}) {
  return (
    <div className="timer-container">
      <div className="timer">
        <p>Time Taken : {totalTime}</p>
      </div>
      <div className="button-container">
        <button
          className={isFindFalconeValid() ? "btn" : "btn btn-disabled"}
          type="button"
          disabled={isFindFalconeValid() ? false : true}
          onClick={handleFindFalcone}
        >
          Find Falcone
        </button>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

Controls.propTypes = {
  totalTime: PropTypes.number.isRequired,
  isFindFalconeValid: PropTypes.func.isRequired,
  handleFindFalcone: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired
}

export default Controls;
