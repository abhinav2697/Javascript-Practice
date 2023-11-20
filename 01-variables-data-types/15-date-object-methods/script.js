let x;
let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(x);


const arr = [1, 2, 3, 4];
arr.push(200);
arr.push(100);
console.log(arr.length);


const dog = {
    legs: 4,
    sound:"bark"
}

dog.food = "omnivorous";
console.log(dog);


function square(num) {
    return num * num;
}
console.log(square(10));
var sqr = num => num * num;
console.log(sqr(2));

function f1(a, b) {
    if (a == "undefined") {
        a = 200;
    }
    if (b == undefined) {
        b = 100;
    }
    console.log(a, b);
}
f1();


function f1(a = 16, b = 20) {
    console.log(a, b);
}
f1(100, 200);

function f1(a, b) {
    console.log(a, b);
    console.log(arguments);
    console.log(arguments[3]);
}
f1(10, 20, 30, 40, 50);


x = Intl.DateTimeFormat('en-us').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('default', { month: 'long' });
x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Asia/kolkata',
});
    

console.log(x);

