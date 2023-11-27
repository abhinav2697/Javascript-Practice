//Falsy Values:
//-false
//-0
//-""or ''(Empty string)
//-null
//-undefined
//-NaN


//Truthy Values:
//-Everything else that is not falsy
//-true
//-'0'
//' ' (space in a string)
//-'false'(false in a string)
//-[] (empty array)
//-{} (empty object)
//-function () {} (empty function)
const x = {};

if (x) {
    console.log('This is truthy');

} else {
    console.log('This is falsy');
}

console.log(Boolean(x));


const children = 0;

if (!isNaN(children)) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}


//Cheking for empty arrays
const posts = [];

if (posts.length>0) {
    console.log('List Posts');
} else {
    console.log('No Posts to list');
}

//checking for empty objects
const user = {
    name: 'Brad',
};

if (Object.keys(user).length>0) {
    console.log('List User');
} else {
    console.log('No user');
}

//Loose Equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);