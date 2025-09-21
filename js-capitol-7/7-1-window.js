console.log('***** Carregant 7-1-window.js *****');

let finestra;
const obrirFinestra = () => {
  const url = 'https://www.lorem.cat';
  console.log('----- open() -----');
  finestra = window.open(url);
};

const tancarFinestra = () => {
  console.log('----- close() -----');
  finestra.close();
};

const estatFinestra = () => {
  if (!finestra) {
    console.log('No hi ha cap finestra nova oberta');
    return;
  }
  const estat = `${finestra.closed} --> La finestra nova està ${
    finestra.closed ? 'tancada' : 'oberta'
  }`;
  console.log(estat);
};

console.log('----- name -----');
window.name = 'Capitol 7';
console.log(window.name);

console.log('----- location -----');
console.log(window.location);
console.log('window.location.href -->', window.location.href);
console.log('window.location.hostname -->', window.location.hostname);
console.log('window.location.pathname -->', window.location.pathname);
console.log('window.location.protocol -->', window.location.protocol);
console.log('window.location.port -->', window.location.port);

console.log('----- navigator -----');
console.log(window.navigator);
console.log('window.navigator.appCodeName -->', window.navigator.appCodeName);
console.log('window.navigator.language -->', window.navigator.language);
console.log('window.navigator.userAgent -->', window.navigator.userAgent);
console.log('window.navigator.oscpu -->', window.navigator.oscpu);
console.log('window.navigator.onLine -->', window.navigator.onLine);

/* console.log('----- stop() -----');
window.stop(); */

function generarAlert() {
  console.log('----- alert() -----');
  const dadaAlert = 'Alerta!';
  alert(dadaAlert);
  console.log('dadaAlert -->', dadaAlert);
}

function generarPrompt() {
  console.log('----- prompt() -----');
  let dadaPrompt = prompt('Dada entrada amb un prompt?', 'Exactament!');
  console.log('dadaPrompt -->', dadaPrompt);
}

function generarConfirm() {
  console.log('----- confirm() -----');
  let dadaConfirm = confirm('Està segur del confirm?');
  console.log('dadaConfirm -->', dadaConfirm);
}

function imprimirDocument() {
  console.log('----- print() -----');
  window.print();
}

console.log('----- screen -----');
const screen = window.screen;
console.log(screen);

console.log('----- screenLeft -----');
const screenLeft = window.screenLeft;
console.log(screenLeft);

console.log('----- screenTop -----');
const screenTop = window.screenTop;
console.log(screenTop);

console.log('---- scrollX -----');
const scrollX = window.scrollX;
console.log(scrollX);

console.log('---- scrollY -----');
const scrollY = window.scrollY;
console.log(scrollY);

console.log('------ scroll() -----');
window.scroll(50, 0);
const scrollFinestraX = window.scrollX;
console.log('scrollFinestraX -->', scrollFinestraX);
const scrollFinestraY = window.scrollY;
console.log('scrollFinestraY -->', scrollFinestraY);


