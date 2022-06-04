import { Seller } from './seller';
import { SellerProduct } from './seller-product';

export class Mediator {
  private sellers: Seller[] = [];

  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      this.sellers.push(seller);
      seller.setMediator(this);
    });
  }

  buy(id: string): SellerProduct | void {
    for (let i = 0; i < this.sellers.length; i++) {
      const product = this.sellers[i].sell(id);

      if (product) {
        this._logProdut(product);
        return product;
      }
    }

    this._logNotFoundProduct(id);
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }

  private _logProdut(product: SellerProduct) {
    console.log(`Aqui está ${product.id} ${product.name} ${product.price}`);
  }

  private _logNotFoundProduct(id: string) {
    console.log(`Não temos esse produto ${id}`);
  }
}
