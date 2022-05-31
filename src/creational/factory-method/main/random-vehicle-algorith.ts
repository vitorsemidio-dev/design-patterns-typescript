import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const bicycleFactory = new BicycleFactory();
  const carFactory = new CarFactory();

  const bicycle = bicycleFactory.getVehicle('Bicicleta');
  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Tesla');

  const vehicles = [bicycle, car1, car2];

  return vehicles[randomNumbers(vehicles.length)];
}
