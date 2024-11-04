import React, { useEffect, useState } from "react";
import "./CountDown.css";

interface TimeOutProps {
  targetDate: string; // Expected date format: "YYYY-MM-DD"
}

const CountDown: React.FC<TimeOutProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown-timer">
      <div className="timer">
        <div className="time-section">
          <span className="time">{timeLeft.days}</span>
          <span className="label">Days</span>
        </div>
        <h3>:</h3>
        <div className="time-section">
          <span className="time">{timeLeft.hours}</span>
          <span className="label">Hours</span>
        </div>
        <h3>:</h3>
        <div className="time-section">
          <span className="time">{timeLeft.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <h3>:</h3>
        <div className="time-section">
          <span className="time">{timeLeft.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
