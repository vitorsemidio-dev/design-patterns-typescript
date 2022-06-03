import { DevCourse } from './dev-course/dev-course';
import { ProductDecorator } from './product/product-decorator';
import { ProductProtocol } from './product/product-protocol';
import {
  DevCourseBackDecorator,
  DevCourseFrontDecorator,
  ProductStampDecorator,
} from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

function showDetail(protocol: ProductProtocol) {
  console.log(`Name: ${protocol.getName()} - Price: ${protocol.getPrice()}`);
}

function showDetailTShirt(...protocols: ProductProtocol[]) {
  console.log('T-Shirt:');
  protocols.forEach(showDetail);
}

function showDetailDevCourse(...protocols: ProductProtocol[]) {
  console.log('Dev Course:');
  protocols.forEach(showDetail);
}

const tShirt = new TShirt('T-Shirt Base', 10);

const tShirtWithDecorator = new ProductDecorator(tShirt);
const tShirtWithStampDecorator = new ProductStampDecorator(tShirt);

showDetailTShirt(tShirt, tShirtWithDecorator, tShirtWithStampDecorator);

const devCourse = new DevCourse('Dev Course Base', 100);
const devBaseDecorator = new ProductDecorator(devCourse);
const devFront = new DevCourseFrontDecorator(devBaseDecorator);
const devBack = new DevCourseBackDecorator(devCourse);
const devFullStack = new DevCourseBackDecorator(devFront);

showDetailDevCourse(
  devCourse,
  devBaseDecorator,
  devFront,
  devBack,
  devFullStack,
);
