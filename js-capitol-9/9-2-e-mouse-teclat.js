console.log('***** Carregant 9-2-esdeveniments-mouse.js *****');

console.log('----- click / dobleclik -----');

const botoClick = document.getElementById('botoClick');
botoClick.addEventListener('click', () => {
  console.count('Sha fet click');
});
const botoDobleClick = document.getElementById('botoDobleClick');
botoDobleClick.addEventListener('dblclick', () => {
  console.count('Sha fet doble click');
});

console.log('----- mouseover / mouseout -----');
const botoMouseOver = document.getElementById('botoMousOver');
botoMouseOver.addEventListener('mouseover', () => {
  console.count('Mouse passa per sobre boto \'Mouse over\'');
})

const botoMouseOut = document.getElementById('botoMouseOut');
botoMouseOut.addEventListener('mouseout', () => {
  console.count('Mouse surt de passar per sobre boto \'Mouse out\'');
})

const botoContxetMenu = document.getElementById('botoContxetMenu');
botoContxetMenu.addEventListener('contextmenu', () => {
  console.count('Click botó dret');
})

const inputEteclat = document.getElementById('input-e-teclat');

inputEteclat.addEventListener('keydown', () => {
  console.count('Tecla kydown');
})

inputEteclat.addEventListener('keypress', () => {
  console.count('Tecla keypress');
})

inputEteclat.addEventListener('keyup', () => {
  console.count('Tecla keyup');
})










