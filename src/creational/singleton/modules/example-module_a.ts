import { MyDatabaseModule } from '../db/my-database-module';

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: 'John', age: 20 });
myDatabaseModule.add({ name: 'Bob', age: 30 });

export { myDatabaseModule };
