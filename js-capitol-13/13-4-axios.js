console.log('***** Carregant 13-axios.js *****');

console.log('----- GET -----');

const url = 'data/dades.json';
let dadesFetch = null;

fetch(url)
  .then((resposta) => resposta.json())
  .then((dades) => {
    dadesFetch = dades;
    console.log('dadesFetch un cop la promesa fetch es resol -->', dadesFetch);
  });

let dadesAxios = null;

axios(url).then((dades) => {
  dadesAxios = dades.data;
  console.log('dadesAxios un cop la promesa axios es resol -->', dadesAxios);
});

console.log('----- POST -----');

const url2 = 'https://reqres.in/api/users';
const apiKey = 'reqres-free-v1';
let dadesAxiosPost = null;

axios
  .post(
    url2,
    { name: 'pepe', job: 'programador' },
    {
      headers: {
        'x-api-key': apiKey,
      },
    }
  )
  .then((dades) => {
    dadesAxiosPost = dades.data;
    console.log(
      'dadesAxiosPost un cop la promesa axios post es resol -->',
      dadesAxiosPost
    );
  });

axios(url2, {
  method: 'post',
  data: { name: 'pepe', job: 'programador' },
  headers: {
    'x-api-key': apiKey,
  },
}).then((dades) => {
  dadesAxiosPost = dades.data;
  console.log(
    'dadesAxiosPost un cop la promesa axios post es resol -->',
    dadesAxiosPost
  );
});
