import { Mediator } from './mediator';
import { SellerProduct } from './seller-product';

export class Seller {
  private products: SellerProduct[] = [];
  private mediator: Mediator | null = null;

  showProducts(): void {
    this.products.forEach((product) =>
      console.log(product.id, product.name, product.price),
    );
  }

  addProduct(...products: SellerProduct[]): void {
    products.forEach((product) => this.products.push(product));
  }

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }

  sell(id: string): SellerProduct | void {
    const product = this.products.find((p) => p.id === id);

    if (!product) return;

    this.products = this.products.filter((p) => p.id !== id);
    return product;
  }

  viewProducts(): void {
    if (!this.mediator) return;
    this.mediator.showProducts();
  }

  buy(id: string): void {
    if (!this.mediator) return;
    this.mediator.buy(id);
  }
}
