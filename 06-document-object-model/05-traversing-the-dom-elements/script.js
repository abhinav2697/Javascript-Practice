//Get child elements
let output;
const parent = document.querySelector('.parent');
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;
parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';
parent.firstElementChild.innerText = 'Child One';
console.log(output);


//Get parent elements
const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.border = '10px';

//Sibiling elements
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
output = secondItem.nextElementsSibling;
secondItem.nextElementSibling.style.color = 'green';
secondItem.nextElementSibling.style.color = 'orange';
console.log(output);