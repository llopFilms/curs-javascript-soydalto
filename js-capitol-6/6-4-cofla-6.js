console.log('***** Carregant 6-4-cofla-6.js *****');

console.log(`
  
  Problema 1

  En Cofla no pot obrir el garatge de la bicicleta per anar a la facultat perquè ha perdut la clau. Truca al serraller perquè vingui amb claus de garatge estàndsard. Hi ha 10 models, i el serraller només en por portar una.

  - Mostrar la llista de possibles claus
  - Crear un formulari de selecció de la clau
  - Que les dades d'envïin al serraller

  `);

function clausCofla() {
  class Clau {
    constructor(marca, model, preu, imatge) {
      this.marca = marca;
      this.model = model;
      this.preu = preu;
      this.imatge = imatge;
    }
  }
  const claus = [];

  (function crearClaus() {
    const img1 =
      'https://preview.free3d.com/img/2016/07/2162649233029596552/4urrl5gw.jpg';
    const img2 =
      'https://preview.free3d.com/img/2016/07/2162649233029596552/xe13v9p8.jpg';
    const img3 =
      'https://preview.free3d.com/img/2017/12/2154826317613237346/i8mm0hcc.jpg';
    const img4 =
      'https://preview.free3d.com/img/2019/07/2154882333969221330/qyy1osvg.jpg';
    const img5 =
      'https://preview.free3d.com/img/2016/07/2162649233029596552/1z771gq4.jpg';
    const img6 =
      'https://preview.free3d.com/img/2017/12/2154826317613237346/2fbxjztg.jpg';

    claus.push(new Clau('KeySafe', 'Alpha-300', '15€', img4));
    claus.push(new Clau('SecurLock', 'Titan-X', '20€', img1));
    claus.push(new Clau('CryptoKey', 'Veritas-Z', '30€', img6));
    claus.push(new Clau('GuardLock', 'Sentinel-Plus', '12€', img2));
    claus.push(new Clau('MasterKey', 'Omni-Core', '50€', img5));
    claus.push(new Clau('BoltKey', 'K-200', '9.5€', img3));
    claus.push(new Clau('DigiCode', 'Cipher-7B', '18€', img1));
    claus.push(new Clau('ProSecure', 'Elite-Pro', '28€', img6));
    claus.push(new Clau('SmartLock', 'Nexus-One', '11€', img2));
    claus.push(new Clau('CyberGuard', 'Quantum-Flow', '4.5€', img5));

    console.log('Array de les claus');
    console.table(claus);
  })();

  (function mostrarClaus() {
    const contenidorLlista = document.querySelector('.contenidor-llista');
    contenidorLlista.textContent = 'Llista de claus';
    const fragment = document.createDocumentFragment();

    const llistaClaus = document.createElement('ul');
    llistaClaus.id = 'llistaClaus';
    llistaClaus.classList.add('llista-claus');
    for (const [index, clau] of claus.entries()) {
      const descripcioClau = document.createElement('div');
      descripcioClau.id = `descripcioClau${index + 1}`;
      descripcioClau.classList.add(
        'descripcio-clau',
        `descripcio-clau-${index + 1}`
      );
      llistaClaus.appendChild(descripcioClau);
      const titolClau = document.createElement('p');
      titolClau.textContent = `Clau número ${index + 1}`;
      titolClau.id = `titolClau${index + 1}`;
      titolClau.classList.add('titol-clau', `titol-clau-${index + 1}`);
      descripcioClau.appendChild(titolClau);
      const imatge = document.createElement('img');
      imatge.src = clau.imatge;
      imatge.id = `imatgeClau${index + 1}`;
      imatge.classList.add('imatge', `imatge-clau-${index + 1}`);
      imatge.setAttribute('alt', clau.marca + ' ' + clau.model);
      imatge.setAttribute('title', clau.marca + ' ' + clau.model);
      imatge.setAttribute('width', '200');
      descripcioClau.appendChild(imatge);
      const detallsClau = document.createElement('ul');
      detallsClau.id = `detallsClau${index + 1}`;
      detallsClau.classList.add('detalls-clau', `detalls-clau-${index + 1}`);
      detallsClau.textContent = 'Detalls:';
      descripcioClau.appendChild(detallsClau);

      const marca = document.createElement('li');
      marca.textContent = clau.marca;
      marca.id = `marcaClau${index + 1}`;
      marca.classList.add('detall', `marca-clau-${index + 1}`);
      detallsClau.appendChild(marca);
      const model = document.createElement('li');
      model.textContent = clau.model;
      model.id = `modelClau${index + 1}`;
      model.classList.add('detall', `model-clau-${index + 1}`);
      detallsClau.appendChild(model);
      const preu = document.createElement('li');
      preu.textContent = clau.preu;
      preu.id = `preuClau${index + 1}`;
      preu.classList.add('detall', `preu-clau-${index + 1}`);
      detallsClau.appendChild(preu);

      descripcioClau.addEventListener('click', () => {
        descripcioClau.classList.toggle('active');
        document.querySelector('#dadesClau').value = `Marca: ${clau.marca} Model: ${clau.model} Preu: ${clau.preu}`;
      });
    }
    fragment.appendChild(llistaClaus);
    contenidorLlista.appendChild(fragment);
  })();

  (function enviarFormulari() {
    const formulari = document.querySelector('#formulari-cofla');
    formulari.addEventListener('submit', (event) => {
      event.preventDefault();
      const dadesClau = document.querySelector('#dadesClau').value;
      alert(dadesClau);
    });
  })();
}
