import { MyDatabaseClassic } from '../../db/my-database-classic';
import { myDatabaseClassic as myDatabaseClassicFromA } from './classic_a';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Alice', age: 18 });
myDatabaseClassic.add({ name: 'Jane', age: 25 });

console.log(myDatabaseClassicFromA === myDatabaseClassic); // true

myDatabaseClassic.show();
