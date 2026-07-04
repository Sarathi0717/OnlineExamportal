import React, { useEffect, useState } from "react";

function Timer({ duration = 600, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onTimeUp) {
        onTimeUp();
      }
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer-container">
      <h3>Time Remaining</h3>

      <div
        className={
          timeLeft <= 60
            ? "timer danger"
            : "timer"
        }
      >
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </div>
    </div>
  );
}

export default Timer;