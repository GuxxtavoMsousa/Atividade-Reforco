const prompt = require('prompt-sync')({sigiint: true});

let numero;

numero = prompt('Digite um Número: ');

potencia = numero * numero;

console.log(`A potencia do número é ${potencia}`)