//when we dont know no of times the loop runs we can use while loop
let i = 1;
/*while (i <= 20) {
    console.log('Number' + i);
    i++;
}*/

//loop through arrays
//const arr = [10, 20, 30, 40, 50];
/*while (i < arr.length) {
    console.log(arr[i]);
    i++;
}*/

//Nesting While loops
/*while (i<=5) {
    console.log('Number ' + i);
    let j = 1;
    while (j <= 5) {
        console.log(`${i}*${j}=${i * j}`);
        j++;
    }
}*/

//do- while loops
do {
    console.log('Number ' + i);
    i++;
} while (i <= 20);
