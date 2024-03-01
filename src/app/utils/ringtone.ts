export class Alarm {
  private ringtone: HTMLAudioElement | any;

  constructor(audio: HTMLAudioElement | null) {
    this.ringtone = audio;
  }

  play() {
    this.ringtone.play();
    this.ringtone.loop = true;
  }
  stop() {
    this.ringtone.pause();
    this.ringtone.loop = false;
  }

  sleep(seconds: number) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000 * 60));
  }

  async startAlarm(min: number) {
    this.play();
    this.ringtone.loop = true;

    await this.sleep(min); // Sleep for 60 seconds (1 minute)
    this.ringtone.stop();
  }
}
