import { DeviceImplementation } from './device-implementation';

export class Tv implements DeviceImplementation {
  private _power: boolean;
  private _volume: number;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._power = false;
    this._volume = 0;
  }

  getName(): string {
    return this._name;
  }

  setPower(powerStatus: boolean): void {
    this._power = powerStatus;
  }

  getPower(): boolean {
    return this._power;
  }

  setVolume(volume: number): void {
    if (!this._validateNumber(volume, 0, 100)) return;
    this._volume = volume;
  }

  getVolume(): number {
    return this._volume;
  }

  private _validateNumber(value: number, min: number, max: number): boolean {
    return min <= value && value <= max;
  }
}
