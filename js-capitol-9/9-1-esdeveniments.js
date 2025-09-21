console.log('***** Carregant 9-1.js *****');

function saludar() {
  console.log('----- Event handler -----');
  console.log('Hola bon dia');
}

const botoAcomiadar = document.getElementById('acomiadar');
botoAcomiadar.onclick = function acomiadar() {
  console.log('----- Event handler -----');
  console.log('Adéu bona tarda');
}; 

const botoComentar = document.getElementById('comentar');
const comentar = () => {
  console.log('----- addEventListener -----');
  console.log("Comentar que és l'hora de berenar");
  botoComentar.removeEventListener('click', comentar);
  console.log('Ja no es pot clicar més...');
};

botoComentar.addEventListener('click', comentar);
console.log('----- removeEventListener -----');

console.log('----- Objecte Event -----');
const objecteEvent = document.getElementById('objecteEvent');
objecteEvent.addEventListener('click', (e) => {
  console.log('----- objecte Event -----');
  console.log('Esdeveniment e -->', e);
  console.log('Target de e -->', e.target);
  console.log('Type de e -->', e.type);
});

const capturar = document.getElementById('capturar');
capturar.style.cursor = 'pointer';
console.log(capturar);
capturar.addEventListener('click', (e) => {
  console.log('Esdeveniment e -->', e);
  console.log('Target de e -->', e.target);
  console.log('Type de e -->', e.type);
  const valorCapturat = e.target.innerText;
  console.log('Valor capturat -->', valorCapturat);
});


const contenidorBubbling = document.getElementById(
  'contenidorBubbling'
);
contenidorBubbling.addEventListener('click', (e) => {
  console.log('----- Event bubbling --> contenidor clicat -----');
  console.log('Target de e -->', e.target);
  console.log('Type de e -->', e.type);
});
const botoContenidorBubbling = document.getElementById(
  'botoContenidorBubbling'
);
botoContenidorBubbling.addEventListener('click', (e) => {
  console.log(objecteEvent);
  console.log('----- Event bubbling --> botó clicat -----');
  console.log('Target de e -->', e.target);
  console.log('Type de e -->', e.type);
});

const contenidorCapturing = document.getElementById('contenidorCapturing');
contenidorCapturing.addEventListener('click', (e) => {
  console.log('----- Event capturing --> contenidor clicat -----');
  console.log('Target de e -->', e.target);
  console.log('Type de e -->', e.type);
}, true);
const botoContenidorCapturing = document.getElementById('botoContenidorCapturing');
botoContenidorCapturing.addEventListener('click', (e) => {
  console.log('----- Event capturing --> botó clicat -----');
  console.log('Target de e -->', e.target);
  console.log('Type de e -->', e.type);
}, true);

const contenidorStopPropagacio = document.getElementById(
  'contenidorStopPropagation'
);
contenidorStopPropagacio.addEventListener('click', (e) => {
  console.log('----- Event stopPropagacio --> contenidor clicat -----');
  console.log('Target de e -->', e.target);
  console.log('Type de e -->', e.type);
});
const botoContenidorStopPropagacio = document.getElementById(
  'botoContenidorStopPropagation'
);
botoContenidorStopPropagacio.addEventListener('click', (e) => {
  console.log('----- Event stopPropagacio --> botó clicat -----');
  console.log('Target de e -->', e.target);
  console.log('Type de e -->', e.type);
  e.stopPropagation();
});





