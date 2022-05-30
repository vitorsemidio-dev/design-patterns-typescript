import { MyDatabaseFunction } from '../db/my-database-function';
import { myDatabaseFunction as myDatabaseFunctionFromExampleA } from './example-function_a';

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: 'Alice', age: 18 });
myDatabaseFunction.add({ name: 'Jane', age: 25 });

console.log(myDatabaseFunction === myDatabaseFunctionFromExampleA); // true

myDatabaseFunction.show();
