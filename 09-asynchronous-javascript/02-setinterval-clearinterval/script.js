const intervalID = setInterval(changeRandomColor, 1000);

// function myCallback(a) {
//     console.log(a,Date.now());
// }


function startChange() {
    if (!intervalID) {
        intervalID = setInterval(changeRandomColor, 1000);
        
    }
}
// function changeColor() {
//     if (document.body.style.backgroundColor !== 'black') {
//         document.body.style.backgroundColor = 'black ';
//         document.body.style.color = 'white';
//     } else {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
// }


function changeRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor=`#${randomColor}`
}


function stopChange() {
    clearInterval(intervalID);
}



document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);



//26 01 24 friday(6)-57=5+7=1+2=3
//07 06 24 wednesday(5)-42=4+2=6

// sunday 1
// monday 2
// tuesday 9
// wednesday 5
// thrusday 3
// friday 6
// saturday 8
