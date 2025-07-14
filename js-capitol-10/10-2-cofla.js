console.log('***** Carregant 10-2-cofla.js *****');

console.log(`
  
  Problema 1

  Hi ha 2 exàmens finals per en Cofla. Cal crear el registre i el càlcul de la mitjana.

  - Crear un registre amb 2 notes.
  - Verificar que no hi ha error.
  - Calcular la mitjana
  - Calcular el promig amb les notes de 2 treballs anteriors
  - Aprovar-lo si passa del 7 sobre 10

`);

const verificarNota = (nota) => {
  console.log('nota -->', nota);

  let missatge, lletra;
  if (nota < 3) lletra = 'E';
  else if (nota < 5) lletra = 'D';
  else if (nota < 7) lletra = 'C';
  else if (nota < 8.5) lletra = 'B';
  else if (nota < 10) lletra = 'A';
  else lletra = null;

  switch (lletra) {
    case 'E':
      missatge = 'Molt deficient';
      break;
    case 'D':
      missatge = 'Insuficient';
      break;
    case 'C':
      missatge = 'Bé';
      break;
    case 'B':
      missatge = 'Notable';
      break;
    case 'A':
      missatge = 'Excel·lent';
      break;
    default:
      missatge = null;
      break;
  }
  console.log('missatge -->', missatge);

  return missatge;
};

const calcularMitjana = (nota1, nota2, nota) => {
  const mitjana = (nota1 + nota2 + nota) / 3 >= 7 ? 'Aprovat' : 'Suspès';
  return mitjana;
};

const obrirModal = (dada, missatge) => {
  console.log(dada);
  console.log(missatge);
  const modal = document.getElementById('modal');
  const textMisstage = document.getElementById('textMissatge');
  console.log(textMisstage);
  if (textMisstage !== null) {
    textMisstage.remove();
  }
  modal.insertAdjacentHTML('beforeend', missatge);
  const hidden = document.querySelector('.hidden');
  hidden.classList.toggle('active');
};

const formulari = document.getElementById('formulari');
formulari.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Enviar formulari');
  let nota, missatge;
  try {
    nota = parseInt(document.getElementById('nota').value);
    const nota1 = 5;
    const nota2 = 8;
    const verificacioNota = verificarNota(nota);
    console.log('Verificació Nota -->', verificacioNota);
    const calculMitjana = calcularMitjana(nota1, nota2, nota);
    missatge = `
  <div id="textMissatge">
  <p>Avaluacions: finals:</h>
  <ul>
    <li>Nota 1: ${nota1}</li>
    <li>Nota 2: ${nota2}</li>
    <li>Nota examen: ${nota}</li>
    <li>Verificació nota examen: ${verificacioNota}</li>
    <li>Mitjana: ${calculMitjana}</li>
  </ul>
  </div>
`;
  } catch (err) {
    nota = NaN;
    missatge = 'La nota ha de ser un número';
  }
  obrirModal(nota, missatge);
});
