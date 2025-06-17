console.log('Arxiu codi.js. Codi principal');

let string = 'cadena de text';
let numero = 10;
let booleaCert = true;
let booleaFalse = false;

let numero1 = 10,
  numero2 = 5,
  numero3 = 3;

let resultat = numero1 % numero2;
let resultat2 = -numero1;

console.log("resultat -->", resultat);
console.log("resultat2 -->", resultat2);

let frase = "" + numero1 + numero2;
console.log("frase -->", frase, typeof frase);

let salutacio = "Hola. ";
let salutacio2 = 'Muy buenas. ';
let salutacio3 = `Bona tarda a tothom`;

let salutacioConca = salutacio + salutacio2 + salutacio3;
console.log("salutacioConca -->", salutacioConca);

let salutacioInterpol = `Bona tarda a tothom ${salutacio}`;
console.log("salutacioInterpol -->", salutacioInterpol);

let prova = 1;
console.log("prova -->", prova);
