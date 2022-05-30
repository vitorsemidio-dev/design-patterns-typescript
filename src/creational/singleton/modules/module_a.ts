import { MyDatabaseClassic } from '../db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'John', age: 20 });
myDatabaseClassic.add({ name: 'Bob', age: 30 });

export { myDatabaseClassic };
