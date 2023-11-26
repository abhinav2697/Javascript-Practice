//to avoid global scope collisions we use iife
//const user = 'John';

(function () {
    const user = 'John';
    console.log(user);
    const hello = () => console.log('hello from the IIFE');
    hello();
})();

(function (name) {
    console.log('Hello' + name);

})('Shawn');

(function hello() {
    console.log('Hello');
    //hello();
})();