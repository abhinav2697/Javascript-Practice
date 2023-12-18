// Sealing - Prevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed
// Sealing - Prevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed
const rectObj = {
    name: 'Rectangle 2',
    width: 10,
    height: 10,
};
Object.seal(rectObj);
let descriptors = Object.getOwnPropertyDescriptor(rectObj);
//console.log(descriptors);
rectObj.color = 'red';
//delete rectObj.name;
rectObj.width = 20;
//console.log(rectObj);

const circleObj = {
    name: 'Circle 1',
    radius: 30,
};
Object.freeze(circleObj);
 descriptors = Object.getOwnPropertyDescriptor(circleObj);
console.log(descriptors);

console.log('rectObj is Sealed?', Object.isSealed(rectObj));
console.log('rectObj is frozen?', Object.isFrozen(rectObj));
console.log('circleObj is Sealed?', Object.isSealed(circleObj));
console.log('circleObj is frozen?', Object.isFrozen(circleObj));
