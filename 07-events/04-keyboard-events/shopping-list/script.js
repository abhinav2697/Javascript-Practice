const itemInput = document.getElementById('item-input');

const onKeyPress = e => {
    console.log('Keypress');
};

const onKeyUp = (e) => {
    console.log('keyup');
};


/*const onKeyDown = (e) => {
    console.log('Keydown');
}*/

const onKeyDown = (e) => {
    //key
    //if (e.key === 'Enter') {
     //   alert('You pressed enter');
    //}
    //console.log(e.key);
    //document.querySelector('h1').innerText = e.key;

    if(e.keyCode===13){
    alert('You pressed enter');
    }

    //key codes
    https://www.toptal.com/developers/keycode/table
    //code 
    if (e.code === 'Digit1') {
        console.log('You pressed 1');
    }

    if (e.repeat) {
        console.log('You are holding down'+e.key);
    }
    console.log('Shift:' + e.shiftKey);
    console.log('Control: ' + e.ctrlKey);
    console.log('altKey: ' + e.altKey);
}
//itemInput.addEventListener('keypress', onKeyPress);
//itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
