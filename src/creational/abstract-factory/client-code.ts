import { EnterpriseCustomerVehicleFactory as EnterpriseCreateVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCustomerVehicleFactory as IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Tesla', 'John Doe');
const car2 = individualFactory.createVehicle('Celta', 'Jane Doe');

car1.pickUp();
car2.pickUp();
