import { ProductDecorator } from './product/product-decorator';
import { ProductProtocol } from './product/product-protocol';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt('T-Shirt Base', 10);

const tShirtWithDecorator = new ProductDecorator(tShirt);
const tShirtWithStampDecorator = new ProductStampDecorator(tShirt);

const tShirtWithStampFront = new ProductStampDecorator(tShirt);
const tShirtWithStampBack = new ProductStampDecorator(tShirt);
const tShirtWithStampFullStack = new ProductStampDecorator(
  tShirtWithStampFront,
);

function showDetail(protocol: ProductProtocol) {
  console.log(`Name: ${protocol.getName()} - Price: ${protocol.getPrice()}`);
}

showDetail(tShirt);
showDetail(tShirtWithDecorator);
showDetail(tShirtWithStampFront);
showDetail(tShirtWithStampBack);
showDetail(tShirtWithStampDecorator);
showDetail(tShirtWithStampFullStack);
