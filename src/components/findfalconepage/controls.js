import React from "react";

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

export default Controls;
