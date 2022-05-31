import { CustomerProtocol } from '../customer/customer-protocol';
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualCar } from '../vehicle/individual-car';
import { VehicleProtocol } from './../vehicle/vehicle-protocol';
import { CreateVehicleCustomerProtocol } from './customer-vehicle-factory';

export class IndividualCustomerVehicleFactory
  implements CreateVehicleCustomerProtocol
{
  createCustomer(customerName: string): CustomerProtocol {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
