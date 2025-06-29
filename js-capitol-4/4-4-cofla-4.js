console.log(`***** Carregant 4-4-cofia-4.js ******`);

console.log(`
  
Problema 1

En Cofla necessita millorar la seva calculadora per fer la feina de la universitat.

- A més de sumar, restar, multipicar i dividir...
- Cal que s'hi afegeixi poder calcular potències, arrels quadrades i arrels cúbiques.
  `);

class CalculadoraPlus {
  static idCalculadoraPlus = 1;
  #id;
  constructor(nom, marca, model, memoria, pantalla, pes) {
    this.#id = CalculadoraPlus.idCalculadoraPlus++;
    this.nom = nom;
    this.marca = marca;
    this.model = model;
    this.memoria = memoria;
    this.pantalla = pantalla;
    this.pes = pes;
    this.operacions = [];
    this.resultats = [];
  }

  getID() {
    return this.#id;
  }

  toString() {
    return `
    Calculadora amb identificador: ${this.getID()}
      
      • Nom: ${this.nom}
      • Marca: ${this.marca}
      • Model: ${this.model}
      • Memoria: ${this.memoria}
      • Pantalla: ${this.pantalla}
      • Pes: ${this.pes}
      `;
  }

  demanarDades() {
    let operacio = Number(
      prompt(
        `Quina operació vols realitzar?
      Trieu entre les opcions:
      1 - Suma
      2 - Resta
      3 - Multiplicació
      4 - Divisió
      5 - Potència
      6 - Arrel quadrada
      7 - Arrel cúbica
      `
      )
    );
    console.log('operacio -->', operacio);

    let num1 = Number(prompt('Introdueix el primer número: '));
    let num2;

    switch (operacio) {
      case 1:
      case 2:
      case 3:
      case 4:
        num2 = Number(prompt('Introdueix el segon número: '));
        break;
      case 5:
        num2 = Number(prompt('Introdueix el exponent de la potència: '));
        break;
      default:
        console.log('Default');
        break;
    }

    return [num1, num2, operacio];
  }

  registreOperacions(operacio, resultat) {
    this.operacions.push(operacio);
    this.resultats.push(resultat);
  }

  suma(num1, num2) {
    let suma = num1 + num2;
    this.registreOperacions('suma', suma);
    return suma;
  }

  resta(num1, num2) {
    let resta = num1 - num2;
    this.registreOperacions('resta', resta);
    return resta;
  }

  multiplicacio(num1, num2) {
    let multiplicacio = num1 * num2;
    this.registreOperacions('multiplicacio', multiplicacio);
    return multiplicacio;
  }

  divisio(num1, num2) {
    if (num2 === 0) {
      this.registreOperacions('divisio', 'No es pot dividir per zero');
      return 'No es pot dividir per zero';
    }
    let divisio = num1 / num2;
    this.registreOperacions('divisio', divisio);
    return divisio;
  }

  potencia(num1, exponent) {
    let potencia = num1 ** exponent;
    this.registreOperacions('potencia', potencia);
    return potencia;
  }

  arrelQuadrada(num1) {
    let arrelQuadrada = Math.sqrt(num1);
    this.registreOperacions('arrelQuadrada', arrelQuadrada);
    return arrelQuadrada;
  }

  arrelCubica(num1) {
    let arrelCubica = Math.cbrt(num1);
    this.registreOperacions('arrelCubica', arrelCubica);
    return arrelCubica;
  }

  calcular(dades) {
    const [num1, num2, operacio] = dades;
    let resultat;
    switch (operacio) {
      case 1:
        resultat = this.suma(num1, num2);
        break;
      case 2:
        resultat = this.resta(num1, num2);
        break;
      case 3:
        resultat = this.multiplicacio(num1, num2);
        break;
      case 4:
        resultat = this.divisio(num1, num2);
        break;
      case 5:
        resultat = this.potencia(num1, num2);
        break;
      case 6:
        resultat = this.arrelQuadrada(num1);
        break;
      case 7:
        resultat = this.arrelCubica(num1);
        break;
      default:
        break;
    }
    return resultat;
  }

  ultimRegistre() {
    return `
    L'última operació ha estat: ${this.operacions[this.operacions.length - 1]}.
    L'últim resultat ha estat: ${this.resultats[this.resultats.length - 1]}.`;
  }
}

