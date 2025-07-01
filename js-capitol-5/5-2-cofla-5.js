console.log('***** Carregant 5-2-cofla-5.js *****');

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

const numsClasses = [20, 25, 18, 22, 28, 19, 26, 24, 21, 27];
const numsTreballs = [6, 9, 5, 8, 4, 7, 10, 6, 5, 9];

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
  constructor(assignatura, professor, numClasses, numTreballs) {
    this.id = ObjecteAssignatura.id++;
    this.assignatura = assignatura;
    this.professor = professor;
    this.numClasses = numClasses;
    this.numTreballs = numTreballs;
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
  let professor, numClasses, numTreballs;
  for (const assignatura of assignatures) {
    switch (assignatura) {
      case 'Matemàtiques':
        professor = professors[0];
        numClasses = numsClasses[0];
        numTreballs = numsTreballs[0];
        break;
      case 'Programació':
        professor = professors[1];
        numClasses = numsClasses[1];
        numTreballs = numsTreballs[1];
        break;
      case 'Lògica':
        professor = professors[1];
        numClasses = numsClasses[2];
        numTreballs = numsTreballs[2];
        break;
      case 'Blockchain':
        professor = professors[3];
        numClasses = numsClasses[3];
        numTreballs = numsTreballs[3];
        break;
      case 'Bases de dades':
        professor = professors[2];
        numClasses = numsClasses[4];
        numTreballs = numsTreballs[4];
        break;
      case 'Tecnologies web':
        professor = professors[3];
        numClasses = numsClasses[5];
        numTreballs = numsTreballs[5];
        break;
      case 'Sistemes operatius':
        professor = professors[5];
        numClasses = numsClasses[6];
        numTreballs = numsTreballs[6];
        break;
      case 'Programació orientada a objectes I':
        professor = professors[4];
        numClasses = numsClasses[7];
        numTreballs = numsTreballs[7];
        break;
      case 'Programació orientada a objectes II':
        professor = professors[2];
        numClasses = numsClasses[8];
        numTreballs = numsTreballs[8];
        break;
    }

    let objecteAssignatura = new ObjecteAssignatura(
      assignatura,
      professor,
      numClasses,
      numTreballs
    );

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
  console.log('Registre Universitat');
  console.table(arrRegistreUniversitat);
})();

console.log(`

Problema 1

En Cofla ha acabat el primer semestre i no sap si aprovarà o no les assignatures. Necessitarà:
  - La nota per assignatura ha de ser de 5 sobre 10.
  - I haver assistis al 60% de les classes.
  - O ha de tenir almenys el 75% dels treballs entregats

- Demanar-li a en Cofla les dades i veure si ha a aprovat o no
- Presentar-ho en taula
- Si suspèn que es veig en vermell i si aprova, en verd

  `);

class ResultatsAssignatura {
  constructor(assignatura, assistencia, nota, treballsEntregats) {
    this.assignatura = assignatura;
    this.assistencia = assistencia;
    this.nota = nota;
    this.treballsEntregats = treballsEntregats;
    this.qualificacio = this.calculQualificacio();
  }

  revisioAssistencia() {
    if (this.assistencia >= 60) {
      return 'Assitències en ordre';
    } else return "Falta d'assitència";
  }

  revisioTreballsEntregats() {
    if (this.treballsEntregats >= 75) {
      return 'Treballs entregats en ordre';
    } else return 'Falta de treballs entregats';
  }

  revisioNota() {
    if (this.nota >= 5) {
      return 'Nota suficient';
    } else return 'Nota insuficient';
  }

  calculQualificacio() {
    if (
      this.nota >= 5 &&
      (this.assistencia >= 60 || this.treballsEntregats >= 75)
    ) {
      return 'APROVAT';
    } else {
      return 'SUSPÈS';
    }
  }

  toString() {
    return `
  Resultats de l'assignatura ${this.assignatura}:
  - Assistència (%): ${this.assistencia}
  - Nota (sobre 10): ${this.nota}
  - Treballs entregats (%): ${this.treballsEntregats}
  - Qualificació final: ${this.calculQualificacio()}
  `;
  }

  logResultatsEstilats() {
    const boldStyle = 'font-weight: bold;';
    const normalStyle = '';
    const redStyle = 'color: red;';
    const greenStyle = 'color: green;';

    const colorStyleAssistencia =
      this.revisioAssistencia() === 'Assitències en ordre'
        ? greenStyle
        : redStyle;
    const colorStylesTreballsEntregats =
      this.revisioTreballsEntregats() === 'Treballs entregats en ordre'
        ? greenStyle
        : redStyle;
    const colorStyleNota =
      this.revisioNota() === 'Nota suficient' ? greenStyle : redStyle;
    const colorStyleQualificacio = boldStyle + " " + (
      this.qualificacio === 'APROVAT' ? greenStyle : redStyle);

    console.log(
      "%cResultats de l'assignatura:%c %s",
      normalStyle,
      boldStyle,
      this.assignatura
    );
    console.log(
      '- Assistència (%):%c %s \n %c %s',
      boldStyle,
      this.assistencia,
      colorStyleAssistencia,
      this.revisioAssistencia()
    );
    console.log(
      '- Treballs entregats (%):%c %s \n %c %s',
      boldStyle,
      this.treballsEntregats,
      colorStylesTreballsEntregats,
      this.revisioTreballsEntregats()
    );
    console.log(
      '- Nota (sobre 10):%c %s \n %c %s',
      boldStyle,
      this.nota,
      colorStyleNota,
      this.revisioNota()
    );
    console.log(
      '- Qualificació final:%c %c %s',
      boldStyle,
      colorStyleQualificacio,
      this.calculQualificacio()
    );
  }
}

function resultatsCofla() {
  let arrResultatsCofla = [];

  for (const assignatura of arrRegistreUniversitat) {
    if (assignatura.alumnes.includes('Cofla Pintor')) {
      arrResultatsCofla.push(assignatura.assignatura);
    }
  }
  console.group('arrResultatsCofla -->', arrResultatsCofla);

  (function omplirDadesResultatsCofla() {
    for (let i = 0; i < arrRegistreUniversitat.length; i++) {
      let assignatura = arrRegistreUniversitat[i];
      let assistenciaCofla = Math.round(
        (Math.floor(Math.random() * (assignatura.numClasses + 1)) /
          assignatura.numClasses) *
          100
      );
      let notaCofla = Math.round(Math.random() * 10 * 10) / 10;
      let treballsEntregatsCofla = Math.round(
        (Math.floor(Math.random() * assignatura.numTreballs + 1) /
          assignatura.numTreballs) *
          100
      );

      let resultatCofla = new ResultatsAssignatura(
        assignatura.assignatura,
        assistenciaCofla,
        notaCofla,
        treballsEntregatsCofla
      );
      resultatCofla.logResultatsEstilats();
      arrResultatsCofla.splice(i, 1, resultatCofla);
    }

    console.log('--- Resultats Cofla en taula ---');
    console.table(arrResultatsCofla);
  })();
}

console.log(`
  
  Problema 3

  
  `);
