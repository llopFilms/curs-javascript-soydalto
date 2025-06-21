console.log('***** Carregant 2-1-arrays.js ******');

console.log('----- Arrays -----');
let fruites = ['platan', 'poma', 'pera'];
console.log('fruites -->', fruites);
console.log('plàtan a fruites a [0] -->', fruites[0]);

fruites[3] = 'pressec';
console.log('fruites -->', fruites);
console.log('préssec a fruites a [3] -->', fruites[3]);

console.log('Element indefinit a la posició [4] -->', fruites[4]);

console.log('----- Arrays associatius / objectes -----');
let ordinador = {
  nom: 'Ramon',
  marca: 'Apple',
  model: 'MacBook Air',
  ram: '8GB',
  ssd: '256GB',
};
console.log('ordinador -->', ordinador);

console.log('nom -->', ordinador.nom);
console.log(
`El meu ordinador és un ${ordinador.marca} ${ordinador.model}.
La ram i el disc dur són ${ordinador.ram} i ${ordinador.ssd} respectivament.`);

let propietat = 'marca';
console.log('marca -->', ordinador[propietat]);
propietat = 'ram';
console.log('ram -->', ordinador[propietat]);
