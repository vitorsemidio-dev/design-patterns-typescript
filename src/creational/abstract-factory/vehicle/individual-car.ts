import { CustomerProtocol } from '../customer/customer-protocol';
import { VehicleProtocol } from './vehicle-protocol';

export class IndividualCar implements VehicleProtocol {
  constructor(
    public name: string,
    private readonly customer: CustomerProtocol,
  ) {}
  pickUp(): void {
    console.log(
      `${this.name}[${IndividualCar.name}] está buscando ${this.customer.name}`,
    );
  }
}
