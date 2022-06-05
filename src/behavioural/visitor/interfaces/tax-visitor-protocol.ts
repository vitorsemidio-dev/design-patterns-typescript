import { AlcoholicDrink } from '../visitables/alcoholic-drink';
import { Cigarette } from '../visitables/cigarette';
import { Food } from '../visitables/food';

export interface TaxVisitorProtocol {
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number;
  calculateTaxesForCigarette(cigarette: Cigarette): number;
  calculateTaxesForFood(food: Food): number;
}
