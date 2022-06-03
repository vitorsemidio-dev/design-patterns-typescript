import { ProductDecorator } from './product-decorator';
import { ProductProtocol } from './product-protocol';

export class ProductCustomization extends ProductDecorator {
  constructor(product: ProductProtocol) {
    super(product);
  }

  getPrice(): number {
    return this.product.getPrice() + 10;
  }

  getName(): string {
    return this.product.getName() + ' (Customization)';
  }
}
