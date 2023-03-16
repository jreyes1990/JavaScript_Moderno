let i=1;

while (i<100) { //Condicion
  //console.log(`Numero ${i}`)

  if (i%15 === 0) {
    console.log(`${i} Fizz Buzz`)
  }else if (i%5 === 0) {
    console.log(`${i} Buzz`)
  }else if (i%3 === 0) {
    console.log(`${i} Fizz`)
  }
  
  i++; // Incremento
}