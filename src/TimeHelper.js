const parseMilliseconds = require("parse-ms");

function formatTime(ms) {
  const formattedTime = Number.isInteger(ms) ? parseMilliseconds(ms) : {};
  let minutes = formattedTime.hasOwnProperty("minutes")
      ? formattedTime.minutes
      : 0,
    seconds = formattedTime.hasOwnProperty("seconds")
      ? formattedTime.seconds
      : 0;
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return { minutes: minutes, seconds: seconds };
}

function getTotalTime(timeLog) {
  let totalTime = 0;
  timeLog.forEach((timeObj) => {
    totalTime += timeObj.duration;
  });
  return totalTime;
}

export { formatTime, getTotalTime };
