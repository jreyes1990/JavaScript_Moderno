const naveg = document.querySelector('.navegacion');
console.log(naveg);
console.log(naveg.childNodes); // Los espacion en blancos son considerados elementos
console.log(naveg.children);
console.log(naveg.children[0]);

console.log(naveg.children[1].nodeName);
console.log(naveg.children[1].nodeType);

const card = document.querySelector('.card');

card.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM';

console.log(card.children[1].children[1].textContent);

card.children[0].src = 'img/hacer3.jpg';
console.log(card.children[0]);

// Traversing del Hijo al Padre
console.log(card.parentNode);
console.log(card.parentElement);
console.log(card.parentElement.parentElement.parentElement);


console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);