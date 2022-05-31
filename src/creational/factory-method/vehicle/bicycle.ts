import { Vehicle } from './vehicle';

export class Bicycle implements Vehicle {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} está pedalando com ${customerName}`);
  }

  stop() {
    console.log(`${this.name} parou de pedalar`);
  }
}
