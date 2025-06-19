console.log("***** Carregant 1-4-cofia-1-refactor.js ******");

const definirGelat = (nom, pressuspostInicial) => {

  let pressupost = +(prompt(`Quants diners teu pressupost, ${nom}?`,pressuspostInicial));
  if (pressupost >= 0.6 && pressupost <= 1) return (`${nom}: compra't un gelat d'aigua`);
  if (pressupost >= 1 && pressupost <= 1.7) return (`${nom}: compra't un gelat de crema`);
  if (pressupost >= 1.6 && pressupost <= 1.8) return (`${nom}: compra't un bombó de gelat de Heladix`);
  if (pressupost >= 1.7 && pressupost <= 1.9) return (`${nom}: compra't un bombó de gelat de Heladovich`);
  if (pressupost >= 1.8 && pressupost <= 2) return (`${nom}: compra't un bombó de gelat de Helardo`);
  if (pressupost >= 2.9 && pressupost <= 3.1) return (`${nom}: compra't un potet de gelat amb confits o compra't un pot de 1/4 de kg`);
}

alert(definirGelat('Robert',1.5));
alert(definirGelat('Pere',1.7));
alert(definirGelat('Cofia',3));
