import { BeverageBuilderProtocol } from '../interfaces/beverage-builder-protocol';
import { DessertBuilderProtocol } from '../interfaces/dessert-builder-protocol';
import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder
  implements
    BeverageBuilderProtocol,
    DessertBuilderProtocol,
    MealBuilderProtocol
{
  private _mealBox: MealBox = new MealBox();

  reset(): this {
    this._mealBox = new MealBox();
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Bebida', 15);
    this._mealBox.add(beverage);

    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Sobremesa', 7);
    this._mealBox.add(dessert);

    return this;
  }

  makeMeal(): this {
    const beans = new Beans('Feijão', 8);
    const meat = new Meat('Carne', 10);
    const rice = new Rice('Arroz', 5);
    this._mealBox.add(beans, meat, rice);

    return this;
  }

  getMealBox(): MealBox {
    return this._mealBox;
  }

  getPrice(): number {
    return this._mealBox.getPrice();
  }
}
