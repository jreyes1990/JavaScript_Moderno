const encab = document.querySelector('.contenido-hero h1').textContent;
console.log(encab);

// console.log(encab.innerText); // Si en el CSS -visibility: hidden; no lo va a encontrar
// console.log(encab.textContent); // Si lo va a encontrar
// console.log(encab.innerHTML); // Se trae el HTML

const nuevoHeading = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const img = document.querySelector('.card img');
img.src = 'img/hacer2.jpg';