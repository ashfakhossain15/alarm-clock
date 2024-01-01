class Alarm {
  private ringtone: HTMLAudioElement;

  constructor() {
    this.ringtone = new Audio("/Real-Alarm-Beeps.mp3");
  }

  play() {
    this.ringtone.play();
    this.ringtone.loop = true;
  }

  sleep(seconds: number) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000 * 60));
  }

  async startAlarm(min: number) {
    this.play();
    await this.sleep(min); // Sleep for 60 seconds (1 minute)
    this.ringtone.pause();
    this.ringtone.loop = false;
  }
}

export const ringtone = new Alarm();
