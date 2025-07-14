console.log('***** Carregant 10-1-control-de-flux.js *****');

console.log('----- Àmbit -----');

let nom = 'Ramon';
console.log('nom àmbit 1-->', nom);

{
  let nom = 'Jordi';
  console.log('nom àmbit 2-->', nom);

  {
    let nom = 'Maria';
    console.log('nom àmbit 3-->', nom);
  }
}

console.log('----- switch -----');

let fruites = ['platan', 'poma', 'pera', 'cirera'];

for (let fruita of fruites) {
  switch (fruita) {
    case 'platan':
      console.log('Aquesta fruita és unplàtan');
      break;
    case 'poma':
      console.log('Aquesta fruita és una  poma');
      break;
    case 'pera':
      console.log('Aquesta fruita és una pera');
      break;
    default:
      console.log(
        `Aquesta fruita és una ${fruita} i no és cap de les anteriors`
      );
  }
}

console.log('----- try/catch incondicional -----');

try {
  dsdsdsd;
} catch (error) {
  console.log('error -->', error);
}

console.log('----- try/cath condicional -----');

try {
  dsdsdsd;
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log('Error de referència -->', error);
  } else console.log('Altres errors -->', error);
}

console.log('----- finally -----');

try {
  console.log('try');
} catch (error) {
  console.log('catch');
} finally {
  console.log('finally');
}

console.log('----- throw -----');

try {
  fdsfdf;
} catch (error) {
  throw new Error('Error personalitzat');
}
