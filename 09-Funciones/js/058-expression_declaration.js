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