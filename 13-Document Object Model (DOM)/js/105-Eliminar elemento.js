const primerEnlace = document.querySelector('a');
primerEnlace.remove();

// Eliminar desde el padre
const naveg = document.querySelector('.navegacion');
console.log(naveg.children);

naveg.removeChild(naveg.children[2]);
