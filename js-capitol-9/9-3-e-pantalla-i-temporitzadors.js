console.log('***** Carregant 9-2-e-pantalles-i-temporitzadors.js *****');

const imatge = document.getElementById('imatge');
imatge.addEventListener('error', () => {
  console.log('---- error -----');
  console.log('Ha succeït un error carregant imatge o video');
});

window.addEventListener('load', () => {
  console.log('----- load -----');
  console.log('Ha carregat la pàgina');
});

window.addEventListener('beforeunload', () => {
  console.log('----- beforeunload -----');
  console.log('Abans de sortir de la pàgina');
});

window.addEventListener('unload', () => {
  console.log('----- unload -----');
  console.log('Has sortit de la pàgina');
});

window.addEventListener('resize', () => {
  console.log('----- resize -----');
  const amplada = window.innerWidth;
  console.log('Has redimensionat la finestra a', amplada, 'píxels');
});

window.addEventListener('scroll', () => {
  console.log('----- scroll -----');
  const scrollY = Math.round(window.scrollY);
  console.log('Has fet', scrollY, 'píxels de desplaçament vertical');
});

const inputESelect = document.getElementById('input-e-select');
inputESelect.addEventListener('select', (e) => {
  const input = e.target;
  const textInici = input.selectionStart;
  const textFinal = input.selectionEnd;
  const textSeleccionat = input.value.slice(textInici, textFinal);

  console.log('----- select -----');
  console.log(`Has seleccionat text al input, que és --> '${textSeleccionat}'`);
  const textSeleccionatSpan = document.getElementById('textSeleccionat');
  textSeleccionatSpan.innerText = textSeleccionat;
});

document.addEventListener('selectionchange', () => {
  const textSeleccionat = window.getSelection().toString();
  console.log(textSeleccionat);
  console.log('----- selectionchange -----');
  console.log('Has seleccionat text al document');
});

const temporitzador = setTimeout(() => {
  console.log('----- setTimeout -----');
  console.log('S\'ha executat el temporitzador');
}, 1000);

setTimeout(() => {
  console.log('----- clearTimeout -----');
  console.log('Has cancelat el temporitzador');
  clearTimeout(temporitzador);
}, 2000);

const interval = setInterval(() => {
  console.log('----- setInterval -----');
  console.count('S\'ha executat l\'interval');
}, 1000);

setTimeout(() => {
  console.log('----- clearInterval -----');
  console.log('Has cancelat l\'interval');
  clearInterval(interval);
}, 3100);


