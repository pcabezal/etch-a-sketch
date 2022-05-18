const mainContainer = document.querySelector('.mainContainer');

//yAxis = document.querySelectorAll('.yAxis'); 
const addyAxis = document.createElement('div');
addyAxis.classList.add('yAxis');

// const block = document.querySelectorAll('.block'); maybe not needed?
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

/* mainContainer.appendChild(addyAxis);
addyAxis.appendChild(addBlock.cloneNode(true));
addyAxis.appendChild(addBlock.cloneNode(true));
addyAxis.appendChild(addBlock.cloneNode(true));
mainContainer.appendChild(addyAxis.cloneNode(true));
mainContainer.appendChild(addyAxis.cloneNode(true));
mainContainer.appendChild(addyAxis.cloneNode(true));
mainContainer.appendChild(addyAxis.cloneNode(true));
*/












