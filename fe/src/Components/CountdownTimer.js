import React, { useState, useEffect } from 'react';
import '../Styles/CountdownTimer.css';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventStartDate = new Date("2025-11-18T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventStartDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-timer">
        <div className="time-box">
          <span className="time">{timeLeft.days || "0"}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-box">
          <span className="time">{timeLeft.hours || "0"}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-box">
          <span className="time">{timeLeft.minutes || "0"}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-box">
          <span className="time">{timeLeft.seconds || "0"}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
