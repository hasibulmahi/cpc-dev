import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CountDown = ({ date = 0, className = "countdown font-mono" }) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  let countDownDate = date.includes(" ")
    ? new Date(date).getTime()
    : parseInt(date);
  useEffect(() => {
    let x = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);
  }, [countDownDate]);

  return (
    <div>
      <span className={className}>
        <span
          style={{
            "--value": time.days,
          }}
        ></span>
        :
        <span
          style={{
            "--value": time.hours,
          }}
        ></span>
        :
        <span
          style={{
            "--value": time.minutes,
          }}
        ></span>
        :
        <span
          style={{
            "--value": time.seconds,
          }}
        ></span>
      </span>
    </div>
  );
};

export default CountDown;
