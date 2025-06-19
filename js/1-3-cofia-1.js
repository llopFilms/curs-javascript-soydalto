console.log('***** Carregant 1-3-cofia-1.js ******');

console.log(
  `
3 nois de 23 anys perfectament normals entren a una geladeria a comprar un gelat però hi ha un problema: els preus no estan al costat de cada prestatge amb el gelat respectiu. Volen comprar el gelat més car que puguin amb els diners que tenen, de manera que veiem com podem ajudar-los.

Robert té 1.5€
Pere té 1.7€
Cofia té 3€

Els preus dels gelats són els següents:
- Bastonet de gelat d'aigua: 0.6€
- Bastonet de gelat de crema: 1€
- Bombó gelat marca Heladix: 1.6€
- Bombó gelat marca Heladovich: 1.7€
- Bombó gelat marca Helardo: 1.8€
- Potet de gelat amb confits: 2.9€
- Pot de 1/4 de kg: 2.9€

CREAR SOLUCIONS:

1. Demanar que mostrin la quantitat que tenen i mostrar-los el gelat més car que pugui comprar cadascú.
2. Si n'hi ha 2 o més amb el mateix preu, mostrar-los.
3. En Cofia vol saber quant és el canvi.

  `
);

function definirGelat() {
  let dinersRobert = Number(prompt('Quants diners tens, Robert?', 1.5));
  let dinersPere = Number(prompt('Quants diners tens, Pere?', 1.7));
  let dinerCofia = Number(prompt('Quants diners tens, Cofia?', 3));

  console.log('Diners de Robert -->', dinersRobert);
  console.log('Diners de Pere -->', dinersPere);
  console.log('Diners de Cofia -->', dinerCofia);

  let missatgeGelatAigua = " pot comprar el gelat d'aigua";
  let missatgeGelatCrema = ' pot comprar el gelat de crema';
  let missatgeHeladix = ' pot comprar el Heladix';
  let missatgeHeladovich = ' pot comprar el Heladovich';
  let missatgeHelardo = ' pot comprar el Helardo';
  let missatgePotetConfitsOQuartKg =
    ' pot comprar el potet de gelat amb confits o el pot de 1/4 de kg';
  let misstgeNoPressupost = ", no t'arriba per comprar cap gelat";

  let respostaRobert = '';
  let respostaPere = '';
  let respostaCofia = '';

  if (dinersRobert >= 0.6 && dinersRobert < 1) {
    respostaRobert = 'Robert' + missatgeGelatAigua;
    respostaRobert += ' i el canvi es de ' + (dinersRobert - 0.6) + '€';
  } else if (dinersRobert >= 1 && dinersRobert < 1.7) {
    respostaRobert = 'Robert' + missatgeGelatCrema;
    respostaRobert += ' i el canvi es de ' + (dinersRobert - 1) + '€';
  } else if (dinersRobert >= 1.6 && dinersRobert < 1.8) {
    respostaRobert = 'Robert' + missatgeHeladix;
    respostaRobert += ' i el canvi es de ' + (dinersRobert - 1.6) + '€';
  } else if (dinersRobert >= 1.7 && dinersRobert < 1.9) {
    respostaRobert = 'Robert' + missatgeHeladovich;
    respostaRobert += ' i el canvi es de ' + (dinersRobert - 1.7) + '€';
  } else if (dinersRobert >= 1.8 && dinersRobert < 2.9) {
    respostaRobert = 'Robert' + missatgeHelardo;
    respostaRobert += ' i el canvi es de ' + (dinersRobert - 1.8) + '€';
  } else if (dinersRobert >= 2.9) {
    respostaRobert = 'Robert' + missatgePotetConfitsOQuartKg;
    respostaRobert += ' i el canvi es de ' + (dinersRobert - 2.9) + '€';
  } else {
    respostaRobert = 'Robert' + misstgeNoPressupost;
  }

  if (dinersPere >= 0.6 && dinersPere < 1) {
    respostaPere = 'Pere' + missatgeGelatAigua;
  } else if (dinersPere >= 1 && dinersPere < 1.7) {
    respostaPere = 'Pere' + missatgeGelatCrema;
  } else if (dinersPere >= 1.6 && dinersPere < 1.8) {
    respostaPere = 'Pere' + missatgeHeladix;
  } else if (dinersPere >= 1.7 && dinersPere < 1.9) {
    respostaPere = 'Pere' + missatgeHeladovich;
  } else if (dinersPere >= 1.8 && dinersPere < 2.9) {
    respostaPere = 'Pere' + missatgeHelardo;
  } else if (dinersPere >= 2.9) {
    respostaPere = 'Pere' + missatgePotetConfitsOQuartKg;
  } else {
    respostaPere = 'Pere' + misstgeNoPressupost;
  }

  if (dinerCofia >= 0.6 && dinerCofia < 1) {
    respostaCofia = 'Cofia' + missatgeGelatAigua;
  } else if (dinerCofia >= 1 && dinerCofia < 1.7) {
    respostaCofia = 'Cofia' + missatgeGelatCrema;
  } else if (dinerCofia >= 1.6 && dinerCofia < 1.8) {
    respostaCofia = 'Cofia' + missatgeHeladix;
  } else if (dinerCofia >= 1.7 && dinerCofia < 1.9) {
    respostaCofia = 'Cofia' + missatgeHeladovich;
  } else if (dinerCofia >= 1.8 && dinerCofia < 2.9) {
    respostaCofia = 'Cofia' + missatgeHelardo;
  } else if (dinerCofia >= 2.9) {
    respostaCofia = 'Cofia' + missatgePotetConfitsOQuartKg;
  } else {
    respostaCofia = 'Cofia' + misstgeNoPressupost;
  }

  alert(respostaRobert);
  alert(respostaPere);
  alert(respostaCofia);
}
