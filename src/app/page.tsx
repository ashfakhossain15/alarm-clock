import React from "react";
import Image from "next/image";

interface AlarmClockProps {
  // Add any props you might need for AlarmClock
}

const AlarmClock: React.FC<AlarmClockProps> = () => {
  const hours = Array.from({ length: 25 }, (_, index) => index);
  const minutes = Array.from({ length: 61 }, (_, index) => index);

  return (
    <div className="h-[100vh] flex justify-center items-center text-center ">
      <section className="space-y-4 ">
        <div className="flex items-center justify-center">
          <Image
            src="/cartoon-alarm-clock-ringing-vector-23354608.png"
            width={230}
            height={180}
            alt="Alarm Clock"
          />
        </div>
        <h1 className="font-bold">Set your custom alarm</h1>
        <main className="grid grid-cols-3 items-center gap-7 ">
          <div className="flex">
            <h4>Hour:</h4>
            <select title="hourSelect" className="outline-0">
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </div>
          <div className="flex">
            <h4>Minute :</h4>
            <select title="minuteSelect" className="outline-0">
              {minutes.map((minute) => (
                <option key={minute} value={minute}>
                  {minute}
                </option>
              ))}
            </select>
          </div>
          <div className="flex">
            <h4>Minute :</h4>
            <select title="Select" className="outline-0" id="hourSelect">
              {minutes.map((minute) => (
                <option key={minute} value={minute}>
                  {minute}
                </option>
              ))}
            </select>
          </div>
        </main>
      </section>
    </div>
  );
};

export default AlarmClock;
