console.log('***** Carregant 4-3-objecte-math.js *****');

console.log('----- sqrt() -----');

const num1 = 25;
console.log("num1 -->", num1);
const sqrtnum1 = Math.sqrt(num1);
console.log("sqrtnum1 -->", sqrtnum1);

const num2 = 100;
console.log("num2 -->", num2);
const sqrtnum2 = Math.sqrt(num2);
console.log("sqrtnum2 -->", sqrtnum2);

console.log('----- cbrt() -----');

const num3 = 8;
console.log("num3 -->", num3);
const cbrtnum3 = Math.cbrt(num3);
console.log("cbrtnum3 -->", cbrtnum3);

console.log('----- pow() -----');

const num4 = 6;
console.log("num3 -->", num4);
const pow2num4 = Math.pow(num4, 2);
console.log("pow2num4 -->", pow2num4);
const pow3num4 = Math.pow(num4, 3);
console.log("pow3num3 -->", pow3num4);

console.log('----- max() -----');

const numeros = [1, 2, 3, 4, 5, 6, 7];
console.log("numeros -->", numeros);

const numMax = Math.max(...numeros);
console.log("numMax -->", numMax);

const numA = 1;
console.log("numA -->", numA);
const numB = 2;
console.log("numB -->", numB);

const numMaxAoB = Math.max(numA, numB);
console.log("numMaxAoB -->", numMaxAoB);

console.log('----- min() -----');

const numMin = Math.min(...numeros);
console.log("numMin -->", numMin);

const numMinAoB = Math.min(numA, numB);
console.log("numMinAoB -->", numMinAoB);

console.log('----- random() -----');

const numRandom = Math.random();
console.log("numRandom -->", numRandom);

console.log('----- round() -----');

const numRandom2 = Math.random();
console.log("numRandom2 -->", numRandom2);
const numRandom2Round = Math.round(numRandom2);
console.log("numRandom2Round -->", numRandom2Round);

const num0a99 = Math.round(Math.random() * 100);
console.log("num0a99 -->", num0a99);

const num1a100 = Math.round(Math.random() * 100) + 1; 
console.log("num1a100 -->", num1a100);

console.log('----- trunc() -----');

const numRandom5 = Math.random()*10;
console.log("numRandom5 -->", numRandom5);
const numRandom5Trunc = Math.trunc(numRandom5);
console.log("numRandom5Trunc -->", numRandom5Trunc);

console.log('----- floor() -----');

const numRandom3 = Math.random()*10;
console.log("numRandom3 -->", numRandom3);
const numRandom3Floor = Math.floor(numRandom3);
console.log("numRandom3Floor -->", numRandom3Floor);

const num1a100Floor = Math.floor(Math.random() * 100) + 1; 
console.log("num1a100Floor -->", num1a100Floor);

console.log('----- ceil() -----');

const numRandom4 = Math.random()*10;
console.log("numRandom4 -->", numRandom4);
const numRandom4Ceil = Math.ceil(numRandom4);
console.log("numRandom4Ceil -->", numRandom4Ceil);

const num1a100Ceil = Math.ceil(Math.random() * 100); 
console.log("num1a100Ceil -->", num1a100Ceil);
