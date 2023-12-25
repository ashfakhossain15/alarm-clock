import React from "react";
import Image from "next/image";
import Clock from "./components/clock/clock";

interface AlarmClockProps {
  // Add any props you might need for AlarmClock
}

const AlarmClock: React.FC<AlarmClockProps> = () => {
  const hours = Array.from({ length: 12 }, (_, index) => index + 1);
  const minutes = Array.from({ length: 61 }, (_, index) => index);
  const AMPM = ["AM", "PM"];

  const handleSetAlarm = (): any => {
    console.log("setAlarm");
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
          />
        </div>
        <div className="clock flex items-center justify-center h-7 my-12 text-4xl">
          <Clock />
        </div>
        <h1 className="font-bold">Set your custom alarm</h1>
        <main className="grid grid-cols-3 items-center justify-around text-center gap-7 ">
          <div className="flex w-full border border-sky-300 rounded-lg p-2">
            <h4>Hour :</h4>
            <select
              title="hourSelect"
              className="outline-0 mx-auto bg-transparent "
            >
              {hours.map((hour) => (
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
              className="outline-0 mx-auto bg-transparent"
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
            title="setAlarm"
            className="bg-blue-500 text-white font-bold text-lg rounded-lg px-8 py-3"
            onClick={handleSetAlarm()}
          >
            Set Alarm
          </button>
        </div>
      </section>
    </div>
  );
};

export default AlarmClock;