function crearCalculadoraPlus() {
  let nom = prompt('Escriu el nom de la calculadora', 'SuperCalca');
  let marca = prompt('Escriu la marca de la calculadora', 'HP');
  let model = prompt('Escriu el model de la calculadora', '227HG');
  let memoria = prompt('Escriu la memoria de la calculadora', '25');
  let pantalla = prompt('Escriu la pantalla de la calculadora', '3');
  let pes = prompt('Escriu el pes de la calculadora', '650');

  let calculadoraPlus1 = new CalculadoraPlus(
    nom,
    marca,
    model,
    memoria,
    pantalla,
    pes
  );

  console.log('--- Calculadora creada ---');
  console.log(calculadoraPlus1.toString());

  console.log('--- Demamant dades ---');
  let dades = calculadoraPlus1.demanarDades();
  console.log('dades -->', dades);

  console.log('--- Resultat ---');
  let resultat = calculadoraPlus1.calcular(dades);
  console.log('resultat -->', resultat);

  console.log('--- Registre ---');
  let ultimRegistre = calculadoraPlus1.ultimRegistre();
  console.log('ultimRegistre -->', ultimRegistre);
}

console.log(`
  
Problema 2

En Cofla està a punt de començar a la universitat i les 12 matèries del 1r curs tenen assignat un professor/a i tots els alumnes que s'hi han inscrit.

- Cal crear un registre que mostri de cada assignatura, tant el professor/a, com tot els alumnes inscrits.
- Crear una funció que ens indiqui les dades d'en Cofla:
  - A quantes asignatures està inscrit.
  - Quines són.
  - Qui és el pforessor/a de cada una.
  - A quantes assignatures està inscrit.
  
  `);

const assignatures = [
  'Matemàtiques',
  'Programació',
  'Lògica',
  'Blockchain',
  'Bases de dades',
  'Tecnologies web',
  'Sistemes operatius',
  'Programació orientada a objectes I',
  'Programació orientada a objectes II',
];

const professors = [
  'Marc Garcia',
  'Laia Martinez',
  'Jordi Sánchez',
  'Anna López',
  'Pau González',
  'Maria Rodríguez',
  'Marcos Peret',
];

const alumnes = [
  'Laia García',
  'Jordi Sánchez',
  'Anna López',
  'Pau González',
  'Maria Rodríguez',
  'Marcos Hernández',
  'Cofla Pintor',
  'Ivan Jiménez',
  'Eva Moreno',
  'David Torres',
  'Nuria Gómez',
  'Adrián Fernández',
  'Cristina Sánchez',
  'Rubén López',
  'Isabel García',
  'Alberto Martín',
  'Laura Pérez',
  'Héctor Gómez',
  'Sandra Rodríguez',
  'Miguel Ángel Hernández',
  'Verónica Díaz',
  'Juan Carlos López',
  'María José García',
  'Francisco Javier Sánchez',
  'Ana Isabel Martínez',
  'Carlos Alberto Gómez',
  'Elena María Rodríguez',
  'Daniel Alejandro López',
  'Sara Sofía García',
  'Óscar David Sánchez',
  'Joan Carles Riera',
  'Mònica Puig',
];

class ObjecteAssignatura {
  static id = 1;
  constructor(assignatura, professor) {
    this.id = ObjecteAssignatura.id++;
    this.assignatura = assignatura;
    this.professor = professor;
    this.alumnes = [];
  }

  getID() {
    return this.id;
  }

  afegirAlumne(alumne) {
    this.alumnes.push(alumne);
  }

  getLlistaAlumnes() {
    return this.alumnes.map((alumne, index) => `    ${index + 1} - ${alumne}`);
  }

  toString() {
    return `
  - Assignatura: ${this.assignatura}
  - Professor: ${this.professor}
  - Alumnes: ${this.alumnes.length}
${this.getLlistaAlumnes().join('\n')}
  `;
  }

  toStringBreu() {
    return `
  - Assignatura: ${this.assignatura}
  - Professor: ${this.professor}
  - Alumnes: ${this.alumnes.length}
${this.getLlistaAlumnes().filter((alumne) => alumne.includes('Cofla'))}
  `;
  }

  toStringPepet() {
    return `
  - Assignatura: ${this.assignatura}
  - Professor: ${this.professor}
  - Alumnes: ${this.alumnes.length}
${this.getLlistaAlumnes().filter((alumne) => alumne.includes('Pepet'))}
    `;
  }
}

