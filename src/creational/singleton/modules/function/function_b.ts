import { MyDatabaseFunction } from '../../db/my-database-function';
import { myDatabaseFunction as myDatabaseFunctionFromA } from './function_a';

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: 'Alice', age: 18 });
myDatabaseFunction.add({ name: 'Jane', age: 25 });

console.log(myDatabaseFunction === myDatabaseFunctionFromA); // true

myDatabaseFunction.show();
