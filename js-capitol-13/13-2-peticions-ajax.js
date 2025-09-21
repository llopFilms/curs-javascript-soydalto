console.log('***** Carregant 13-2-Peticions-Ajax.js *****');

const peticio = new XMLHttpRequest();

peticio.addEventListener('readystatechange', () => {
  console.log('----- readystatechange -----');

  const readyState = peticio.readyState;
  const status = peticio.status;
  const resposta = peticio.response;

  switch (readyState) {
    case 1:
      console.log(
        'readystate -->',
        readyState,
        'status -->',
        status,
        'La petició ha estat creada.',
        'resposta -->',
        resposta
      );
      break;
    case 2:
      console.log(
        'readystate -->',
        readyState,
        'status -->',
        status,
        'La petició està enviada.',
        'resposta -->',
        resposta
      );

      break;
    case 3:
      console.log(
        'readystate -->',
        readyState,
        'status -->',
        status,
        "La petició s'està procesant.",
        'resposta -->',
        resposta
      );

      break;
    case 4:
      console.log(
        'readystate -->',
        readyState,
        'status -->',
        status,
        'La petició ha estat processada.',
        'resposta -->',
        resposta
      );
      break;
  }

  if (peticio.readyState == 4 && peticio.status == 200)
    console.log('peticio.response -->', peticio.response);
});

peticio.addEventListener('load', () => {
  console.log('----- load -----');

  let missatge;
  if (peticio.status == 200) {
    missatge = 'Petició correcta';
    console.log('peticio.response -->', JSON.parse(peticio.response));
  } else {
    missatge = 'Petició incorrecta';
    console.log('peticio.response -->', peticio.response);

  }  
  console.log('missatge load -->', missatge);
});

console.log('----- Petició GET -----');
peticio.open('GET', 'data/dades.json');
peticio.send();

/* peticio.open('GET', 'https://reqres.in/api/users');
peticio.send(); */

console.log('----- Petició POST -----');
const peticio2 = new XMLHttpRequest();

peticio2.addEventListener('load', () => {
  console.log('----- load -----');

  let missatge;
  if (peticio2.status == 201) {
    missatge = 'Petició correcta';
    console.log('peticio.response -->', JSON.parse(peticio2.response));
  } else {
    missatge = 'Petició incorrecta';
    console.log('peticio.response -->', peticio2.response);
  }
  console.log('missatge load -->', missatge);
});

peticio2.open('POST', 'https://reqres.in/api/users');
peticio2.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
peticio2.setRequestHeader('x-api-key', 'reqres-free-v1');  
peticio2.send(JSON.stringify({
  "nom": "Ramon",
  "cognom": "Ramoneda",
  "edat": 26
}));


