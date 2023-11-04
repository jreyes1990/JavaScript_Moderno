console.log('%c ESTRUCTURA CICLICAS - FOR', 'color: yellow; font-weight: bold'); // Aplicando CSS al console.log
const heroes = ['Barman','Superman','Mujer Maravilla','Aquaman'];

console.log('%c FOR TRADICIONAL', 'color: orange; font-weight: bold'); // Aplicando CSS al console.log
for (let i=0; i<heroes.length; i++) {
  console.log(heroes[i]);
}

console.log('%c FOR IN', 'color: orange; font-weight: bold'); // Aplicando CSS al console.log
for (const h in heroes) {
  console.log(heroes[h]);
}

console.log('%c FOR OF', 'color: orange; font-weight: bold'); // Aplicando CSS al console.log
for (const j of heroes) {
  console.log(j);
}

console.log('%c FOR EACH', 'color: orange; font-weight: bold'); // Aplicando CSS al console.log
heroes.forEach(k => {
  console.log(k);
});