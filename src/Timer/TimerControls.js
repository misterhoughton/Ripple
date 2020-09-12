import React from "react";

function TimerControls(props) {
  return (
    <div className="btn-timer-wrapper">
      <button
        className={`btn-timer-start ${props.isTicking ? "hidden" : ""}`}
        name="start timer"
        onClick={props.start}
      >
        start
      </button>
      <button
        className={`btn-timer-stop  ${!props.isTicking ? "hidden" : ""}`}
        name="stop timer"
        onClick={props.stop}
      >
        stop
      </button>
    </div>
  );
}

export default TimerControls;
