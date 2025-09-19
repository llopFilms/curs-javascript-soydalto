console.log('***** Carregant 13-5-async-await.js *****');

console.log('----- async/await -----');

const url = 'data/dades.json';

const obtenirNom = async () => {
  try {
    const resposta = await fetch(url);
    const dades = await resposta.json();
    console.log('dades dins de la funció -->', dades.nom, dades.cognom);
    const pNom = document.querySelector('#pNom');
    pNom.innerHTML = dades.nom + ' ' + dades.cognom;
  } catch (error) {
    console.log('error -->', error);
  }
};

document.getElementById('botoNom').addEventListener('click', obtenirNom);

const obtenirEdat = async () => {  
  try {
    const dades = await axios(url);
    console.log('dades dins de la funció -->', dades.data.edat);
    const pEdat = document.querySelector('#pEdat');
    pEdat.innerHTML = dades.data.edat;
  } catch (error) {
    console.log('error -->', error);
  }
};

document.getElementById('botoEdat').addEventListener('click', obtenirEdat);

const urlXampp = 'http://localhost/codi/13-6-soydalto/dades.json';

const obterniDadesXampp = async () => {
  try {
    const resposta = await fetch(urlXampp);
    const dadesXampp = await resposta.json();
    console.log(
      'dades dins de la funció crida de Xampp-->',
      dadesXampp.nom,
      dadesXampp.cognoms,
      dadesXampp.edat
    );
  } catch (error) {
    console.log('error Xampp-->', error);
  }
};

obterniDadesXampp();


