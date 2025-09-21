console.log('***** Carregant 13-1-dades-json.js *****');

console.log('----- Dades JSON -----');

const objecteJs = {
  non: 'Ramona',
  cognom: 'Ramoneda',
};

console.log('objecteJs -->', objecteJs);

const objecteJson = {
  nom: 'Ramona',
  cognom: 'Ramoneda',
};

console.log('objecteJson -->', objecteJson);

console.log('----- JSON serialitzat -----');

const objecteFetString = `{ "nom": "Ramona", "cognom": "Ramoneda" }`;

console.log('objecteFetString typeof -->', typeof objecteFetString);
console.log('objecteFetString -->', objecteFetString);

console.log('----- stringify() -----');

const objecteJsonString = JSON.stringify(objecteJson);
console.log('objecteJsonString typeof -->', typeof objecteJsonString);
console.log('objecteJsonString -->', objecteJsonString);

console.log('----- parse() -----');

const objecteJsonParse = JSON.parse(objecteJsonString);
console.log('objecteJsonParse typeof -->', typeof objecteJsonParse);
console.log('objecteJsonParse -->', objecteJsonParse);

