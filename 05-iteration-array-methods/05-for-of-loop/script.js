//Loop Through Arrays
const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];

for (var item of items) {
    console.log(item);
}
for (var user of users) {
    console.log(user.name);
}

//Loop over strings
const str = 'Hello, world';
for (const s of str) {
    console.log(s);
}

//loop over maps
const map = new Map();
map.set('Name', 'John');
map.set('age', 30);
for (const [key, value] of map) {
    console.log(key,value);
}