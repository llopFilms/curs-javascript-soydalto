console.log('***** Carregant 2-4-cofia-2.js ******');

console.log(`
Problema 1

A un jove molt afortunat li toca la loteria, a quin en Cofia havia regalat els diners. I decideix fer una festa per cellebrar-ho. A la festa hi ha un control d'accés.

- Deixar passar només als majors d'edat i l'entrada val 10€
- La primera persona que pagui després de les 2.00h no paga
  
  `);

function controldAcces() {
  let client1 = {
      nom: 'Pere',
      edat: 19,
      horaAcces: 23.0,
    },
    client2 = {
      nom: 'Robert',
      edat: 28,
      horaAcces: 0.5,
    },
    client3 = {
      nom: 'Maria',
      edat: 17,
      horaAcces: 1.25,
    },
    client4 = {
      nom: 'Jordi',
      edat: 15,
      horaAcces: 2.0,
    },
    client5 = {
      nom: 'Jacint',
      edat: 20,
      horaAcces: 3.0,
    },
    client6 = {
      nom: 'Cofia',
      edat: 25,
      horaAcces: 4.2,
    },
    client7 = {
      nom: 'Ramon',
      edat: 55,
      horaAcces: 5.0,
    };

  let clients = [client1, client2, client3, client4, client5, client6, client7];
  let acces,
    entradaGratis,
    entradaGratisDonada = false;

  const validarEntrada = (edat, horaAcces) => {
    if (edat >= 18) {
      acces = true;
      if (
        horaAcces >= 2.0 &&
        horaAcces <= 5.0 &&
        entradaGratisDonada == false
      ) {
        entradaGratis = true;
        entradaGratisDonada = true;
      }
    } else {
      acces = false;
    }
    return [acces, entradaGratis];
  };

  let nomClient = '',
    edatClient = 0,
    horaAcces = 0;

  for (let index in clients) {
    acces = false;
    index = Number(index) + 1;
    entradaGratis = false;
    nomClient = clients[index].nom;
    edatClient = clients[index].edat;
    horaAcces = clients[index].horaAcces;
    const validacio = validarEntrada(edatClient, horaAcces);
    console.log(
      `Client$ ${index}: ${nomClient} - Hora entrada: ${horaAcces} - Edat: ${edatClient} - Acces: ${validacio[0]} - Entrada gratis: ${validacio[1]}`
    );
  }
}

console.log(`
  
Problema 2

El Cofla comença les classes al bootcamp, però s'ha fet malbé el sistema d'accés a les aules dels 19 alumnes que hi ha.

- Crear un control dels alumnes presents (P) i els absents (A)
- Verificar tot per 30 dies, i al final generar un registre per cada alumne
- Si hi ha més del 10% d'absències, mostrar el nom de l'alumne i un avís que no està admès al projecte final
- Fes una segona versió del càlcul sobre un registre ja creat d'alumnes i d'assitències

`);

function controlAssistencia() {
  let quantitatAlumnes = Number(prompt("Introdueix el nombre d'alumnes: ", 3));
  let dies = Number(prompt('Introdueix el nombre de dies: ', 5));
  let alumnes = [];

  for (let i = 0; i < quantitatAlumnes; i++) {
    let nomAlumne = prompt(`Introdueix el nom de l'alumne ${i + 1}:`);
    alumnes[i] = [nomAlumne, 0];
  }

  const verificarAssistencia = (nomAlumne, index, i) => {
    let assistencia = prompt(
      `
Dia ${i + 1}:
Alumne ${nomAlumne}: present(P) o absent(A)? ", "P"`
    );
    if (assistencia === 'P') {
      alumnes[index][1]++;
    }
  };

  for (let i = 0; i < dies; i++) {
    for (index in alumnes) {
      let nomAlumne = alumnes[index][0];
      verificarAssistencia(nomAlumne, index, i);
    }
  }

  for (let i = 0; i < quantitatAlumnes; i++) {
    nomAlumne = alumnes[i][0];
    let assistencies = alumnes[i][1];
    let absencies = dies - assistencies;
    let percentatgeAssistencia = (assistencies / dies) * 100;
    console.log('hola', percentatgeAssistencia);
    console.log(
      `
  Alumne: ${nomAlumne}
  Asistències: ${assistencies}
  Absències: ${absencies}
    `
    );

    if (percentatgeAssistencia < 90) {
      console.log(`
  Percentatge assistència: ${percentatgeAssistencia}%.
  No està admes al projecte final.`);
    } else {
      console.log(`
  Percentatge assistència: ${percentatgeAssistencia}%.
  Està admes al projecte final.`);
    }
  }
}

