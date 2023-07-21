import React, { useState } from "react";
import "./StopWatch.css";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let intervalID;
  // setInterval(() => {
  //   settime(time + 1);
  //   console.log(time);
  // }, 1000);
  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalID);
    } else {
      const startTime = Date.now() - time;
      intervalID = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearInterval(intervalID);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch">
      <h1>{formatTime(time)}</h1>

      <button onClick={handleStartStop}>{isRunning ? "stop" : "start"}</button>
      <button>pause</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
