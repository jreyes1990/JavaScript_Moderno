const seperador = '####################';

console.log(`${seperador} FUNCION`)

function sumar(){
    console.log(2 + 2)
}

sumar();

console.log(`${seperador} FUNCION EXPRESSION`)

const sumar2 = function(){
    console.log(8 + 8)
}

sumar2();

console.log(`${seperador} FUNCION PARAMETRO POR DEFAULT`)

function saludar(nombre='Desconocido', apellido='No tiene apellido'){
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar('Jolberth','Reyes')