const inscrits = [
  'Aina Altimir',
  'Bernat Borràs',
  'Clara Canyelles',
  'David Dòria',
  'Elena Escodà',
  'Ferran Ferrerons',
  'Gemma Garrigó',
  'Hèctor Hernàndez',
  'Ivan Ibàñez',
  'Jana Janer',
  'Kai Llorens',
  'Laura Llopart',
  'Marc Martorell',
  'Núria Navarró',
  'Oriol Oliveras',
  'Pau Pàmies',
  'Quim Quintana',
  'Roser Ribó',
  'Sílvia Serrà',
];

const registreAssistencies = [
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'A',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'A',
    'P',
    'A',
  ],
  [
    'A',
    'P',
    'A',
    'P',
    'A',
    'P',
    'A',
    'P',
    'A',
    'P',
    'A',
    'P',
    'A',
    'P',
    'A',
    'P',
    'A',
    'P',
    'A',
    'P',
    'A',
    'P',
    'A',
    'P',
    'A',
    'P',
    'A',
    'P',
    'A',
    'P',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'A',
    'A',
    'A',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
  ],
  [
    'A',
    'A',
    'A',
    'P',
    'A',
    'A',
    'A',
    'P',
    'A',
    'A',
    'A',
    'P',
    'A',
    'A',
    'A',
    'P',
    'A',
    'A',
    'A',
    'P',
    'A',
    'A',
    'A',
    'P',
    'A',
    'A',
    'A',
    'P',
    'A',
    'A',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'A',
    'P',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'A',
    'A',
    'P',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'A',
    'P',
    'A',
    'P',
    'A',
    'P',
    'A',
    'P',
    'A',
    'A',
  ],
  [
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
  ],
];

function controlAssistenciaRegistrat() {
  let quantitatAlumnes = Number(prompt("Introdueix el nombre d'alumnes: ", 19));
  console.log('quantitatAlumnes -->', quantitatAlumnes);
  let dies = Number(prompt('Introdueix el nombre de dies: ', 30));
  console.log('dies -->', dies);
  let alumnes = [];

  let nomAlumne, indexAlumne;
  for (const index in inscrits) {
    nomAlumne = inscrits[index];
    alumnes[index] = [nomAlumne, 0];
  }

  const verificarAssistencia = (nomAlumne, indexDia) => {
    for (const index in alumnes) {
      if (alumnes[index][0] === nomAlumne) {
        indexAlumne = index;
      }
    }

    if (registreAssistencies[indexAlumne][indexDia] === 'P') {
      alumnes[indexAlumne][1]++;
    }
  };

  for (let dia = 0; dia < dies; dia++) {
    for (const alumne of alumnes) {
      nomAlumne = alumne[0];
      verificarAssistencia(nomAlumne, dia);
    }
  }

  console.log(alumnes);

  let assistencies, absencies, percentatgeAssistencia;

  for (let i = 0; i < quantitatAlumnes; i++) {
    nomAlumne = alumnes[i][0];
    assistencies = alumnes[i][1];
    absencies = dies - assistencies;
    percentatgeAssistencia = +((assistencies / dies) * 100).toFixed(2);
    console.log(`
    Alumne: ${nomAlumne}
    Asistències: ${assistencies}
    Absències: ${absencies}
    Percentatge assistència: ${percentatgeAssistencia}%.`);

    if (percentatgeAssistencia < 90) {
      console.log(`     
    --> ${nomAlumne} NO està admès/a al projecte final.`);
    } else {
      console.log(`
    --> ${nomAlumne} SÍ està admès/a al projecte final.`);
    }
  }
}

console.log(`
  
Problema 3

Quan arriba a casa Cofia té problemes de matemàtiques per resoldre. Crea una calculadora que:

- Sumi
- Resti
- Multiplica
- Divideix

  `);

function calculadora() {
  
  const suma = (num1, num2) => num1 + num2;
  const resta = (num1, num2) => num1 - num2;
  const multiplica = (num1, num2) => num1 * num2;
  const divideix = (num1, num2) => {
    if (num2 === 0) {
      return 'No es pot dividir per zero';
    }
    return num1 / num2;
  };

  let num1 = Number(prompt('Introdueix el primer número: '));
  let num2 = Number(prompt('Introdueix el segon número: '));
  const operacio = prompt('Quina operació vols realitzar?', 's/r/m/d');

  if (operacio === 's') {
    console.log(`La suma de ${num1} i ${num2} és ${suma(num1, num2)}`);
  } else if (operacio === 'r') {
    console.log(`La resta de ${num1} i ${num2} és ${resta(num1, num2)}`);
  } else if (operacio === 'm') {
    console.log(
      `La multiplicació de ${num1} i ${num2} és ${multiplica(num1, num2)}`
    );
  } else if (operacio === 'd') {
    console.log(`La divisió de ${num1} i ${num2} és ${divideix(num1, num2)}`);
  } else {
    console.log('Operació no reconeguda');
  }
}
