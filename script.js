const mainContainer = document.querySelector('.mainContainer');

const addyAxis = document.createElement('div');
addyAxis.classList.add('yAxis');

const addBlock = document.createElement('div');
addBlock.classList.add('block');

function createGrid(gridNumber) {
    mainContainer.appendChild(addyAxis);
    for (let i=gridNumber; i > 0; i--) {
        addyAxis.appendChild(addBlock.cloneNode(true));
    }
    for (let i=gridNumber; i > 1; i--) {
        mainContainer.appendChild(addyAxis.cloneNode(true));
    }
    colorBlockActivate('blue');    
} 

createGrid(50);


//clear etch area
function removeAllChildNodes() {
    while (addyAxis.firstChild) {
        addyAxis.removeChild(addyAxis.firstChild);
    }
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

function newGridButton(promptWords) {
    removeAllChildNodes();
    let userGrid = prompt(promptWords);
    if (userGrid > 100) {
        newGridButton(`I'm serious enter 100 or less or we could all die`);
        return;
    }
    createGrid(userGrid);
}

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
} 

function colorBlockActivate(choice) {
    let block1 = document.querySelectorAll('.block');
    for(let i = 0; i < block1.length; i++) {
        block1[i].addEventListener("mouseover", colorBlock(i));
    }

    function colorBlock(i) {
        if (choice === 'random') { 
            return function() {
                block1[i].style.backgroundColor = randomColor();
            };
        } else if (choice === 'eraser') {
            return function() {
                block1[i].style.backgroundColor = 'lightgrey';
            };
        } else {
            return function() {
                block1[i].style.backgroundColor = choice;
            };
        } 
    }
}

colorPicker.addEventListener('change', changeColorPicker);

function changeColorPicker(e) {
    colorBlockActivate(e.target.value);
}














