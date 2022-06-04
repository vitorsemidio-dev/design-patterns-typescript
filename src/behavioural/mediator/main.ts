import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';
import { SellerProduct } from './seller-product';

const mediator = new Mediator();

const sellerBleach = new Seller();
const product1: SellerProduct = { id: '1', name: 'Camisa Bleach', price: 100 };
const product2: SellerProduct = { id: '2', name: 'Zanpakutous', price: 200 };
sellerBleach.addProduct(product1, product2);

const sellerNaruto = new Seller();
const product3: SellerProduct = { id: '3', name: 'Bermuda Naruto', price: 300 };
const product4: SellerProduct = { id: '4', name: 'Kunai', price: 400 };
sellerNaruto.addProduct(product3, product4);

mediator.addSeller(sellerBleach, sellerNaruto);

mediator.showProducts();

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('1');
buyer.buy('4');
buyer.viewProducts();

// * Seller comprando
sellerNaruto.buy('3');
