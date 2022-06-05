import { breakLine, getNames, getTotalPriceDetail } from './utils/utils';
import { AlcoholicDrink } from './visitables/alcoholic-drink';
import { Cigarette } from './visitables/cigarette';
import { Food } from './visitables/food';
import { BrazilTaxVisitor } from './visitors/brazil-tax-visitor';
import { USTaxVisitor } from './visitors/us-tax-visitor';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(5);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

const cart = [alcoholicDrink, cigarette, food];
const names = cart.map(getNames).join(', ');

console.log(`Itens do carrinho: ${names}\n`);

// * Sem Taxas
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
console.log(`Total sem taxas: ${total}`);
breakLine();

// * Taxas Brasileiras
const totalWithTaxesBrazil = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
  0,
);
const detailsTaxesBrazil = cart
  .map((visitableItem) => getTotalPriceDetail(visitableItem, brazilTaxVisitor))
  .join(' + ');
console.log(
  `Total com taxas do Brasil: ${totalWithTaxesBrazil} [${detailsTaxesBrazil}]`,
);
breakLine();

// * Taxas Americanas
const totalWithTaxesUS = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(usTaxVisitor) + sum,
  0,
);
const detailsTaxesUS = cart
  .map((visitableItem) => getTotalPriceDetail(visitableItem, usTaxVisitor))
  .join(' + ');
console.log(`Total com taxas do EUA: ${totalWithTaxesUS} [${detailsTaxesUS}]`);
breakLine();
