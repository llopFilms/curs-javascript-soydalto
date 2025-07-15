console.log('***** Carregant 12-2-cofla.js *****');

console.log(`
  
Problema 1

En Cofla vol recollir totes les seves notes en un lloc i necessita recuperar les dades del servidor.

- Crear un sistema que permeti a en Cofla recuperar les seves notes i ho mostri en patnalla.

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
const qualificacions = [7, 6, 8, 9, 5.5, 8.5, 9, 9.5, 10];
const taulaQualificacions = [];

class registreQualificacio {
  static id = 0;
  constructor(assignatura, qualificacio) {
    this.id = ++registreQualificacio.id;
    this.assignatura = assignatura;
    this.qualificacio = qualificacio;
  }
}

(function crearTaulaQualificacions() {
  for (const assignatura in assignatures) {
    const novaQualificacio = new registreQualificacio(
      assignatures[assignatura],
      qualificacions[assignatura]
    );
    taulaQualificacions.push(novaQualificacio);
  }
  console.table(taulaQualificacions);
})();

(function mostrarQualificacions() {
  const fragment = document.createDocumentFragment();

  for (const taulaQualificacio of taulaQualificacions) {
    const divQualificacio = document.createElement('div');
    divQualificacio.classList.add('qualificacio');

    const assignatura = document.createElement('span');
    assignatura.textContent = taulaQualificacio.assignatura;
    assignatura.classList.add('item');
    assignatura.classList.add('assignatura');
    divQualificacio.appendChild(assignatura);

    const qualificacio = document.createElement('span');
    qualificacio.textContent = taulaQualificacio.qualificacio;
    qualificacio.classList.add('item');
    qualificacio.classList.add('qualificacio');
    divQualificacio.appendChild(qualificacio);

    fragment.appendChild(divQualificacio);
  }
  const qualificacions = document.getElementById('qualificacions');
  qualificacions.appendChild(fragment);
})();

const obtenirMateria = (id) => {
  return new Promise((resolve, reject) => {
    /* console.log('id -->', id); */
    let assignatura = undefined;
    let idAssignatura;
    for (const index in taulaQualificacions) {
      idAssignatura = taulaQualificacions[index].id;
      if (id === idAssignatura) {
        assignatura = taulaQualificacions[index];
        break;
      }
    }
    /* console.log('assignatura -->', assignatura); */
    if (assignatura !== undefined)
      resolve(() => [
        `L'assignatura amb id ${idAssignatura} és ${assignatura.assignatura}`,
        assignatura,
      ]);
    else reject(`No s'ha trobat l'assignatura amb id ${id}`);
  });
};

/* obtenirMateria(1).then((resolve) => console.log(resolve))
.catch((reject) => console.log(reject));
obtenirMateria(2).then((resolve) => console.log(resolve))
.catch((reject) => console.log(reject));
obtenirMateria(10).then((resolve) => console.log(resolve))
.catch((reject) => console.log(reject)); */

const llistarMateries = async () => {
  const llista = [];
  for (let index in taulaQualificacions) {
    const resolve = await obtenirMateria(+index + 1);
    console.log(resolve()[0]);
    llista.push(resolve()[1]);
  }
  console.table(llista);
};

llistarMateries();
