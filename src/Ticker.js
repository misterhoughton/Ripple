const Ticker = function (context) {
  let timeout, timeObj;
  const baseline = 0,
    increment = 10,
    getTimeObj = function () {
      return {
        duration: undefined,
        from: undefined,
        to: undefined,
      };
    },
    resetMs = function () {
      setMs(baseline);
    },
    setMs = function (int) {
      if (int > -1) {
        context.setState({
          ms: int,
        });
      }
    },
    start = function () {
      if (timeObj.from === undefined) {
        resetMs();
        timeObj.from = new Date().getTime();
        tick();
        context.setState({
          isTicking: true,
        });
      }
    },
    stop = function () {
      if (timeObj.from !== undefined) {
        clearTimeout(timeout);
        timeObj.to = new Date().getTime();
        timeObj.duration = +timeObj.to - +timeObj.from;
        context.addToTimeLog(timeObj);
        timeObj = getTimeObj();
        context.setState({
          isTicking: false,
        });
      }
    },
    tick = function () {
      timeout = setTimeout(() => {
        const now = new Date().getTime(),
          elapsed = +now - +timeObj.from;
        setMs(elapsed);
        tick();
      }, increment);
    };
  timeObj = getTimeObj();

  return {
    start: start,
    stop: stop,
  };
};

export default Ticker;
