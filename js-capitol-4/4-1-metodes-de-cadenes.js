console.log(`***** Carregant 4-1-metodes-de-cadenes.js *****`);

const cadena = 'cadena de prova.';
console.log('cadena -->', cadena);

const cadena2 = 'o';
console.log('cadena2 -->', cadena2);

console.log('------ concat() ------');

const cadenaConcat = cadena.concat(' Per fer proves.');
console.log('cadenaConcat -->', cadenaConcat);

const cadenaConcat2 = cadena.concat(' per fer ', 'encara ', 'més ', 'proves.');
console.log('cadenaConcat2 -->', cadenaConcat2);

const hola = 'Hola, ';
const cadenaConcat3 = hola.concat(cadena);
console.log('cadenaConcat3 -->', cadenaConcat3);

console.log('------ startsWith() ------');

const cadenaStartsWith = cadena.startsWith('cadena');
console.log("cadenaStartsWith 'cadena'? -->", cadenaStartsWith);

const comprovacio = 'Cadena';
const cadenaStartsWith2 = cadena.startsWith(comprovacio);
console.log("cadenaStartsWith2 'Cadena'? -->", cadenaStartsWith2);

console.log('----- endsWith() -----');

const cadenaEndsWith = cadena.endsWith('prova.');
console.log("cadenaEndsWith '.'? -->", cadenaEndsWith);

const cadenaEndsWith2 = cadena.endsWith('prova');
console.log("cadenaEndsWith2 'prova'? -->", cadenaEndsWith2);

console.log('----- includes() -----');

const cadenaIncludes = cadena.includes('de');
console.log("cadenaIncludes 'de'? -->", cadenaIncludes);

const cadenaIncludes2 = cadena.includes('provas');
console.log("cadenaIncludes2 'provas'? -->", cadenaIncludes2);

console.log('----- indexOf() -----');

const cadenaIndexOf = cadena.indexOf('de');
console.log("cadenaIndexOf 'de'? -->", cadenaIndexOf);

const cadenaIndexOf2 = cadena.indexOf('provas');
console.log("cadenaIndexOf2 'provas'? -->", cadenaIndexOf2);

console.log('----- lastIndexOf() -----');

const cadenaLastIndexOf = cadena.lastIndexOf('de');
console.log("cadenaLastIndexOf 'de'? -->", cadenaLastIndexOf);

const cadenaLastIndexOf2 = cadena.lastIndexOf('provas');
console.log("cadenaLastIndexOf2 'provas'? -->", cadenaLastIndexOf2);

console.log('----- charAt() -----');

const cadenaCharAt = cadena.charAt(0);
console.log('cadenaCharAt -->', cadenaCharAt);

const cadenaCharAt2 = cadena.charAt(3);
console.log('cadenaCharAt2 -->', cadenaCharAt2);

const cadenaCharAtUltima = cadena.charAt(cadena.length - 1);
console.log('cadenaCharAtUltima -->', cadenaCharAtUltima);

const cadenaChartAtPenultima = cadena.charAt(cadena.length - 2);
console.log('cadenaChartAtPenultima -->', cadenaChartAtPenultima);

console.log('----- padStart() -----');

const cadenaPadStart = cadena2.padStart(3, 'ho');
console.log('cadenaPadStart -->', cadenaPadStart);

console.log('----- padEnd() -----');

const cadenaPadEnd = cadena2.padEnd(3, 'h!');
console.log('cadenaPadEnd -->', cadenaPadEnd);

console.log('----- repeat() -----');

const cadenaRepeat = cadena2.repeat(3);
console.log('cadenaRepeat -->', cadenaRepeat);

const cadenaRepeat2 = cadena2.repeat(3) + 'h!';
console.log('cadenaRepeat2 -->', cadenaRepeat2);

console.log('----- split() -----');

const cadenaSplitEspais = cadena.split(' ');
console.log('cadenaSplitEspais -->', cadenaSplitEspais);

const cadenaSplitLletres = cadena.split('');
console.log('cadenaSplit -->', cadenaSplitLletres);

const cadenaSplitA = cadena.split('a');
console.log('cadenaSplitA -->', cadenaSplitA);

const cadenaSplit2 = cadena.split(' ', 2);
console.log('cadenaSplit2 -->', cadenaSplit2);

console.log('----- join() -----');

const cadenaJoin = ["Cadena","de","prova."];
const cadenaJoin2 = cadenaJoin.join('-');
console.log('cadenaJoin2 -->', cadenaJoin2);

console.log('----- substring() -----');

const cadenaSubstringIniciFinal = cadena.substring(0, 6);
console.log('cadenaSubstringIniciFinal -->', cadenaSubstringIniciFinal);

const cadenaSubstringFinsFinal = cadena.substring(7);
console.log('cadenaSubstringFinsFinal -->', cadenaSubstringFinsFinal);

const cadenaSubstringConcat = cadena.substring(0, 6).concat('!!');
console.log('cadenaSubstringConcat -->', cadenaSubstringConcat);

console.log('----- toLowerCase() -----');

const cadenaLowerCase = cadena.toLowerCase();
console.log('cadenaLowerCase -->', cadenaLowerCase);

console.log('----- toUpperCase() -----');

const cadenaUpperCase = cadena.toUpperCase();
console.log('cadenaUpperCase -->', cadenaUpperCase);

console.log('----- capitalize() -----');

const cadenaCapitalize = cadena.charAt(0).toUpperCase() + cadena.slice(1);
console.log('cadenaCapitalize -->', cadenaCapitalize);

console.log('----- toString() -----');

const num = 250;
console.log("num -->",num,typeof num);

const numToString = num.toString();
console.log('numToString -->', numToString, typeof numToString);

const numToString2 = String(num);
console.log('numToString2 -->', numToString2, typeof numToString2);

const stringToNum = Number(numToString2);
console.log('stringToNum -->', stringToNum, typeof stringToNum);

const stringToNum2 = +numToString;
console.log('stringToNum2 -->', stringToNum2, typeof stringToNum2);

console.log('----- trim() -----');

const cadenaTrimPerFer = '    cadena de prova    ';
console.log('cadenaTrimPerFer -->', '|'+cadenaTrimPerFer+'|');

const cadenaTrimFet = cadenaTrimPerFer.trim();
console.log('cadenaTrimFet -->', '|' + cadenaTrimFet + '|');

console.log('------ trimStart() ------');

const cadenaTrimStartPerFer = '    cadena de prova    ';
console.log('cadenaTrimStartPerFer -->', '|'+cadenaTrimStartPerFer+'|');

const cadenaTrimStartFet = cadenaTrimStartPerFer.trimStart();
console.log('cadenaTrimStartFet -->', '|' + cadenaTrimStartFet + '|');

console.log('----- trimEnd() -----');

const cadenaTrimEndPerFer = '    cadena de prova    ';
console.log('cadenaTrimEndPerFer -->', '|' + cadenaTrimEndPerFer + '|');

const cadenaTrimEndFet = cadenaTrimEndPerFer.trimEnd();
console.log('cadenaTrimEndFet -->', '|' + cadenaTrimEndFet + '|');

