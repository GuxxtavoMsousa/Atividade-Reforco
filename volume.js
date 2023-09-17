const pi = 3.14159;
const prompt = require('prompt-sync')({sigiint: true});

var raio;
var altura;
var volume;

raio = prompt('Digite o raio: ')
altura = prompt('Digite a altura: ')

volume = pi * raio ^ 2 * altura

console.log(`O volume é: ${volume}`)