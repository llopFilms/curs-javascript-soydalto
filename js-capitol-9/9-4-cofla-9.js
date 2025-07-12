console.log('***** Carregant 9-4-cofla-9.js *****');

console.log(`
  
  Problema 1

  En Cofla ha suspès tres assignatures. Necessitarà enviar un formulari demanant la inscripció de les matèeries a recuperar:

    - Crea el formulari
    - Valida el formulari
    - Envia el formulari
  `);

const assignaturesSuspeses = [
  'Programació',
  'Bases de dades',
  'Tecnologies web',
];

(function omplirFormulari() {
  const nom = document.getElementById('nom');
  nom.value = 'Cofla Pintor';
  const correu = document.getElementById('correu');
  correu.value = 'cofla@exemple.cat';
  const textArea = document.getElementById('assignaturesSuspeses');
  textArea.value = assignaturesSuspeses.join(', ');
  console.log(textArea.value);
})();

const formulari = document.getElementById('formulari');
formulari.addEventListener('submit', enviarSollicitud);

function enviarSollicitud(e) {
  e.preventDefault();
  console.log('Enviar formulari');
  /* console.log('Nom -->', formulari.elements[0].value);
  console.log('Correu -->', formulari.elements[1].value);
  console.log('Assignatures -->', formulari.elements[2].value); */

  const nom = document.getElementById('nom').value;
  const correu = document.getElementById('correu').value;
  const assignatures = document
    .getElementById('assignaturesSuspeses')
    .value.split(', ');
  const resultat = document.getElementById('resultat');

  const errors = validacio(nom, correu, assignatures);
  console.log('Errors -->', errors);

  if (errors.length) {
    resultat.innerHTML = '';
    errors.forEach((error) => {
      resultat.innerHTML += `<p>${error}</p>`;
    });
    resultat.classList.add('no-validat');
  } else {
    console.log('Nom -->', nom);
    console.log('Correu -->', correu);
    console.log('Assignatures -->', assignatures);
    resultat.innerHTML = 'Sollicitud enviada correctament';
    resultat.classList.add('validat');
  }
}

function validacio(nom, correu, assignatures) {
  let errors = [];
  console.log(errors);
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  if (nom === '') errors.push('El nom es obligatori');
  else if (nom.length < 3 || nom.length > 30)
    errors.push('El nom ha de tenir entre 3 lletres i 30');
  if ((correu = '' || !regex.test(correu)))
    errors.push('El correu no és vàlid');
  if (assignatures.length === 0 || assignatures[0] === '')
    errors.push("Has d'escriure alguna assignatura");

  return errors;
}

console.log(`
  
  Problema 2




  `);

const alumnes = [
  {
    nom: 'Laia García',
    correu: 'laia.garcia@example.cat',
    assignatura: 'Programació',
  },
  {
    nom: 'Jordi Sánchez',
    correu: 'jordi.sanchez@example.cat',
    assignatura: 'Matemàtiques',
  },
  {
    nom: 'Anna López',
    correu: 'anna.lopez@example.cat',
    assignatura: 'Lògica',
  },
  {
    nom: 'Pau González',
    correu: 'pau.gonzalez@example.cat',
    assignatura: 'Blockchain',
  },
  {
    nom: 'Maria Rodríguez',
    correu: 'maria.rodriguez@example.cat',
    assignatura: 'Bases de dades',
  },
  {
    nom: 'Marcos Hernández',
    correu: 'marcos.hernandez@example.cat',
    assignatura: 'Tecnologies web',
  },
  {
    nom: 'Cofla Pintor',
    correu: 'cofla.pintor@example.cat',
    assignatura: 'Sistemes operatius',
  },
  {
    nom: 'Ivan Jiménez',
    correu: 'ivan.jimenez@example.cat',
    assignatura: 'Programació orientada a objectes I',
  },
];

const contenidorTaula = document.querySelector('.contenidor-taula');
let codiHTML = '';

for (const alumne of alumnes) {
  codiHTML += `<div class="item nom">${alumne.nom}</div>
      <div class="item correu">${alumne.correu}</div>
      <div class="item assigntura">${alumne.assignatura}</div>
      <div class="item taula">
        <select class="taula-escollida">
          <option value="1">Taula 1</option>
          <option value="2">Taula 2</option>
          <option value="3">Taula 3</option>
          <option value="4">Taula 4</option>
          <option value="5">Taula 5</option>
        </select>
      </div>`;
}

const botoConfirmar = document.querySelector('.boto-confirmar');
botoConfirmar.insertAdjacentHTML('beforebegin', codiHTML);

botoConfirmar.addEventListener('click', () => {
  const TaulesEscollides = document.querySelectorAll('.taula-escollida');
  for (const taula of TaulesEscollides) {
    taula.outerHTML = `Taula ${taula.value}`;
  }
});
