import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();

mainDishBuilder.makeBeverage().makeMeal();
const mainMealBox1 = mainDishBuilder.getMealBox();
console.log(mainMealBox1, mainMealBox1.getPrice(), mainDishBuilder.getPrice());

mainDishBuilder.reset();

mainDishBuilder.makeBeverage().makeMeal().makeDessert();
const mainMealBox2 = mainDishBuilder.getMealBox();
console.log(mainMealBox2, mainMealBox2.getPrice(), mainDishBuilder.getPrice());

const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeMeal().makeBeverage();
const mainVeganDish = veganDishBuilder.getMealBox();
console.log(
  mainVeganDish,
  mainVeganDish.getPrice(),
  veganDishBuilder.getPrice(),
);
