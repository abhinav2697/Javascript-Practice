console.log(10 < 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 30 > 15);

//$$-will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
console.log(a);

const posts = ['Post One','Post Two'];
posts.length > 0 && console.log(posts[0]);

//|| -will return the first truthy value
let b;
b = 10 || 20;
b = 0 || 30;
b = 0 || null || '' || undefined;
console.log(b);

//??-Returns the right side operation when the left is

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;
console.log(c);