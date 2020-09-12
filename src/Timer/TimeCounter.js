import React from "react";

function TimeCounter(props) {
    return (
        <span className="timer-count">
          {props.minutes}
          <span className="timer-delimiter">:</span>
          {props.seconds}
        </span>
    )
}

export default TimeCounter;