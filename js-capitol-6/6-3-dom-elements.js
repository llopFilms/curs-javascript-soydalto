console.log(('***** Carregant 6-3-dom-elements.js *****'));

console.log('----- textContent -----');
const titol = document.querySelectorAll('h3')[2];
const textContentTitol = titol.textContent;
console.log("textContentTitol -->",textContentTitol);


const canviarText = () => {
  titol.textContent = 'Títol de mètodes d\'elements canviat';
  console.log('titol -->', titol);
};

console.log('----- innerHTML -----');
const innerHTMLTitol = titol.innerHTML;
console.log("innerHTMLTitol -->", innerHTMLTitol);

console.log('----- outerHTML -----');
const outerHTMLTitol = titol.outerHTML;
console.log("outerHTMLTitol -->", outerHTMLTitol);

let paragraf5;
const crearParagraf = () => {
  console.log('----- createElement() -----');
  paragraf5 = document.createElement('p');
  paragraf5.textContent = 'Paràgraf creat';
  paragraf5.id = 'paragraf5';
  console.log('paragraf5 -->', paragraf5);
};
















const afegirParagraf = () => {
  console.log('----- appendChild() -----');
  const ultimText = document.querySelector('.ultim-text');
  ultimText.appendChild(paragraf5);
  const body = document.querySelector('body');
  console.log('body -->', body.childNodes);  
}

