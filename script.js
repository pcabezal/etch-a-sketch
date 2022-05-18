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
    colorBlockActivate();
} 
createGrid(50);

//clear etchasketch
function removeAllChildNodes() {
    while (addyAxis.firstChild) {
        addyAxis.removeChild(addyAxis.firstChild);
    }
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

function newGridButton() {
    removeAllChildNodes();
    let userGrid = prompt('Enter new grid size, nothing over 100 please.');
    if (userGrid > 100) {
        let userGrid = prompt(`I'm serious enter something under 100 or we could all die`)
    }
    createGrid(userGrid);
}

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
} 

 //color blocks old
/* function colorBlockActivate() {
    let block1 = document.querySelectorAll('.block');
    for(let i = 0; i < block1.length; i++) {
        block1[i].addEventListener("mouseenter", colorBlock(i));
    }
    function colorBlock(i) {
    return function() {
        //   console.log("you entered region number " + i);
        block1[i].style.backgroundColor = 'red';
        };
    } 
} */

function colorBlockActivate(choice) {
    let block1 = document.querySelectorAll('.block');
    for(let i = 0; i < block1.length; i++) {
        block1[i].addEventListener("mouseenter", colorBlock(i));
    }
    function colorBlock(i) {
        if (choice === 'random') { 
            return function() {
                block1[i].style.backgroundColor = randomColor();
            };
        } else if (choice === 'increase') {
            return function() {
                console.log(window.getComputedStyle( block1[i] ,null).getPropertyValue('background-color'))
                // myDivObj = document.getElementById("myDivID")
                //let myDivObj = window.getComputedStyle(block1[i]).backgroundColor;
                //console.log("you entered region number " + i);
                //console.log(' stupid mydivobj = ' + myDivObj);
                //console.log(block1[i]);
                // block1[i].style.backgroundColor = 'hsl(0,0%,0%)';
            };
            
        } else {
            return function() {
                block1[i].style.backgroundColor = 'blue';
            };
        } 

    }
}













