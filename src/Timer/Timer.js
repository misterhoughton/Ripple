import React from "react";
import Clock from "./Clock";
import { getTotalTime, formatTime } from "../TimeHelper";
import TimerControls from "./TimerControls";
import TimeCounter from "./TimeCounter";

function Timer(props) {
  const getFormattedTotalTime = function (timeLog) {
      const totalTime = getTotalTime(timeLog);
      return formatTime(totalTime);
    },
    totalTime = getFormattedTotalTime(props.timeLog);

  return (
    <div>
      <Clock ms={props.ms} />
      <TimerControls
        isTicking={props.isTicking}
        start={props.start}
        stop={props.stop}
      />
      <p>
        <TimeCounter minutes={totalTime.minutes} seconds={totalTime.seconds} />
      </p>
    </div>
  );
}

export default Timer;
