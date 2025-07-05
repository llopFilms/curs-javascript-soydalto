console.log('***** Carregant 6-3-dom-elements.js *****');

console.log('----- textContent -----');
const titol = document.querySelectorAll('h3')[2];
const textContentTitol = titol.textContent;
console.log('textContentTitol -->', textContentTitol);

const canviarText = () => {
  titol.textContent = "Títol de mètodes d'elements canviat";
  console.log('titol -->', titol);
};

console.log('----- innerHTML -----');
const innerHTMLTitol = titol.innerHTML;
console.log('innerHTMLTitol -->', innerHTMLTitol);

console.log('----- outerHTML -----');
const outerHTMLTitol = titol.outerHTML;
console.log('outerHTMLTitol -->', outerHTMLTitol);

let llista1, element1, element2, textElement1;
console.log('----- createElement() -----');
llista1 = document.createElement('ul');
llista1.id = 'llista1';
llista1.textContent = 'Inici llista 1';
console.log('llista1 -->', llista1);
element1 = document.createElement('li');
element1.id = 'element1';
console.log('element1 -->', element1);
textElement1 = document.createTextNode('Element 1 de la llista');
console.log('textElement1 -->', textElement1);
element2 = document.createElement('li');
element2.id = 'element2';
element2.textContent = 'Element 2 de la llista';
console.log('element2 -->', element2);

console.log('----- appendChild() -----');
const contenidor = document.querySelector('.contenidor');
contenidor.appendChild(llista1);
llista1.appendChild(element1);
element1.appendChild(textElement1);
llista1.appendChild(element2);
console.log('contenidor -->', contenidor.childNodes);
console.log('llista1 -->', llista1.childNodes);
console.log('element1 -->', element1.childNodes);
console.log('element2 -->', element2.childNodes);

console.log('----- after() -----');
const pFinal = document.createElement('p')
pFinal.textContent = 'pFinal: Hem afegit un paràgraf després de la llista';
console.log("pFinal -->",pFinal);
llista1.after(pFinal);

console.log('----- before() -----');
const pInici = document.createElement('p')
pInici.textContent = 'pInici: Hem afegit un paràgraf abans de la llista';
console.log("pInici -->",pInici);
llista1.before(pInici);

console.log('----- insertBefore() -----');
const pQuasiFinal = document.createElement('p')
pQuasiFinal.textContent = 'pQuasiFinal: Hem afegit un paràgraf quasi després de la llista';
console.log("pQuasiFinal -->",pQuasiFinal);
contenidor.insertBefore(pQuasiFinal, pFinal);
const pDespresFinal = document.createElement('p')
pDespresFinal.textContent = 'pDespresFinal: Hem afegit un paràgraf després del paràgraf afegit a la llista';
console.log("pDespresFinal -->",pDespresFinal);
contenidor.insertBefore(pDespresFinal, null);


console.log('----- createDocumentFragment() -----');
const fragmentLlista = document.createDocumentFragment();
for (let i = 3; i <= 5; i++) {
  const elementLlista = document.createElement('li');
  elementLlista.id = `element${i}`;
  elementLlista.textContent = `Element ${i} de la llista`;
  fragmentLlista.appendChild(elementLlista);
}
textFinalLlista = document.createTextNode('Final llista');
console.log('fragmentLlista -->', fragmentLlista);
llista1.appendChild(fragmentLlista);
llista1.appendChild(textFinalLlista);
console.log('llista1 -->', llista1.childNodes);

console.log('----- firstChild() -----');
console.log('llista1.firstChild -->', llista1.firstChild);

console.log('----- lastChild() -----');
console.log('llista1.lastChild -->', llista1.lastChild);

console.log('----- firstElementChild() -----');
console.log('llista1.firstElementChild -->', llista1.firstElementChild);

console.log('----- lastElementChild() -----');
console.log('llista1.lastElementChild -->', llista1.lastElementChild);

console.log('----- childNodes() -----');
console.log('llista1.childNodes -->', llista1.childNodes);
for (const [index, node] of llista1.childNodes.entries()) {
  console.log(`Node ${index} -->`, node);
}

console.log('----- children() -----');
console.log('llista1.children -->', llista1.children);
for (const index in llista1.children) {
  if (index < 5) {
    let element = llista1.children[index];
    console.log(`Element ${index} -->`, element);
  }
}

console.log('----- replaceChild() -----');
const element6 = document.createElement('li');
element6.id = 'element6';
element6.textContent = 'Element 6 de la llista però el posem al 5 amb un replace()';
llista1.replaceChild(element6, element4);
console.log('llista1 -->', llista1.childNodes);

console.log('----- removeChild() -----');
llista1.removeChild(llista1.lastChild);
console.log('Fora el text de \'Final llista\' -->', llista1.childNodes);

console.log('---- hasChildNodes() -----');
console.log('llista1.hasChildNodes() -->', llista1.hasChildNodes());

console.log('----- cloneNode() -----');
const llista2 = llista1.cloneNode(true);
console.log('llista1 -->', llista1.childNodes);
console.log('llista2 -->', llista2.childNodes);

console.log('----- parentElement() -----');
console.log('llista1.parentElement -->', llista1.parentElement);

console.log('----- parentNode() -----');
console.log('llista1.parentNode -->', llista1.parentNode);

console.log('----- nextSibling() -----');
console.log('element2.nextSibling -->', element2.nextSibling);

console.log('----- previousSibling() -----');
console.log('element2.previousSibling -->', element2.previousSibling);

console.log('----- nextElementSibling() -----');
console.log('element2.nextElementSibling -->', element2.nextElementSibling);

console.log('----- previousElementSibling() -----');
console.log('element2.previousElementSibling -->', element2.previousElementSibling);

console.log('----- closest() -----');
console.log('pFinal.closest("div") -->', pFinal.closest("div"));



