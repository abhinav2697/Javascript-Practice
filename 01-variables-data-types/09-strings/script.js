let x;

const name = 'John';
const age = 30;
x = 'Hello, my name is ' + name + 'and I am ' + age + ' years old';

//Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

//String Properties and Methods

const s = new String('Hello World');
//wrapper creates a new string object
x = typeof s;
x = s.length;
x = s[1];
x = s.__proto__;
x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf('d');
x = s.substring(0, 4);
x = s.slice(-11, -6);
x = '             Hello World';
x = x.trim();
x = s.replace('World', 'Abhinav');
x = s.includes('Helli');
x = s.valueOf();
x=s.split('')
//console.log(x);

