const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
};

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}
const colorArr = ['red', 'blue', 'green', 'yellow'];
for (const color in colorArr) {
    console.log(color, colorArr[color]);
}