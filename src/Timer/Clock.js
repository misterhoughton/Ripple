import React from "react";
import { formatTime } from "../TimeHelper";
import TimeCounter from "./TimeCounter";

function Clock(props) {
  const circle = {
      cx: 50,
      cy: 50,
      r: 50,
    },
    getStrokeDashArray = function (ms) {
      const perc = (ms / 6000) * 100,
        circleC = 2 * Math.PI * circle.r;
      return `${(perc * Math.PI) / 100},  ${circleC}`;
    },
    dialStyle = {
      transformOrigin: `${circle.r}px ${circle.r}px`,
    };
  return (
    <div className="clock-container">
      <div className="timer-count-wrapper">
        <p className="dead-centre">
          <TimeCounter
            minutes={formatTime(props.ms).minutes}
            seconds={formatTime(props.ms).seconds}
          />
        </p>
      </div>
      <svg
        viewBox={`0 0 ${circle.r * 2} ${circle.r * 2}`}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <mask
          id="clock-dial-mask"
          width={circle.r * 2}
          height={circle.r * 2}
          x={`-${circle.r}px`}
          y={`-${circle.r}px`}
        >
          <circle cx={circle.cx} cy={circle.cy} r={circle.r} fill="#fff" />
          <circle
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r / 1.35}
            fill="#000"
          />
        </mask>
        <circle
          id="clock-face"
          cx={circle.cx}
          cy={circle.cy}
          r={circle.r}
          mask="url(#clock-dial-mask)"
        />
        <circle
          className="clock-dial"
          cx={circle.cx}
          cy={circle.cy}
          r={circle.r / 2}
          strokeDasharray={getStrokeDashArray(props.ms)}
          strokeWidth={circle.r}
          style={dialStyle}
          mask="url(#clock-dial-mask)"
        />
      </svg>
    </div>
  );
}

export default Clock;
