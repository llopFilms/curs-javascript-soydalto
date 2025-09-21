console.log('****** Carregant 2-3-funcions.js ******');

console.log('----- Declaració i crida de funcions -----');
function saludar() {
  let resposta = 'bo';
  if (resposta == 'bo') {
    console.log("Funció saludar diu: M'alegro el teu dia sigui " + resposta);
  } else
    console.log('Funció saludar diu: El teu dia no és bo sinó ' + resposta);
}
saludar();

console.log('------ Funció amb return -----');
function obtenirDataCatalana() {
  let avui = new Date();
  const opcions = {
    weekday: 'long', // dia de la setmana complet (dilluns, dimarts...)
    year: 'numeric', // any (2025)
    month: 'long', // mes complet (juny)
    day: 'numeric', // dia del mes (20)
  };

  let dataCatalana = avui.toLocaleDateString('ca-ES', opcions);
  return dataCatalana;
}
console.log('Avui és ' + obtenirDataCatalana());

console.log('------ Funció amb paràmetres -----');

function suma(num1, num2) {
  console.log('La suma de ' + num1 + ' i ' + num2 + ' és ' + (num1 + num2));
}
suma(3, 4);
suma(33, 22);

console.log('----- Funcions fletxa -----');

const calculDeMitjana = (valor1, valor2, valor3) => {
  return (valor1 + valor2 + valor3) / 3;
};

console.log('La mitjana de 10, 22 i 37 es ' + calculDeMitjana(10, 22, 37));
