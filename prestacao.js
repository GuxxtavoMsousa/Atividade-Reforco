const prompt = require('prompt-sync')({sigiint: true});

var valor;
var taxa;
var tempo;
var prestacao;

valor = prompt('Digite o valor: ')
taxa = prompt('Digite a taxa: ')
tempo = prompt('Digite o tempo: ')

prestacao = valor + (valor*(taxa/100)* tempo)

console.log(`A prestação será: ${prestacao}`)