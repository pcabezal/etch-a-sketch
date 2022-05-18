const mainContainer = document.querySelector('.mainContainer');

const addyAxis = document.createElement('div');
addyAxis.classList.add('yAxis');

const addBlock = document.createElement('div');
addBlock.classList.add('block');

let gridNumber = 16;

function createGrid() {
    mainContainer.appendChild(addyAxis);
    for (let i=gridNumber; i > 0; i--) {
        addyAxis.appendChild(addBlock.cloneNode(true));
    }
    for (let i=gridNumber; i > 1; i--) {
        mainContainer.appendChild(addyAxis.cloneNode(true));
    }
} 

createGrid();

const block1 = document.querySelectorAll('.block');

for(let i = 0; i < block1.length; i++) {
    block1[i].addEventListener("mouseenter", bindClick(i));
}

function bindClick(i) {
 return function() {
 //   console.log("you entered region number " + i);
    block1[i].style.backgroundColor = 'red';
 };
}


/* console.log(block)
console.log(block1)
console.log(block2);

block.addEventListener("mouseenter", changeColor);

//block.addEventListener("mouseenter", changeColor);
//console.log(block);

function changeColor() {
    console.log('sup bro');
    block.style.backgroundColor = 'red';
    addBlock.classList.add('dude');

};

 mainContainer.appendChild(addyAxis);
addyAxis.appendChild(addBlock.cloneNode(true));
addyAxis.appendChild(addBlock.cloneNode(true));
addyAxis.appendChild(addBlock.cloneNode(true));
mainContainer.appendChild(addyAxis.cloneNode(true));
mainContainer.appendChild(addyAxis.cloneNode(true));
mainContainer.appendChild(addyAxis.cloneNode(true));
mainContainer.appendChild(addyAxis.cloneNode(true));
*/












