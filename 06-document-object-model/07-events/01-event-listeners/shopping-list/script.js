//not recomended to put an attribute in the html file

function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');
    //itemList.innerHTML = '';

    //items.forEach((item) => item.remove());

    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

const clearBtn = document.querySelector('#clear');
//JavaScript Event Listener
//clearBtn.onclick = function () {
//    alert('Clear Items');
//};


//clearBtn.onclick = function () {
 //   console.log('Clear Items');
//};

//addeventListener()
//clearBtn.addEventListener('click', () => alert('Clear Items'));
//clearBtn.addEventListener('click', () => console.log('Clear Items'));
clearBtn.addEventListener('click', onClear());


//setTimeout(() => clearBtn.removeEventListener, 5000)

//setTimeout(() => clearBtn.click(), 5000);