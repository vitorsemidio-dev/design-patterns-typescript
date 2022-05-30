import { MyDatabaseClassic } from '../db/my-database-classic';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'Alice', age: 18 });
myDatabaseClassic.add({ name: 'Jane', age: 25 });

console.log(myDatabaseClassicFromModuleA === myDatabaseClassic); // true

myDatabaseClassic.show();
