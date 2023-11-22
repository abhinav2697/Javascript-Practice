//challange 1
const arr1 = [1, 2, 3, 4, 5];
//const arr2 = [5, 6, 7, 8, 9, 10];
//arr1.reverse();
//arr1.push(0);
//arr1.unshift(6);
arr1.push(6);
arr1.unshift(0);
arr1.reverse();
//console.log(x);
//const arr3 = arr1.splice(0, 4).concat(arr2);
//console.log(arr1);
//challenge 2
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [5, 6, 7, 8, 9, 10];

const arr4 = arr2.slice(0, 4).concat(arr3);
//solution 2
const arr5 = [...arr2, ...arr3];
arr1.splice(4,1);
console.log(arr5);

