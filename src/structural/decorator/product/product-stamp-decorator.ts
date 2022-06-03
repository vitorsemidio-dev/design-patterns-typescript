import { ProductDecorator } from './product-decorator';

export class ProductStampDecorator extends ProductDecorator {
  getPrice(): number {
    return this.product.getPrice() + 10;
  }

  getName(): string {
    return this.product.getName() + ' (Stamp)';
  }
}

export class ProductStampFrontDecorator extends ProductStampDecorator {
  getPrice(): number {
    return this.product.getPrice() + 26;
  }

  getName(): string {
    return this.product.getName() + ' (Stamp, Front)';
  }
}

export class ProductStampBackDecorator extends ProductStampDecorator {
  getPrice(): number {
    return this.product.getPrice() + 18;
  }

  getName(): string {
    return this.product.getName() + ' (Stamp, Back)';
  }
}
export class DevCourseFrontDecorator extends ProductStampDecorator {
  getPrice(): number {
    return this.product.getPrice() + 85;
  }

  getName(): string {
    return this.product.getName() + ' (HTML, CSS, JS)';
  }
}

export class DevCourseBackDecorator extends ProductStampDecorator {
  getPrice(): number {
    return this.product.getPrice() + 75;
  }

  getName(): string {
    return this.product.getName() + ' (Node, Express, MongoDB)';
  }
}
