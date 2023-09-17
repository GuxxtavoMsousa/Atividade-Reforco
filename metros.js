const prompt = require('prompt-sync')({sigiint: true});

let pes;

pes = prompt('Digite a medida em pés: ')

metros = pes * 0.3048;

console.log(`A medida de pés para metros é: ${metros}`)