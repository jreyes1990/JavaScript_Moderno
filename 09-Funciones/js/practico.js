const calculadora = (a, b, opcion) => {
    resultado = 0;

    if(opcion === '+'){
        resultado = a + b;
        console.log(`La suma de ${a} + ${b} = ${resultado}`)
    }else if(opcion === '-'){
        resultado = a - b;
        console.log(`La resta de ${a} - ${b} = ${resultado}`)
    }else if(opcion === '*'){
        resultado = a * b;
        console.log(`La multiplicacion de ${a} * ${b} = ${resultado}`)
    }else if(opcion === '/'){
        if(b === 0){
            console.log('El segundo valor debe ser mayor a 0')
        }else{
            resultado = a / b;
            console.log(`La division de ${a} / ${b} = ${resultado}`)
        }
    }else if(opcion === '%'){
        resultado = a % b;
        console.log(`El modulo de ${a} % ${b} = ${resultado}`)
    }

    return resultado;
}


calculadora(5,6,'%');