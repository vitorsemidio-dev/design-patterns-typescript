import { TaxVisitorProtocol } from '../interfaces/tax-visitor-protocol';
import { AlcoholicDrink } from '../visitables/alcoholic-drink';
import { Cigarette } from '../visitables/cigarette';
import { Food } from '../visitables/food';

export class USTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 1;
  }

  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 2;
  }

  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.15;
  }
}
