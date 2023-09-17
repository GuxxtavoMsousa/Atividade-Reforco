const prompt = require('prompt-sync')({sigiint: true});

let tempo;
let velocidade;

tempo = prompt('Digite o Tempo: ');
velocidade = prompt('Digite a velocidade: ');

let distancia = tempo * velocidade;
let litros = distancia/12;

console.log(`O tempo é: ${tempo}, A velocidade é: ${velocidade}, A distancia é: ${distancia} e o litros é: ${litros}`)

