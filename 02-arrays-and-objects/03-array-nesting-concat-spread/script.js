let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'orange'];

fruits.push(berries);
x = fruits[3][2];
const allfruits = [fruits, berries];
x = allfruits[1][0];
x = fruits.concat(berries);
//Spread Operator
x = [...fruits, ...berries];
//flatten arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();


//Static Methods on Array object
x = Array.isArray('1');
x = Array.from('12345');
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);
console.log(x);
//console.log(x);