let arrRegistreUniversitat = [];
(function crearRegistreUniversitat() {
  let professor;
  for (const assignatura of assignatures) {
    switch (assignatura) {
      case 'Matemàtiques':
        professor = professors[0];
        break;
      case 'Programació':
        professor = professors[1];
        break;
      case 'Lògica':
        professor = professors[1];
        break;
      case 'Blockchain':
        professor = professors[3];
        break;
      case 'Bases de dades':
        professor = professors[2];
        break;
      case 'Tecnologies web':
        professor = professors[3];
        break;
      case 'Sistemes operatius':
        professor = professors[5];
        break;
      case 'Programació orientada a objectes I':
        professor = professors[4];
        break;
      case 'Programació orientada a objectes II':
        professor = professors[2];
        break;
    }

    let objecteAssignatura = new ObjecteAssignatura(assignatura, professor);

    let numeroAlumnes = Math.floor(Math.random() * (alumnes.length - 24) + 25);

    for (let i = 0; i < numeroAlumnes; i++) {
      let alumne;
      let alumnesAssignatura = objecteAssignatura.alumnes;
      do {
        alumne = alumnes[Math.floor(Math.random() * alumnes.length)];
      } while (alumnesAssignatura.includes(alumne));
      objecteAssignatura.afegirAlumne(alumne);
    }
    arrRegistreUniversitat.push(objecteAssignatura);
  }
})();
console.log('Registre Universitat');
console.table(arrRegistreUniversitat);

function registreUniversitat() {
  (function mostrarAssignatura() {
    let assignatura = prompt(`
  Quina assignatura vols consultar?
    1. Matemàtiques
    2. Programació
    3. Lògica
    4. Blockchain
    5. Bases de dades
    6. Tecnologies web
    7. Sistemes operatius
    8. Programació orientada a objectes I
    9. Programació orientada a objectes II  
  `);

    let indexAssignatura = assignatura - 1;
    console.log('--- Dades Assignatura sol·licitada ---');
    console.log(arrRegistreUniversitat[indexAssignatura].toString());
  })();

  (function assignaturesCofla() {
    console.log('--- Assignatures Cofla inscrit ---');
    let i = 0;
    for (const registre of arrRegistreUniversitat) {
      if (registre.alumnes.includes('Cofla Pintor')) {
        i++;
        console.log(registre.toStringBreu());
      }
    }
    console.log(`En Cofla està apuntat a ${i} assignatures.`);
  })();
}

console.log(`
  
  Problema 3

  En Cofla ja ha vist les 9 matèries possibles però, el sistema per fer les inscripcions s'ha espatllat. El seu codi Pepet es vol inscriure a 3 assignatures com a oient.

  - Crear una funció que pregunti a en Cofla a quines assignatures es vol inscriure.
  - Si ja hi ha 30 alumnes, negar-li la inscripció.
  - Si n'hi ha menys de 30, permetre-li la inscripció.

  `);

function inscripcioPepet() {
  let nomsAssignaturesPepet = [];
  let i = 0;
  do {
    let numAssignatura = prompt(`
    Quina assignatura et vols apuntar, Pepet (${i} de 3)?
      1. Matemàtiques
      2. Programació
      3. Lògica
      4. Blockchain
      5. Bases de dades
      6. Tecnologies web
      7. Sistemes operatius
      8. Programació orientada a objectes I
      9. Programació orientada a objectes II  
    `);

    const assignaturaPepet = arrRegistreUniversitat[numAssignatura - 1];
    const nomAssignatura =
      arrRegistreUniversitat[numAssignatura - 1].assignatura;
    const arrAlumnesAssignatura =
      arrRegistreUniversitat[numAssignatura - 1].alumnes;

    if (
      arrAlumnesAssignatura.length < 30 &&
      !nomsAssignaturesPepet.includes(nomAssignatura)
    ) {
      console.log(
        `Pepet es pot inscriure a l'assignatura ${nomAssignatura} perquè hi ha menys de 30 alumnes`
      );
      arrAlumnesAssignatura.push('Pepet Pintor');
      nomsAssignaturesPepet.push(nomAssignatura);

      console.log(
        `Assignatura ${nomAssignatura}: ${assignaturaPepet.toStringPepet()}`
      );
      i++;
    } else {
      console.log(
        `Pepet no es pot inscriure a lassignatura ${nomAssignatura} perquè ja hi ha ${arrAlumnesAssignatura.length} alumnes`
      );
    }
  } while (i < 3);

  console.log(
    `Inscripcions Pepet acabades: ${nomsAssignaturesPepet.join(', ')}`
  );
}
