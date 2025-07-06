console.log('***** Carregant 7-2-cofla-7.js *****');

console.log(`
  
Problema 1

En Cofla ja ha aprovat el primer curs i ha decidit comprar-se un ordinador nou. Però necessita una reseolució HD.

- Conprovar que ho és.
- Just abans de comprar preguntar-li si n'està segur.

`);

function compraOrdinador() {
  let alssada = window.screen.height;
  let ample = window.screen.width;

  let confirmaCompra = confirm(`Estàs segur de comprar l\'ordinador?
  Tingues en compte:
  - Alçada: ${alssada}
  - Ample: ${ample}`);

  let missatgeAlert = confirmaCompra ? 'Comprar l\'ordinador, doncs. Molt bé!' : 'No comprar l\'ordinador, no té la mida suficient per HD.';
  alert(missatgeAlert);
}

console.log(`
  
Problema 2

Després a casa, en Cofla obre un web al navegador i posa pantalla completa amb F11. Vol saber les dades del lloc web a on ha accedit.

Mostrar:
  - Nom del lloc web
  - Protocol
  - Domini
  - Port

`);

function mostrarLlocWeb() {
  let llocWeb = window.location;
  console.log(`
  
  href del lloc web: ${llocWeb.href}
  - Protocol: ${llocWeb.protocol}
  - Hostname: ${llocWeb.hostname}
  - Port: ${llocWeb.port}
  - Pathname: ${llocWeb.pathname}
  `);
}


