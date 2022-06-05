import { CustomerBudget } from './customer-budget';
import { CEOBudgetHandler } from './handlers/ceo-budget-handler';
import { DirectorBudgetHandler } from './handlers/director-budget-handler';
import { ManagerBudgetHandler } from './handlers/manager-budget-handler';
import { SellerBudgetHandler } from './handlers/seller-budget-handler';

function logDetailSolicition(client: string, value: number) {
  console.log(`Solicitação de ${value} para o cliente ${client}`);
}

// * Basic
const customerBudgetBasic = new CustomerBudget(500);
const sellerBasic = new SellerBudgetHandler();
sellerBasic
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

logDetailSolicition('Basic', customerBudgetBasic.total);
sellerBasic.handle(customerBudgetBasic);
console.log(customerBudgetBasic);
console.log('\n');

// * Gold
const customerBudgetGold = new CustomerBudget(2_500);
const sellerGold = new SellerBudgetHandler();
sellerGold
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

logDetailSolicition('Gold', customerBudgetGold.total);
sellerGold.handle(customerBudgetGold);
console.log(customerBudgetGold);
console.log('\n');

// * Platinum
const customerBudgetPlatinum = new CustomerBudget(4_500);
const sellerPlatinum = new SellerBudgetHandler();
sellerPlatinum
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

logDetailSolicition('Platinum', customerBudgetPlatinum.total);
sellerPlatinum.handle(customerBudgetPlatinum);
console.log(customerBudgetPlatinum);
console.log('\n');

// * Black
const customerBudgetBlack = new CustomerBudget(40_000);
const sellerBlack = new SellerBudgetHandler();
sellerBlack
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

logDetailSolicition('Black', customerBudgetBlack.total);
sellerBlack.handle(customerBudgetBlack);
console.log(customerBudgetBlack);
console.log('\n');

// * Infinity
const customerBudgetInfinity = new CustomerBudget(150_000);
const sellerInfinity = new SellerBudgetHandler();
sellerInfinity
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

logDetailSolicition('Infinity', customerBudgetInfinity.total);
sellerInfinity.handle(customerBudgetInfinity);
console.log(customerBudgetInfinity);
console.log('\n');
