let x;
const todo = new Object();
todo.id = 1;
todo.name = 'ABC';
todo.completed = false;
x = todo;

const person = {
    address: {
        coords: {
            lat: 42.9384,
            lng:-71.3
        }
    }
}


x = person.address.coords.lat;
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Buy eggs' },
    {id:3,name:'Buy vegetables' },
    
];
x = todos[0].name
x = todos[1].name;
    
x = Object.keys(todo);
//x = Object.keys(todo).length;
x = Object.values(todo);
x = todo.hasOwnProperty('name');
console.log(x);


let y;
const con = new Object();
con.id = 2;
con.name = 'John';
con.age = 30;
y = con;
//console.log(y);

const per = {
    place: {
        loc: 'hyderabad',
        pincode: 500068,
    }
}

y = per.place.loc;
console.log(y);

const obj = { a: 4, b: 5 };
const obje = { c: 6, d: 7 };
const a = { ...obj, ...obje };
const a1 = Object.assign({}, obj, obje);
console.log(a1);

const ar = [
    { id: 1, name: 'trump' },
    { id: 1, name: 'trump' },
    { id: 1, name: 'trump' },
];

z = ar[0].name;
console.log(z);
