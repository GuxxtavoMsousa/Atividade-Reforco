const prompt = require('prompt-sync')({sigiint: true});

let valor;

valor = parseInt(prompt('Digite um valor: '));

maisMenos = valor + 1;
MenosMais = valor - 1;

console.log(`O sucessor do valor é: ${maisMenos} e o antecessor é: ${MenosMais}`)