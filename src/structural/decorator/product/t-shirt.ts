import { ProductProtocol } from './product-protocol';
export class TShirt implements ProductProtocol {
  constructor(private name: string, private price: number) {}

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
