import { ProductStampDecorator } from './product-stamp-decorator';

export class ProductStampBackDecorator extends ProductStampDecorator {
  getPrice(): number {
    return this.product.getPrice() + 18;
  }

  getName(): string {
    return this.product.getName() + ' (Stamp, Back)';
  }
}
