import { MealCompositeProtocol } from './../interfaces/meal-composite-protocol';

export class MealBox implements MealCompositeProtocol {
  private _children: MealCompositeProtocol[] = [];

  add(...meals: MealCompositeProtocol[]): void {
    meals.forEach((meal) => this._children.push(meal));
  }

  getPrice(): number {
    return this._children.reduce((sum, acc) => sum + acc.getPrice(), 0);
  }
}
