//Values are stored on the stack 
const name = 'John'
const age = 30;

//Reference value are stored on the heap
const person = {
    name: 'Brad',
    age: 40,
};

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'Bardley';

console.log(name, newName);
console.log(person,newPerson);