import { RemoteControl } from './remote-control';

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    this._updateVolume(this.device.getVolume() + 1);
  }

  volumeDown(): void {
    this._updateVolume(this.device.getVolume() - 1);
  }

  private _updateVolume(newVolume: number): void {
    console.log(
      `${this.device.getName()} volume before: ${this.device.getVolume()}`,
    );
    this.device.setVolume(newVolume);
    console.log(
      `${this.device.getName()} volume after: ${this.device.getVolume()}\n`,
    );
  }
}
