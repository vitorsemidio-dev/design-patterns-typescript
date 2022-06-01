export abstract class ProductComponent {
  abstract getPrice(): number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(...products: ProductComponent[]): void {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private readonly _children: ProductComponent[] = [];

  getPrice(): number {
    return this._children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this._children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this._children.indexOf(product);
    if (productIndex !== -1) this._children.splice(productIndex, 1);
  }

  printDetail() {
    console.log(this);
    console.log(this.getPrice());
  }
}

// Client

const smartTshirt = new ProductLeaf('Camiseta', 40);
const smartphone = new ProductLeaf('Celular', 1_000);
const smartPen = new ProductLeaf('Caneta', 250);

const boxSmartComposite = new ProductComposite();
boxSmartComposite.add(smartTshirt, smartphone, smartPen);
boxSmartComposite.printDetail();

const popit = new ProductLeaf('Pop-it', 10);
const tenis = new ProductLeaf('Tênis', 250);
const boxKidComposite = new ProductComposite();
boxKidComposite.add(popit, tenis);

const allBoxes = new ProductComposite();
const extra = new ProductLeaf('Brinde', 0);

allBoxes.add(boxSmartComposite, boxKidComposite, extra);
allBoxes.printDetail();
