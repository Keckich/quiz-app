import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const INTERVAL_TIME = 10;
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - INTERVAL_TIME);
    }, INTERVAL_TIME);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
