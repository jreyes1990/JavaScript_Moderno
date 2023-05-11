const encab = document.querySelector('h1');
encab.style.backgroundColor = 'red';
encab.style.fontFamily = 'Arial';
encab.style.textTransform = 'uppercase';

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
console.log(card.classList);