//Arrow function syntax
const add = (a, b) => {
    return a + b;
}
console.log(add(1, 2));


//Implicit Return
const subtract = (a, b) => a - b;
console.log(subtract(1, 2));

//can leave off() with a single parameter
const double = a => a * 2;
console.log(double(4));


//returning an object
const createObj = () => ({
        name: 'John Doe',

});
console.log(createObj());


const div = (a, b) => {
    return a / b;
}
console.log(div(1, 2));

const obj2 = () => ({
    name: 'Brad Pit',
    age:15
})
console.log(obj2());

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (n) {
    console.log(n);
});

numbers.forEach(n=>console.log(n))