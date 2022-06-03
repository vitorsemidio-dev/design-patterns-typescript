import { ProductStampDecorator } from './product-stamp-decorator';

export class ProductStampFrontDecorator extends ProductStampDecorator {
  getPrice(): number {
    return this.product.getPrice() + 26;
  }

  getName(): string {
    return this.product.getName() + ' (Stamp, Front)';
  }
}
