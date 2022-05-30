import { MyDatabaseModule } from '../../db/my-database-module';
import { myDatabaseModule as myDatabaseModuleFromModuleA } from './module_a';

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: 'Alice', age: 18 });
myDatabaseModule.add({ name: 'Jane', age: 25 });

console.log(myDatabaseModuleFromModuleA === myDatabaseModule); // true

myDatabaseModule.show();
