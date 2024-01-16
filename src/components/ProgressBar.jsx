import { useEffect, useState } from "react";

export default function ProgressBar({ timeout, onTimeOut }) {
  const INTERVAL_TIME = 10;
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeOut, timeout);
  }, [timeout, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - INTERVAL_TIME);
    }, INTERVAL_TIME);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return <progress className="question-time" value={remainingTime} max={timeout} />;
}
