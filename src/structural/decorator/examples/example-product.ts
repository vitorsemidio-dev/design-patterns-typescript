import { showDetail } from '../common/fn/show-detail';
import { ProductDecorator } from '../product/product-decorator';
import { ProductProtocol } from '../product/product-protocol';
import { ProductStampBackDecorator } from '../product/product-stamp-back-decorator';
import { ProductStampFrontDecorator } from '../product/product-stamp-front-decorator';
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
