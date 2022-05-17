const mainContainer = document.querySelector('.mainContainer');


let yAxis = document.querySelectorAll('.yAxis');
const addyAxis = document.createElement('div');
addyAxis.classList.add('yAxis');

const block = document.querySelectorAll('.block');
const addBlock = document.createElement('div');
addBlock.classList.add('block');



mainContainer.appendChild(addyAxis);


console.log(mainContainer);
console.log(yAxis);
console.log(block);

//yAxis.appendChild(addBlock);



mainContainer.appendChild(addyAxis.cloneNode(true));
mainContainer.appendChild(addyAxis.cloneNode(true));
mainContainer.appendChild(addyAxis.cloneNode(true));
mainContainer.appendChild(addyAxis.cloneNode(true));











