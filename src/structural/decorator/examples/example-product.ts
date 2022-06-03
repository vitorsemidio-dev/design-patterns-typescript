import { showDetail } from '../common/fn/show-detail';
import { ProductStampBackDecorator } from '../product/product-back-decorator';
import { ProductDecorator } from '../product/product-decorator';
import { ProductStampFrontDecorator } from '../product/product-front-decorator';
import { ProductProtocol } from '../product/product-protocol';
import { TShirt } from '../product/t-shirt';

function showDetailTShirt(...protocols: ProductProtocol[]) {
  console.log('T-Shirt:');
  protocols.forEach(showDetail);
}

const tShirt = new TShirt('T-Shirt Base', 10);
const tShirtDecorator = new ProductDecorator(tShirt);
const tShirtStampBack = new ProductStampBackDecorator(tShirtDecorator);
const tShirtStampFront = new ProductStampFrontDecorator(tShirtDecorator);
const tShirtStampBackFront = new ProductStampBackDecorator(
  new ProductStampFrontDecorator(tShirt),
);

export function example() {
  showDetailTShirt(
    tShirt,
    tShirtDecorator,
    tShirtStampBack,
    tShirtStampFront,
    tShirtStampBackFront,
  );
}
