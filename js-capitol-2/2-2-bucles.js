console.log('***** Carregant 2-2-buclés.js ******');

console.log('----- If repetitiu -----');

let numeroIncremental = 0;
let i = 0;

console.log(
  `Abans de començar el valor de numeroIncremental és ${numeroIncremental}`
);

if (numeroIncremental < 4) {
  console.log(`El ${numeroIncremental} és menor de 4`);
  numeroIncremental++;
  i++;
  console.log(
    `A l'if número ${i} el valor de numeroIncremental és ${numeroIncremental}`
  );
} else
  console.log(`El ${numeroIncremental} no és menor de 4 i aturem l'increment`);

if (numeroIncremental < 4) {
  console.log(`El ${numeroIncremental} és menor de 4`);
  numeroIncremental++;
  i++;
  console.log(
    `A l'if número ${i} el valor de numeroIncremental és ${numeroIncremental}`
  );
} else
  console.log(`El ${numeroIncremental} no és menor de 4 i aturem l'increment`);

if (numeroIncremental < 4) {
  console.log(`El ${numeroIncremental} és menor de 4`);
  numeroIncremental++;
  i++;
  console.log(
    `A l'if número ${i} el valor de numeroIncremental és ${numeroIncremental}`
  );
} else
  console.log(`El ${numeroIncremental} no és menor de 4 i aturem l'increment`);

if (numeroIncremental < 4) {
  console.log(`El ${numeroIncremental} és menor de 4`);
  numeroIncremental++;
  i++;
  console.log(
    `A l'if número ${i} el valor de numeroIncremental és ${numeroIncremental}`
  );
} else
  console.log(`El ${numeroIncremental} no és menor de 4 i aturem l'increment`);

if (numeroIncremental < 4) {
  console.log(`El ${numeroIncremental} és menor de 4`);
  numeroIncremental++;
  i++;
  console.log(
    `A l'if número ${i} el valor de numeroIncremental és ${numeroIncremental}`
  );
} else
  console.log(`El ${numeroIncremental} no és menor de 4 i aturem l'increment`);

console.log('------ Bucle while -----');

numeroIncremental = 0;
i = 0;

console.log(
  `Abans de començar el bucle while, el valor de numeroIncremental és ${numeroIncremental}`
);

while (i < 4) {
  console.log(`El ${numeroIncremental} és menor de 4`);
  numeroIncremental++;
  i++;
  console.log(
    `A la volta ${i} del bucle while, el valor de numeroIncremental és ${numeroIncremental}`
  );
}
console.log(`El ${numeroIncremental} no és menor de 4 i aturem l'increment`);

console.log('----- Bucle do while -----');

numeroIncremental = 0;
i = 0;
console.log(
  `Abans de començar el bucle do while, el valor de numeroIncremental és ${numeroIncremental}`
);

do {
  console.log(`El ${i} és menor de 4`);
  numeroIncremental++;
  i++;
  console.log(
    `A la volta ${i} del bucle do while, el valor de numeroIncremental és ${numeroIncremental}`
  );
} while (i < 4);
console.log(`El ${numeroIncremental} no és menor de 4 i aturem l'increment`);

console.log('----- Comanda break amb while -----');

numeroIncremental = 0;
i = 0;

console.log(
  `Abans de començar el bucle while, el valor de numeroIncremental és ${numeroIncremental}`
);
console.log(
  'Tenim marge per incrementar numeroIncremental fins a 25 però volem parar a 4 amb un "break"'
);

while (numeroIncremental < 25) {
  console.log(
    `A la volta ${i} del bucle while, el valor de numeroIncremental és ${numeroIncremental}`
  );
  console.log(`El ${i} es menor de 4`);
  numeroIncremental++;
  i++;
  if (numeroIncremental == 4) {
    console.log(
      `A la volta ${i} del bucle while, el valor de numeroIncremental es ${numeroIncremental} i parem amb el break`
    );
    console.log(
      `El ${numeroIncremental} no es menor de 4 i aturem l'increment`
    );
    break;
  }
}

console.log('----- Bucle for -----');

numeroIncremental = 0;

console.log(
  `Abans de començar el bucle for, el valor de numeroIncremental és ${numeroIncremental} i volem fer 5 iteracions`
);

for (let i = 0; i < 5; i++) {
  console.log(
    `Escrivim el numeroIncremental amb valor ${numeroIncremental} fins a ${
      i + 1
    } vegades`
  );
  numeroIncremental++;
}

console.log('----- Comanda break amb for -----');

numeroIncremental = 0;

console.log(
  `Abans de començar el bucle for, el valor de numeroIncremental és ${numeroIncremental} i volem fer 5 iteracions i parar a 4 amb un "break"`
);

for (let i = 0; i < 5; i++) {
  if (i == 4) {
    console.log(`La iteracio és ${i} i aturem l'increment`);
    break;
  }
  console.log(
    `Escrivim el numeroIncremental amb valor ${numeroIncremental} fins a ${
      i + 1
    } vegades`
  );
  numeroIncremental++;
}

console.log('----- Comanda continue amb for -----');

numeroIncremental = 0;

console.log(
  `Abans de començar el bucle for, el valor de numeroIncremental és ${numeroIncremental} i volem fer 5 iteracions i ens volem saltar la 4 amb un "continue"`
);

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    console.log(`La iteracio és ${i + 1} i ens la saltem`);
    continue;
  }
  console.log(
    `Escrivim el numeroIncremental amb valor ${numeroIncremental} fins a ${
      i + 1
    } vegades`
  );
  numeroIncremental++;
}

console.log('------ for in -----');

let animals = ['gos', 'cabra', 'gallina', 'ruc', 'colom'];
console.log('animals -->', animals);

for (let index in animals) {
  console.log(
    `L'índex d'animals és ${index} i el nom de l'animal és ${animals[index]}`
  );
}

console.log('------ for of -----');

console.log('animals -->', animals);

i = 0;
for (let animal of animals) {
  console.log(`L'índex d'animals es ${i} i el nom de l'animal es ${animal}`);
  i++;
}

console.log('----- label -----');

let noms2 = ['Pere', 'Ramon', 'Josep'];
let noms = ['Maria', 'Mercè', 'Anna', noms2, 'Ramona'];

forNoms: for (let nom of noms) {
  if (nom == noms2) {
    forNoms2: for (let nom of noms2) {
      console.log(`El nom de \'noms2\' és: ${nom}`);
      break forNoms2;
    }
  } else {
    continue forNoms;
    console.log(`Els nom de \'noms\' és: ${nom}`);
  }
}
