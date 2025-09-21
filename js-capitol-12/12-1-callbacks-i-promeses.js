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
  constructor(nomComplert, correu, instagram) {
    this.nomComplert = nomComplert;
    this.correu = correu;
    this.instagram = instagram;
  }

  senseDades() {
    if (this.correu == '') this.correu = 'Sense dades';
    if (this.instagram == '') this.instagram = 'Sense dades';
  }
}

const dadesPersones = [
  {
    nomComplert: 'Ramon Ramoneda',
    correu: 'rramoneda@example.cat',
    instagram: '',
  },
  {
    nomComplert: 'Pere Garcia',
    correu: 'pere.garcia@example.cat',
    instagram: '@peregarcia',
  },
  {
    nomComplert: 'Anna López',
    correu: '',
    instagram: '',
  },
  {
    nomComplert: 'Pau González',
    correu: '',
    instagram: '@paugonzalez',
  },
];

const dadesPersonesClasse = [];

const crearPersona = (index, nomComplert, correu, instagram, callback) => {
  const persona = new Persona(nomComplert, correu, instagram);
  persona.senseDades();
  callback(index, persona);
  return persona;
};

const mostrarPersona = (index, persona) =>
  console.log(`Persona ${+index + 1} -->`, persona);

for (let index in dadesPersones) {
  const persona = crearPersona(
    index,
    dadesPersones[index].nomComplert,
    dadesPersones[index].correu,
    dadesPersones[index].instagram,
    mostrarPersona
  );
  dadesPersonesClasse.push(persona);
}

console.table(dadesPersonesClasse);

console.log('----- Promeses -----');

const nom2 = 'Josep Maria';

const promesa = new Promise((resolve, reject) => {
  if (nom2 == 'Josep Maria') {
    resolve('El nom coincideix');
  } else {
    reject('El nom no coincideix');
  }
});

/* promesa
  .then((res) => {
    console.log(`El nom és ${nom2}`);
    console.log(res);
  })
  .catch((err) => {
    console.log(`El nom no és ${nom2}`);
    console.log(err);
  }); */

const consultaPersona = (nom) => {
  return new Promise((resolve, reject) => {
    let personaTrobada = null;

    for (let persona of dadesPersonesClasse) {
      if (persona.nomComplert === nom) {
        personaTrobada = persona;
        break;
      }
    }

    if (!personaTrobada) {
      reject(`No s'ha trobat la persona amb el nom ${nom}`);
      return;
    }

    const promeses = [];

    const promesaCorreu = new Promise((innerResolve, innerReject) => {
      if (personaTrobada.correu !== 'Sense dades') {
        innerResolve(
          `El correu de ${personaTrobada.nomComplert} és ${personaTrobada.correu}`
        );
      } else {
        innerReject(
          `No s'ha trobat el correu de ${personaTrobada.nomComplert}`
        );
      }
    });

    const promesaInstagram = new Promise((innerResolve, innerReject) => {
      if (personaTrobada.instagram !== 'Sense dades') {
        innerResolve(
          `L'instagram de ${personaTrobada.nomComplert} és ${personaTrobada.instagram}`
        );
      } else {
        innerReject(
          `No s'ha trobat l'instagram de ${personaTrobada.nomComplert}`
        );
      }
    });

    promeses.push(promesaCorreu);
    promeses.push(promesaInstagram);

    Promise.all(promeses)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/* dadesPersonesClasse.forEach((persona) => {
  consultaPersona(persona.nomComplert)
    .then((res) => {
      for (const missatge of res) {
        console.log(missatge);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

consultaPersona('Maria Rodríguez')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

const buscarPersona = (nom) => {
  new Promise((resolve, reject) => {
    let personaTrobada = null;

    for (let persona of dadesPersonesClasse) {
      if (persona.nomComplert === nom) {
        personaTrobada = persona;
        break;
      }
    }

    if (personaTrobada) {
      resolve(() => {
        new Promise((innerResolve, innerReject) => {
          if (personaTrobada.correu !== 'Sense dades') {
            innerResolve(
              `El correu de ${personaTrobada.nomComplert} és ${personaTrobada.correu}`
            );
          } else {
            innerReject(
              `No s'ha trobat el correu de ${personaTrobada.nomComplert}`
            );
          }
        })
          .then((innerResolve) => console.log(innerResolve))
          .catch((innerReject) => console.log(innerReject));

        new Promise((innerResolve, innerReject) => {
          if (personaTrobada.instagram !== 'Sense dades') {
            innerResolve(
              `L'instagram de ${personaTrobada.nomComplert} és ${personaTrobada.instagram}`
            );
          } else {
            innerReject(
              `No s'ha trobat l'instagram de ${personaTrobada.nomComplert}`
            );
          }
        })
          .then((innerResolve) => console.log(innerResolve))
          .catch((innerReject) => console.log(innerReject));
      });
    } else {
      reject(() => (`No s'ha trobat la persona ${nom}`));
    }
  })
    .then((resolve) => resolve())
    .catch((reject) => console.log(reject()));
};

/*
buscarPersona('Ramon Ramoneda');
buscarPersona('Pere Garcia');
buscarPersona('Anna López');
buscarPersona('Pau González');
buscarPersona('Maria Rodríguez');
 */

console.log('----- finally + throw -----');

const provaTry = () => {
  try {
    throw {
      nom: 'Error de prova',
      tipus: 'info',
    };
  } catch (error) {
    console.log('throw error.nom -->', error.nom);
  } finally {
    console.log('Finally --> finally');
  }
};
provaTry();

