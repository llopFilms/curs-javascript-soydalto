console.log('***** Carregant 4-2-metodes-d-arrays.js *****');

const noms = ['Pere', 'Maria', 'Jordi', 'Mercè', 'Joana'];
console.log("noms -->",noms);

console.log('****** Transformadors ******');
console.log('----- pop() -----');

const nomUltimMenys = noms.pop();
console.log("nomUltimMenys -->", nomUltimMenys);
console.log("noms -->",noms);

console.log('----- push() -----');

const nomUltimMes = 'Ramon';
noms.push(nomUltimMes);
console.log("nomUltimMes -->",nomUltimMes);

console.log("noms -->", noms);

console.log('----- shift() -----');

const nomPrimerMenys = noms.shift();
console.log("nomPrimerMenys -->", nomPrimerMenys);
console.log("noms -->", noms);

console.log('----- unshift() -----');

const nomPrimerMes = 'Margarida';
console.log("nomPrimerMes -->",nomPrimerMes)
noms.unshift(nomPrimerMes);
console.log("noms -->", noms);

console.log('----- reverse() -----');

const nomsReverse = noms.reverse();
console.log("nomsReverse -->", nomsReverse);
console.log("noms -->", noms);

console.log('----- sort() -----');

const nomsSort = noms.sort();
console.log("nomsSort -->", nomsSort);
console.log("noms -->", noms);

console.log('----- splice() eliminar-----');

console.log("noms -->", noms);

const nomsEliminar1 = noms.splice(1, 1);
console.log("nomsEliminar1 -->", nomsEliminar1);
console.log("noms -->", noms);
const nomsEliminar2i3 = noms.splice(2, 2);
console.log("nomsEliminar2i3 -->",nomsEliminar2i3);
console.log("noms -->", noms);

console.log('----- splice() afegir-----');

const nomAfegir1 = 'Pepa';
noms.splice(1, 0, nomAfegir1);
console.log("nomAfegir1 -->", nomAfegir1);
console.log("noms -->", noms);

const nomAfegir2 = 'Josefina';
console.log("nomAfegir2 -->",nomAfegir2);
const nomAfegir3 = 'Carme';
console.log("nomAfegir3 -->",nomAfegir3);
noms.splice(3, 0, nomAfegir2, nomAfegir3);
console.log("noms -->", noms);

console.log('----- splice() substituir-----');

const nomSubstituir1 = 'Glòria';
console.log("nomSubstituir1 -->",nomSubstituir1);
noms.splice(2, 1, nomSubstituir1);
console.log("noms -->", noms);

const nomSubstitui2 = 'Olga';
console.log("nomSubstitui2 -->", nomSubstitui2);
const nomSubsituir3 = 'Lourdes';
console.log("nomSubsituir3 -->", nomSubsituir3);
noms.splice(2, 2, nomSubstitui2, nomSubsituir3);
console.log("noms -->", noms);

console.log('***** Accessors *****');
console.log('----- slice() -----');

const nomsExtrets = noms.slice(1, 4);
console.log("noms -->", noms);
console.log("nomsExtrets -->", nomsExtrets);

console.log('----- join() -----');

const nomsJoin = noms.join(' - ');
console.log("noms -->", noms);
console.log("nomsJoin -->", nomsJoin);

console.log('----- indexOf() -----');

noms.push("Jordi");
console.log("noms -->", noms);

const indexJordi = noms.indexOf('Jordi');
console.log("indexJordi -->", indexJordi);
const indexPere = noms.indexOf('Pere');
console.log("indexPere -->", indexPere);

console.log('----- lastIndexOf() -----');

const lastIndexJordi = noms.lastIndexOf('Jordi');
console.log("lastIndexJordi -->", lastIndexJordi);
const lastIndexPere = noms.lastIndexOf('Pere');
console.log("lastIndexPere -->", lastIndexPere);

console.log('----- includes() -----');

const includesJordi = noms.includes('Jordi');
console.log("includesJordi -->", includesJordi);
const includesPere = noms.includes('Pere');
console.log("includesPere -->", includesPere);

console.log('***** De repetició *****');
console.log('----- forEach() -----');

noms.forEach((nom, index) => {
  console.log(index + ". " + nom);
});

console.log('----- map() -----');

console.log("noms -->", noms);
const nomsMapejats = noms.map((nom) => nom.toLowerCase());
console.log("nomsMapejats -->", nomsMapejats);

console.log('----- filter() -----');

const nomsFiltrats = noms.filter((nom) => nom.length > 4);
console.log("noms -->", noms);
console.log("nomsFiltrats -->", nomsFiltrats);





