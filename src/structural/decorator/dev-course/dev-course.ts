import { ProductProtocol } from '../product/product-protocol';
export class DevCourse implements ProductProtocol {
  constructor(private name: string, private price: number) {}

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
