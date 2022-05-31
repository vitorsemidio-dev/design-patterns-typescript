import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorith';
import { randomNumbers } from './utils/random-numbers';

const carFactory = new CarFactory();

const customerNames = ['Jane Doe', 'John Doe', 'Eleven'];

for (let i = 0; i < 10; i++) {
  const car = randomCarAlgorithm();
  const customerName = customerNames[randomNumbers(customerNames.length)];

  car.pickUp(customerName);
  car.stop();

  const newCar = carFactory.pickUp(
    customerName,
    `Novo Carro - ${randomNumbers(100)}`,
  );
  newCar.stop();
  console.log('----\n');
}
