"use client";

import React, { useEffect, useState } from "react";
type Props = {};

const Clock = (props: Props) => {
  const [time, setTime] = useState<string>("00 : 00 : 00");
  useEffect(() => {
    const updateTime = () => {
      let datetime = new Date();
      let hours = datetime.getHours().toString().padStart(2, "0");
      let minutes = datetime.getMinutes().toString().padStart(2, "0");
      let seconds = datetime.getSeconds().toString().padStart(2, "0");
      let ampm = Number(hours) >= 12 ? "PM" : "AM";
      let formattedHours = Number(hours) % 12 || 12;

      const currentTime = `${formattedHours} : ${minutes} : ${seconds}  ${ampm} `;
      setTime(currentTime);
    };
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="flex gap-3">
        <span>{time}</span>
      </h1>
    </div>
  );
};

export default Clock;
