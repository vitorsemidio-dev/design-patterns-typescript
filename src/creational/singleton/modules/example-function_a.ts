import { MyDatabaseFunction } from '../db/my-database-function';

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: 'John', age: 20 });
myDatabaseFunction.add({ name: 'Bob', age: 30 });

export { myDatabaseFunction };
