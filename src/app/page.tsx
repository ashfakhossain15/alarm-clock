"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Clock from "./components/clock/clock";
import { useClock } from "./hooks/useClock";
import toast from "react-hot-toast";

interface AlarmClockProps {
  // Add any props you might need for AlarmClock
}

const AlarmClock: React.FC<AlarmClockProps> = () => {
  const { time: clock } = useClock();

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [aMpM, setAMPM] = useState("AM");
  const [time, setTime] = useState<string | undefined>();
  const hours: any = Array.from({ length: 13 }, (_, index) => index);
  const minutes = Array.from({ length: 60 }, (_, index) => index);
  const AMPM = ["AM", "PM"];

  useEffect(() => {
    setTime(
      () =>
        `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}:00${aMpM}`
    );
  }, [hour, minute, aMpM]);

  useEffect(() => {
    let clk = clock.split(" ").join("");
    console.log(clk, time);
    if (clk === time) {
      return console.log(true);
    }
  }, [clock, time]);

  const handleSetAlarm = () => {
    if (time === "00:00:00AM") {
      toast.error("Set Your alarm !");
    } else {
      toast.success("Alarm is set!");
    }
  };
  const resetAlarm = () => {
    setHour(0);
    setAMPM("AM");
    setMinute(0);

    toast.success("Alarm time reset!");
  };

  return (
    <div className="h-[100vh] flex justify-center items-center text-center ">
      <section className="space-y-4 px-12 bg-white py-10 rounded-lg ">
        <div className="flex items-center justify-center">
          <Image
            src="/cartoon-alarm-clock-ringing-vector-23354608.png"
            width={230}
            height={180}
            alt="Alarm Clock"
            property="Clock"
          />
        </div>
        <div className="clock flex items-center justify-center h-7 my-12 text-4xl">
          <Clock />
        </div>
        <h1 className="font-bold">Set your custom alarm</h1>
        <main className="grid grid-cols-3 items-center justify-around text-center gap-7 ">
          <div className="flex w-full border border-sky-300 rounded-lg p-2">
            <label htmlFor="hour">Hour :</label>
            <select
              id="hour"
              title="hourSelect"
              className="outline-0 mx-auto bg-transparent "
              value={hour}
              onChange={(e) => setHour(Number(e.target.value))}
            >
              {hours.map((hour: any) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full border border-sky-300 rounded-lg p-2">
            <h4>Minute :</h4>
            <select
              title="minuteSelect"
              value={minute}
              className="outline-0 mx-auto bg-transparent"
              onChange={(e) => setMinute(Number(e.target.value))}
            >
              {minutes.map((minute) => (
                <option key={minute} value={minute}>
                  {minute}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full border border-sky-300 rounded-lg p-2">
            <select
              title="Select"
              className="outline-0 mx-auto bg-transparent"
              id="hourSelect"
              value={aMpM}
              onChange={(e) => setAMPM(e.target.value)}
            >
              {AMPM.map((m: any) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </main>

        <div>
          <button
            type="button"
            title="setAlarm"
            className="bg-blue-500 text-white font-bold text-lg rounded-lg px-8 py-3"
            onClick={handleSetAlarm}
          >
            Set Alarm
          </button>
          <button
            type="button"
            title="setAlarm"
            className="bg-blue-500 text-white font-bold text-lg rounded-lg px-8 py-3"
            onClick={resetAlarm}
          >
            reset Alarm
          </button>
        </div>
      </section>
    </div>
  );
};

export default AlarmClock;
