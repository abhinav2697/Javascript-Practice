const age = 13;
if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You cannot vote');
}

//using a ternary operator
age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

//Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote!';

//multiple statements
const auth = true;
//let redirect;
/*if (auth) {
    alert('welcome to dashboard');
    redirect = '/dashboard';
} else {
    alert('Access Denied');
    redirect = '/login';
}*/

const redirect = auth ? (alert('welcome to the dashboard'), '/dashboard')
    : (alert('Access Denied'), '/login');

console.log(redirect);

//short hand if doesnt have else condition

auth ? console.log('welcome to the dashboard') : null;
auth && console.log('Welcome to the dashboard');

