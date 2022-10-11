const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

console.log(producto, medidas)

const resultado = Object.assign(producto, medidas);

console.log(resultado)

// spread operator o rest operator
const resultado2 = {...producto, ...medidas};

console.log(resultado2)