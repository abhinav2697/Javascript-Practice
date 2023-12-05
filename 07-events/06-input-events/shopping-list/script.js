const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');

const heading = document.querySelector('h1');

function onInput(e) {
    console.log(e.target.value);
}

function onChecked(e) {
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus() {
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'green';
}

function onBlur() {
    console.log('Input is blurred');
    itemInput.style.outlineStyle = 'none';
   // itemInput.style.outlineWidth = '1px';
   // itemInput.style.outlineColor = 'red';
}
itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
