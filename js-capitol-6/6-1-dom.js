console.log('***** Carregant 6-1-dom.js *****');

console.log('----- getElementById() -----');
const paragrafID = document.getElementById('paragraf1');
console.log('paragrafID -->', paragrafID);

console.log('----- getElementsByTagName() -----');
const paragrafTagLlista = document.getElementsByTagName('p');
console.log('paragrafTagLlista -->', paragrafTagLlista);
console.log('Paràgraf 1 --> ', paragrafTagLlista[0]);
console.log('Paràgraf 2 --> ', paragrafTagLlista[1]);

console.log('----- querySelector() -----');
const paragrafClass1 = document.querySelector('.paragraf-1');
console.log('paragrafClass1 -->', paragrafClass1);
const paragrafClass2 = document.querySelector('.paragraf-2');
console.log('paragrafClass2 -->', paragrafClass2);

console.log('----- querySelectorAll() -----');
const paragrafsClass = document.querySelectorAll('#paragraf1, .paragraf-2');
console.log('paragrafsClass -->', paragrafsClass);
console.log('Paràgraf 1 --> ', paragrafsClass[0]);
console.log('Paràgraf 2 --> ', paragrafsClass[1]);

console.log('----- setAttribute() -----');
const rangEdats = document.querySelector('#rangEdats');
console.log('rangEdats -->', rangEdats);
rangEdats.setAttribute('type', 'range');
console.log('rangEdats -->', rangEdats);

console.log('----- getAttribute() -----');
const tipusColor = document.querySelector('#tipusColor');
console.log('tipusColor -->', tipusColor);
console.log('id tipusColor -->', tipusColor.getAttribute('id'));
console.log('type tipusColor -->', tipusColor.getAttribute('type'));

console.log('----- removeAttribute() -----');
const tipusPassword = document.querySelector('#tipusPassword'); console.log("tipusPassword -->", tipusPassword);
tipusPassword.removeAttribute('placeholder');
console.log("tipusPassword -->", tipusPassword);

console.log('----- contenteditable -----');
const paragraf3 = document.querySelector('#paragraf3');
console.log('paragraf3 -->', paragraf3);
paragraf3.setAttribute('contenteditable', 'true');
console.log('paragraf3 -->', paragraf3);

console.log('----- hidden -----');
const paragraf4 = document.querySelector('#paragraf4');
console.log('paragraf4 hidden -->', paragraf4);
paragraf4.removeAttribute('hidden');
console.log('paragraf4 -->', paragraf4);

console.log(('----- tabindex -----'));
paragraf4.setAttribute('tabindex', '0');
console.log('paragraf4 -->', paragraf4);

console.log('--- title -----');
paragraf4.setAttribute('title', 'Paràgraf 4');
console.log('paragraf4 -->', paragraf4);

console.log(('----- className -----'));
const inputJs = document.querySelector('#inputJs');
console.log('inputJs -->', inputJs);
inputJs.className = 'input-Js';
console.log('inputJs -->', inputJs);

console.log('----- value -----');
const valueInputJs = inputJs.value;
console.log('valueInputJs -->', valueInputJs);

console.log('----- type -----');
const typeInputJs = inputJs.type;
console.log('typeInputJs -->', typeInputJs);

console.log('----- accept -----');
const inputJsFile = document.querySelector('#inputJsFile');
console.log('inputJsFile -->', inputJsFile);
inputJsFile.setAttribute('accept', 'image/*, .pdf, doc, xlsx');
console.log('inputJsFile -->', inputJsFile.accept);

console.log('----- form -----');
const formulari = document.querySelector('#formulari');
console.log("formulari -->", formulari);

const incrementarEnviaments = () => {
  let enviaments = formulari.getAttribute('data-enviaments');
  enviaments++;
  formulari.setAttribute('data-enviaments', enviaments);
}

formulari.addEventListener('submit', function (e) {
  e.preventDefault();
  incrementarEnviaments();
  console.log('Enviaments -->', formulari.dataset.enviaments);
  console.log('Submit des de dins del formulari');
  console.log('Dades input formulari -->', formulari[0].value);

});
const botoForm = document.querySelector('button');
botoForm.addEventListener('click', function (e) {
  e.preventDefault();
  incrementarEnviaments();
  console.log('Enviaments -->', formulari.dataset.enviaments);
  console.log('Submit des de fora del formulari');
  console.log('Dades input formulari -->', formulari.elements[0].value);
});

console.log('----- minlength -----');
const contrasenya = document.querySelectorAll('input[type="password"]')[1];
console.log("contrasenya tipus -->", contrasenya.type);
console.log('contrasenya minlength -->', contrasenya.minLength);

console.log('----- placeholder -----');
console.log("contrasenya placeholder -->", contrasenya.placeholder);

console.log('--- labels -----');
console.log("contrasenya etiqueta 1 -->",contrasenya.labels[0].textContent);
console.log("contrasenya etiqueta 2-->", contrasenya.labels[1].textContent);

console.log('--- requried -----');
const inputJsPassword = document.querySelector('#inputJsPassword');
console.log('inputJsPassword -->', inputJsPassword);
console.log('inputJsPassword -->', inputJsPassword.required);




















