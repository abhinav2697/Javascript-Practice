let x;
const person = {
    name: 'Abhinav',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main St',
        city: 'Boston',
        state:'MA'
        
    },
    hobbies: ['music','sports']
};
x = person.name;
x = person['age'];
x = person.address.street;
x = person.hobbies[0];
person.name = 'John Doe';
person['isAdmin'] = false;
delete person.age;
person.hasChildren = true;

person.greet = function () {
    console.log(`hello,my name is ${this.name}`)
}
person.greet();
const person2 = {
    'first name': 'Abhinav',
    'last name':'Kulkarni',
}
x = person2.name;
console.log(x);


let y;
const car = {
    company: 'Honda',
    model: 'city',
    servicedone: 'true',
    address: {
        street: '123 main street',
        city: 'LA',
        country:'USA'
    },
    serviceyear:[2001,2002,2003]
}

y = car.company;
y = car.address.city;
y = car['age'] = 10;
y = car.servicedone = false;
y=car.serviceyear[2]
console.log(y);