const prompt = require('prompt-sync')({sigiint: true});

let fahrenheit;

fahrenheit = prompt("Digite o Fahrenheit: ");

let celsius = ((fahrenheit - 32) *5)/9

console.log(`Fahrenehit para celsius fica: ${celsius}`)