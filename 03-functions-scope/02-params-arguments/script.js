//Default Params
function registerUser(user = 'Bot') {
   // if (!user) {
    //    user = 'Bot';
//}

    return user + ' is registered';
}

console.log(registerUser());
//Rest Params
//using rest operator we can pass unlimited no of parameters
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }

    return total;
}


console.log(sum(1, 2, 3));


//Objects as params
function loginUser(user) {
    return `The user ${user.name} with the od pf ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'John',
};
console.log(loginUser(user));

console.log(loginUser({
    id: 2,
    name: 'Sara',
    
}));

//Array as params(
function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);

}

getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function getRandom(...arr) {
    const randomIndex1 = Math.ceil(Math.random() * arr.length);
    const item1 = arr[randomIndex1];
    console.log(item1);
}
getRandom(1, 2, 3, 4, 5, 6, 7, 8);