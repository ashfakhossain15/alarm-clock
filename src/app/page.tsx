import Image from "next/image";

const AlarmClock = () => {
  return (
    <div>
      <Image
        src="/cartoon-alarm-clock-ringing-vector-23354608.png"
        width={230}
        height={180}
        alt="Alarm Clock"
      />
      <h1 className="font-bold">Set your custom alarm</h1>
    </div>
  );
};
export default AlarmClock;
