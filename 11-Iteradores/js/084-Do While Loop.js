let i=1;

do {
  if (i%15 === 0) {
    console.log(`${i} Fizz Buzz`)
  }else if (i%5 === 0) {
    console.log(`${i} Buzz`)
  }else if (i%3 === 0) {
    console.log(`${i} Fizz`)
  }
  i++; // Incremento
} while (i < 100); // Condicion