console.log('***** Carregant 6-2-dom-classes.js *****');

console.log('----- classList -----');
const titol = document.querySelector('.titol-2');
const classLlista = titol.classList;
console.log("classLlista -->", classLlista);
const arrClassLlista = Array.from(classLlista);
console.log("arrClassLlista -->", arrClassLlista);


console.log('----- add() -----');

titol.classList.add('subratllat', 'seccio');
console.log('titol -->', titol);
const afegirVerd = () => {
  titol.classList.add('verd');
  console.log('titol -->', titol);
};

console.log('----- remove() -----');
const treureVerd = () => {
  titol.classList.remove('verd');
  console.log('titol -->', titol);
};

console.log('----- item() -----');
const classTitol2 = titol.classList.item(0);
console.log('classTitol2 -->', classTitol2);
const classSubtitol = titol.classList.item(1);
console.log('classSubtitol -->', classSubtitol);

console.log('----- contains() -----');
const contenirSubratllat = titol.classList.contains('subratllat');
console.log('contenirSubratllat -->', contenirSubratllat);
const contenirVerd = titol.classList.contains('verd');
console.log('contenirVerd -->', contenirVerd);

console.log('----- replace() -----');
console.log("titol -->",titol);
titol.classList.replace('subratllat', 'subratllat-subtitol');
console.log('titol -->', titol);
  
console.log('----- toggle() -----');
const toggleVerd = () => {
  titol.classList.toggle('verd');
  console.log('titol -->', titol);
};

