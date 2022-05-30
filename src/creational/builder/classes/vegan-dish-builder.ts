import { BeverageBuilderProtocol } from '../interfaces/beverage-builder-protocol';
import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Juice, Rice } from './meals';

export class VeganDishBuilder
  implements BeverageBuilderProtocol, MealBuilderProtocol
{
  private _mealBox: MealBox = new MealBox();

  reset(): this {
    this._mealBox = new MealBox();
    return this;
  }

  makeBeverage(): this {
    const juice = new Juice('Suco', 4);
    this._mealBox.add(juice);

    return this;
  }

  makeMeal(): this {
    const beans = new Beans('Feijão', 8);
    const rice = new Rice('Arroz', 5);
    this._mealBox.add(beans, rice);

    return this;
  }

  getMealBox(): MealBox {
    return this._mealBox;
  }

  getPrice(): number {
    return this._mealBox.getPrice();
  }
}
