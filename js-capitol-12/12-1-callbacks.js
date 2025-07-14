console.log('***** Carregant 12-1-callbacks.js *****');

console.log('----- Funció callback -----');

const saludar = (nom) =>
  console.log(
    `Funció callback diu: bon dia ${nom}. M'alegro el teu dia sigui bo.`
  );

(function bonDia(callback) {
  callback('Ramon');
})(saludar);

const bonaTarda = (callback) => {
  const nom = callback('pere');
  console.log(
    `Funció callback diu: bona tarda ${nom}. M'alegro el teu dia sigui bo.`
  );
};

bonaTarda((nom) => nom.charAt(0).toUpperCase() + nom.slice(1).toLowerCase());

class Persona {
  constructor(nomComplert, correu) {
    this.nomComplert = nomComplert;
    this.correu = correu;
  }
}

const dadesPersones = [
  {
    nomComplert: 'Ramon Ramoneda',
    correu: 'rramoneda@example.cat',
  },
  {
    nomComplert: 'Pere García',
    correu: 'pere.garcia@example.cat',
  },
  {
    nomComplert: 'Anna López',
    correu: 'anna.lopez@example.cat',
  },
  {
    nomComplert: 'Pau González',
    correu: 'pau.gonzalez@example.cat',
  },
];

const crearPersona = (index, nomComplert, correu, callback) => {
  const persona = new Persona(nomComplert, correu);
  callback(index, persona);
};

const mostrarPersona = (index, persona) =>
  console.log(`Persona ${+index + 1} -->`, persona);

for (let index in dadesPersones) {
  crearPersona(
    index,
    dadesPersones[index].nomComplert,
    dadesPersones[index].correu,
    mostrarPersona
  );
}
