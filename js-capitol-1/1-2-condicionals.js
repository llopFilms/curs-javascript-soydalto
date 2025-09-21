console.log('***** Carregant 1-2-condicionals.js ******');

console.log('----- if ------');
if (10 < 15) {
  console.log('10 és més petit que 15');
}

console.log('----- if / else ------');
let nom = 'Ramon';

if (nom == 'Ramon') {
  console.log('Bon dia ' + nom);
} else {
  console.log('El teuu nom no és' + nom);
}

console.log('----- if / else if / else ------');
let diaDeLaSetmana = 'dimarts';

if (diaDeLaSetmana == 'diumenge') {
  console.log('Avui és ' + diaDeLaSetmana);
} else if (diaDeLaSetmana == 'dilluns') {
  console.log('Avui és ' + diaDeLaSetmana);
} else {
  console.log('Avui és una altre dia');
}

