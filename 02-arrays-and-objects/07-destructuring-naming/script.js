const firstName = 'Ak';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
};
console.log(person.age);
//Destructuring

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John',
    },
};

const {
    id: todoId,
    title,
    user: { name },
} = todo;

//const { id, title, user:{name} } = todo;
console.log(todoId);

//destructuring
const colorArr = ["red", "yellow", "green", "white", "black"];
const [first, second, ...rest] = colorArr;
console.log(first, second,rest);

