console.log('***** Carregant 1-3-cofia-1.js ******');

console.log(`
Problema 1

3 nois de 23 anys perfectament normals entren a una geladeria a comprar un gelat però hi ha un problema: els preus no estan al costat de cada prestatge amb el gelat respectiu. Volen comprar el gelat més car que puguin amb els diners que tenen, de manera que veiem com podem ajudar-los.

Robert té 1.5€
Pere té 1.7€
Cofia té 3€
2. Si n'hi ha 2 o més amb el mateix preu, mostrar-

Els preus dels gelats són els següents:
- Bastonet de gelat d'aigua: 0.6€
2. Si n'hi ha 2 o més amb el mateix preu, mostrar-
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

  `);

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

  if (dinersRobert >= 0.6 && dinersRobobjectert < 1) {
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

console.log(`
Problema 2

Cofia dona 2.7€ a un que passava per allà. I aquest se'n va a comprar loteria. Cada bitllet costa 0.9€ 

- Si en té prou per comprar un número, el compra
- Si en té prou per comprar-ne dos, els compra
- Si en té prou per comprar-ne més, en compra dos i regala el que sobra

Determinar quants en compra i quant sobra
  `);

function calculCompraLoteria() {
  let costBitlletLoteria = 0.9,
    pressupostCofia = 2.7;

  let dinersCofia = Number(prompt('Quants diners té Cofia?', pressupostCofia));
  console.log('dinersCofia -->', dinersCofia);

  let numerodeBitllets = parseInt(dinersCofia / costBitlletLoteria);
  if (numerodeBitllets > 2) {
    numerodeBitllets = 2;
  }
  console.log('numerodeBitllets -->', numerodeBitllets);

  let canvi = Number(
    (dinersCofia - numerodeBitllets * costBitlletLoteria).toFixed(1)
  );
  console.log('canvi -->', canvi);

  if (
    dinersCofia / costBitlletLoteria >= 1 &&
    dinersCofia / costBitlletLoteria < 2
  ) {
    alert(
      'Cofia compra ' +
        numerodeBitllets +
        ' bitllets i el canvi que regala és de ' +
        canvi +
        '€'
    );
  } else if (
    dinersCofia / costBitlletLoteria >= 2 &&
    dinersCofia / costBitlletLoteria < 3
  ) {
    alert(
      'Cofia compra ' +
        numerodeBitllets +
        ' bitllets i el canvi que regala és de ' +
        canvi +
        '€'
    );
  } else {
    alert(
      'Cofia compra ' +
        numerodeBitllets +
        ' bitllets i el canvi que regala és de ' +
        canvi +
        '€'
    );
  }
}

console.log(`
Problema 3

Hi ha 3 sospitosos d'haver robat un gelat a Cofia és un d'ells per suposat. Crear un programa per fer la comprovació del detector de mentides.

- Preuntar si el sospitós o Cofia han de passar pel detector de mentides
- Si la resposta és 'Sí', demanar si ha robat el gelat al sospitós:
  - Si diu que 'Sí', mostrar 'El sospitós ha robat el gelat'
  - Si diu que 'No', mostrar 'El sospitós no ha robat el gelat'
  - Si diu qualsevol altra cosa,mostrar 'Repetir la pregunta al sospitós'

  `);

function detectordeMentides() {
  let preguntaSospitos1 = prompt(
    'El sospitós 1 ha de passar pel detector de mentides? S/N',
    'S'
  );
  let preguntaSospitos2 = prompt(
    'El sospitós 2 ha de passar pel detector de mentides? S/N',
    'S'
  );
  let preguntaCofia = prompt(
    'En Cofia ha de passar pel detector de mentides?S/N',
    'S'
  );

  if (preguntaSospitos1 == 'S') {
    let detectorMentidesSospitos1 = prompt(
      'El sospitós 1 reconeix que ha robat el gelat? S/N',
      'S'
    );
    if (detectorMentidesSospitos1 == 'S') {
      alert('El sospitós 1 ha robat el gelat');
    } else if (detectorMentidesSospitos1 == 'N') {
      alert('El sospitós 1 no ha robat el gelat');
    } else {
      alert('Repetir la pregunta al sospitós 1');
    }
  }

  if (preguntaSospitos2 == 'S') {
    let detectorMentidesSospitos2 = prompt(
      'El sospitós 2 reconeix que ha robat el gelat? S/N',
      'S'
    );
    if (detectorMentidesSospitos2 == 'S') {
      alert('El sospitós 2 ha robat el gelat');
    } else if (detectorMentidesSospitos2 == 'N') {
      alert('El sospitós 2 no ha robat el gelat');
    } else {
      alert('Repetir la pregunta al sospitós 2');
    }
  }

  if (preguntaCofia == 'S') {
    let detectorMentidesCofia = prompt(
      'En Cofia reconeix que ha robat el gelat? S/N',
      'S'
    );
    if (detectorMentidesCofia == 'S') {
      alert('En Cofia ha robat el gelat');
    } else if (detectorMentidesCofia == 'N') {
      alert('En Cofia no ha robat el gelat');
    } else {
      alert('Repetir la pregunta a en Cofia');
    }
  }
}
