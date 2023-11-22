let x;
//Array literal
const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mixed = [12, 'Hello', true, null];

//array constructor
const fruits = new Array('football', 'tennis', 'cricket');
x = arrays[0];
x = arrays[0] + arrays[1];
x = `My favorite spot is ${fruits[2]}`;
x = arrays.length;
fruits[2] = 'pear';
//fruits.length = 2
fruits[3] = 'strawberry';
fruits[fruits.length] = 'blueberry';
x = fruits;
console.log(x);