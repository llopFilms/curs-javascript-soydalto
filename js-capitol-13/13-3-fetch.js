console.log('***** Carregant 13-3-fetch.js *****');

console.log('----- fetch() -----');

const url = 'https://reqres.in/api/unknown/2';
const apiKey = 'reqres-free-v1';

const peticio = fetch(url, {
  headers: {
    'x-api-key': apiKey,
  },
});

console.log('----- text() -----');
peticio
  .then((resposta) => resposta.text())
  .then((dades) => console.log('resposta.text() -->', dades));

console.log('petició amb text() -->', peticio);

console.log('----- json() -----');

const peticio2 = fetch(url, {
  headers: {
    'x-api-key': apiKey,
  },
});
peticio2
  .then((resposta) => resposta.json())
  .then((dades) => console.log('resposa.json() -->', dades.data));

console.log('petició amb json() -->', peticio2);

const text = document.querySelector('.text');

const peticio3 = fetch('data/dades.json');
peticio3
  .then((resposta) => resposta.json())
  .then((dades) => {
    console.log('resposta.json() -->', dades);
    text.textContent = `Nom: ${dades.nom}, cognom: ${dades.cognom}, edat: ${dades.edat}`;
  });

console.log('petició amb json() -->', peticio3);

console.log('----- blob() -----');

const imatge = document.querySelector('img');
const url2 = 'img/21.jpg';

const peticio4 = fetch(url2);
peticio4
  .then((resposta) => resposta.blob())
  .then((dades) => {
    console.log('resposta.blob() -->', dades);
    imatge.src = URL.createObjectURL(dades);
  });

console.log('petició amb blob() -->', peticio4);
