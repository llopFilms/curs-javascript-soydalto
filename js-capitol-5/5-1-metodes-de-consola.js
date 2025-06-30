console.log('***** Carregant 5-1-metodes-de-consola.js *****');

/* onsole.log(' ----- clear() -----');

(function consolaClear() {
  console.log('Consola a esborrar en 5 segons');
  setTimeout(() => {
    console.clear()
  }, 5000);
})(); */

console.log(' ----- error() -----');
console.error('Error en la consola');

console.log(' ----- info() -----');
console.info('Informacio en la consola');

console.log('------ table() -----');
const array = ['Tot esperant a Godot', 22, 3000, 'Bona crítica', '15€'];
console.log("console.table d'un array");
console.table(array);

const objecte = {
  nom: 'Tot esperant a Godot',
  edat: 22,
  salari: 3000,
  critic: 'Bona crítica',
  preu: '15€',
};
console.log("console.table d'un objecte");
console.table(objecte);

console.log('----- warn() -----');
console.warn('Avisos en la consola');

console.log('----- count() -----');

/* (function bucleCountRetardat() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(`--- Volta ${i + 1} ---`);
      console.count('Comptador de Voltes');
    }, 500 * (i + 1));
  }
  console.log(
    "S'han programat 5 execucions de console.count() amb un segon de retard entre elles."
  );
})(); */

/* (function consolaCountInterval() {
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    console.log(`--- Volta ${count} ---`);
    console.count('Comptador de Voltes');

    if (count === 5) {
      clearInterval(intervalId);
      console.log('Comptador finalitzat després de 5 voltes.');
    }
  }, 1000);

  console.log(
    "S'ha iniciat el comptador. Es mostrarà cada segon durant 5 voltes."
  );
})(); */

function suma(num1, num2) {
  console.count('Comptador d\'execucions');
  console.log('Suma de', num1, '+', num2, '=', num1 + num2);
}
suma(3, 4);
suma(33, 22);
suma(5, 65);
suma(80, 20);

console.log('----- countReset() -----');

console.log('El comptador està a:');
console.count('Comptador per countReset()');

console.log('Tornem el compatador a 0');
console.countReset('Comptador per countReset()');

console.log('----- group() + groupEnd()-----');

console.group('Grup de comandes desplegat:');
console.log('console.log dins de grup 1, número 1');
console.log('console.log dins de grup 1, número 2');
console.log('console.log dins de grup 1, número 3');
console.groupEnd();

console.log('----- groupCollapsed() + groupEnd()-----');

console.groupCollapsed('Grup de comandes a desplegar:');
console.log('console.log dins de grup 1, número 1');
console.log('console.log dins de grup 1, número 2');
console.log('console.log dins de grup 1, número 3');
console.groupEnd();

console.log('----- time() + timeEnd()-----');

console.log('Incialitza el temporitzador per time():');
console.time('Temporitzador per time()');
console.log('Operació 1');
console.log('Operació 2');
console.log('Operació 3');
console.timeEnd('Temporitzador per time()');

console.log('----- timeLog()-----');

console.log('Incialitza el temporitzador:');
console.time('Temporitzador per timeLog()');
console.timeLog('Temporitzador per timeLog()');
console.log('Operació 1');
console.timeLog('Temporitzador per timeLog()');
console.log('Operació 2');
console.timeLog('Temporitzador per timeLog()');
console.log('Operació 3');
console.timeEnd('Temporitzador per timeLog()');
