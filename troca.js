const prompt = require('prompt-sync')({sigiint: true});

let A;
let B;

A = prompt('Digite algo: ');
B = prompt('Digite algo novamente: ')

let guarda = A;

A = B;
B = guarda;


console.log(`teste: ${A}, ${B}`)