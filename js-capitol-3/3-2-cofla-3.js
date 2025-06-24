console.log('***** Carregant 3-2-cofla-3.js *****');

console.log(`
Problema 1

En Cofla entra a una botiga de telèfons mòbils. Li criden l'atenció 3 models ens concret. El botiguer no el sap ajudar i hem de crear una comparativa dels 3 telèfons

- Crear un sistema que mostri les particularitats de cada telèfon.
- Cada telèfon té: color, pes, resolució de pantalla, resolució de càmara i memòria ram.
- Cada telèfon ha de poder: encendre, reiniciar, fer fotos i grava so.
`);

const telefons = [];

class Telefon {
  static #numTel = 1;

  constructor(color, pes, resPantalla, resCamara, memRam) {
    this.id = Telefon.#numTel++;
    this.color = color;
    this.pes = pes;
    this.resPantalla = resPantalla;
    this.resCamara = resCamara;
    this.memRam = memRam;
    this.ences = false;
    this.foto = 0;
    this.gravacio = 0;
  }

  getID() {
    return this.id;
  }

  static getSeguentID() {
    return Telefon.#numTel;
  }

  encendre() {
    if (this.ences === false) {
      this.ences = true;
      console.log(`Telèfon ${this.getID()} engegat i funcionant.`);
    } else {
      console.log(`Telèfon ${this.getID()} ja estava engegat.`);
    }
  }

  apagar() {
    if (this.ences === true) {
      this.ences = false;
      console.log(`Telèfon ${this.getID()} apagat.`);
    } else {
      console.log(`Telèfon ${this.getID()} ja estava apagat.`);
    }
  }

  reiniciar() {
    if (this.ences === true) {
      console.log(`Telèfon ${this.getID()} reiniciat.`);
    } else {
      console.log(`Telèfon ${this.getID()} està apagat.`);
    }
  }

  ferFoto() {
    if (this.ences === true) {
      console.log(
        `Telèfon ${this.getID()} ha fet la foto número ${
          this.foto
        } amb una resolució de ${this.resCamara}.`
      );
      this.foto++;
    } else {
      console.log(`Telèfon ${this.getID()} està apagat.`);
    }
  }

  gravarVideo() {
    if (this.ences === true) {
      console.log(
        `Telèfon ${this.getID()} ha fet el vídeo número ${
          this.gravacio
        } amb una resolució de ${this.resPantalla}.`
      );
      this.gravacio++;
    } else {
      console.log(`Telèfon ${this.getID()} està apagat.`);
    }
  }

  mostrarDetalls() {
    console.log(`Detalls del telèfon ${this.getID()}:
Color: ${this.color}
Pes: ${this.pes} grams
Resolució de pantalla: ${this.resPantalla}
Resolució de càmara: ${this.resCamara}
Memòria RAM: ${this.memRam} GB
`);
  }

  estatTelefon() {
    if (this.ences === true) {
      console.log(`Telèfon ${this.getID()} està engegat.
S'han fet ${this.foto} fotos.  
S'han fet ${this.gravacio} gravacions.
`);
    } else {
      console.log(`Telèfon ${this.getID()} està apagat.`);
    }
  }
}

const estatTelefons = () => {
  for (const telefon of telefons) {
    if (telefon !== undefined && telefon !== null) {
      telefon.estatTelefon();
    }
  }
};

let recompteFotos = 0;
let recompteVideos = 0;
let recompteTotal = 0;

const recompteMedia = () => {
  for (const telefon of telefons) {
    if (telefon !== undefined && telefon !== null) {
      recompteFotos += telefon.foto;
      recompteVideos += telefon.gravacio;
      recompteTotal += telefon.foto + telefon.gravacio;
    }
  }
  console.log(`Recompte de fotos: ${recompteFotos}
Recompte de videos: ${recompteVideos}
Recompte total: ${recompteTotal}`);
};

function crearTelefons() {
  const telefon1 = new Telefon('negre', 200, 'HD', 'HD', 8);
  telefons[0] = telefon1;
  const telefon2 = new Telefon('blanc', 250, 'FHD', 'FHD', 16);
  telefons[1] = telefon2;
  const telefon3 = new Telefon('gris', 300, '4K', '4K', 32);
  telefons[2] = telefon3;
  console.table(telefons);

  console.log('--- Descripció dels Telèfons ---');
  telefon1.mostrarDetalls();
  telefon2.mostrarDetalls();
  telefon3.mostrarDetalls();

  console.log('--- Estat telèfons inicials ---');
  estatTelefons();
  console.log('--- Recompte de fotos i videos inicials ---');
  recompteMedia();

  console.log('--- Accions amb el Telèfon 1 ---');
  telefon1.encendre();
  telefon1.ferFoto();
  telefon1.ferFoto();
  telefon1.gravarVideo();
  telefon1.reiniciar();
  telefon1.apagar();
  telefon1.ferFoto();

  console.log('--- Accions amb el Telèfon 2 ---');
  telefon2.encendre();
  telefon2.gravarVideo();
  telefon2.gravarVideo();
  telefon2.gravarVideo();
  telefon2.ferFoto();

  console.log('--- Accions amb el Telèfon 3 ---');
  telefon3.encendre();
  telefon3.gravarVideo();
  telefon3.ferFoto();
  telefon3.ferFoto();
  telefon3.ferFoto();

  console.log('--- Estat del telèfons final ---');
  estatTelefons();
  console.log('--- Recompte de fotos i videos final ---');
  recompteMedia();

  console.log("--- Comprovant l'ID del següent telèfon ---");
  console.log(`El proper ID que s'assignaria seria: ${Telefon.getSeguentID()}`);

  console.table(telefons);
}

console.log(`
  
Problema 2

En Cofla no està satisfet amb els telèfon normals i vol mirar ara els telèfons d'alta gamma, que tenen característiques extra. De manera, que ha parat atenció ens 2 telèfons més d'alta gamma.

- Hem de crear una comparativa dels 2 telèfons d'alta gamma.
- Amb les següents caracterísituqes extra:
  - Fer vídeo a càmera lenta
  - Reconeicement facial
  - Càmera extra

  `);

class TelefonAltaGamma extends Telefon {
  constructor(color, pes, resPantalla, resCamara, memRam, resCamExtra) {
    super(color, pes, resPantalla, resCamara, memRam);
    this.resCamExtra = resCamExtra;
  }

  mostrarDetalls() {
    super.mostrarDetalls();
    console.log(`Detalls Alta Gamma telèfon ${this.getID()}:
Resolució càmera extra: ${this.resCamExtra}
`);
  }

  activarCamLenta() {
    if (this.ences === true) {
      console.log(`Telèfon ${this.getID()} activat la càmera lenta.`);
    } else {
      console.log(`Telèfon ${this.getID()} no està encès.`);
    }
  }

  desactivarCamLenta() {
    if (this.ences === true) {
      console.log(`Telèfon ${this.getID()} desactivat la càmera lenta.`);
    } else {
      console.log(`Telèfon ${this.getID()} no està encès.`);
    }
  }

  activarRecFacial() {
    if (this.ences === true) {
      console.log(`Telèfon ${this.getID()} activat el reconeixement facial.`);
    } else {
      console.log(`Telèfon ${this.getID()} no està encès.`);
    }
  }

  desactivarRecFacial() {
    if (this.ences === true) {
      console.log(
        `Telèfon ${this.getID()} desactivat el reconeixement facial.`
      );
    } else {
      console.log(`Telèfon ${this.getID()} no està encès.`);
    }
  }
}

function crearTelefonsGammaAlta() {
  const telefon1AltaGamma1 = new TelefonAltaGamma(
    'negre',
    200,
    '1080p',
    '4k',
    8,
    'hd'
  );
  telefons[3] = telefon1AltaGamma1;
  const telefon2AltaGamma2 = new TelefonAltaGamma(
    'blau',
    150,
    '720p',
    '1080p',
    4,
    'full hd'
  );
  telefons[4] = telefon2AltaGamma2;

  console.table(telefons);

  console.log('--- Descripció dels Telèfons de Gamma Alta---');
  telefon1AltaGamma1.mostrarDetalls();
  telefon2AltaGamma2.mostrarDetalls();

  console.log('\n--- Accions amb el Telèfon de Gamma Alta 1 ---');
  telefon1AltaGamma1.encendre();
  telefon1AltaGamma1.activarCamLenta();
  telefon1AltaGamma1.gravarVideo();
  telefon1AltaGamma1.ferFoto();
  telefon1AltaGamma1.activarRecFacial();
  telefon1AltaGamma1.desactivarCamLenta();
  telefon1AltaGamma1.apagar();
  telefon1AltaGamma1.activarCamLenta();

  console.log('\n--- Accions amb el Telèfon de Gamma Alta 2 ---');
  telefon2AltaGamma2.encendre();
  telefon2AltaGamma2.desactivarRecFacial();
  telefon2AltaGamma2.ferFoto();
  telefon2AltaGamma2.ferFoto();
  telefon2AltaGamma2.gravarVideo();
  telefon2AltaGamma2.activarCamLenta();
  telefon2AltaGamma2.reiniciar();

  console.log('\n--- Estat final dels telèfons de Gamma Alta ---');
  estatTelefons();

  console.log(
    '--- Recompte de fotos i videos final (incloent-hi els de Gamma Alta) ---'
  );
  recompteMedia();

  console.log("--- Comprovant l'ID del següent telèfon d'alta gamma---");
  console.log(`El proper ID que s'assignaria seria: ${Telefon.getSeguentID()}`);

  console.table(telefons);
}

console.log(`
  
Problema 3

En Cofla ara vol baixar aplicacions al seu telèfon nou. Té pre-seleccionades 7 aplicacions, però només en vol instal·lar 2.

- Crear un sistema que ajudi a en Cofla a seleccionar 2 jocs.
- Les informacions dels jocs han de tenir: nom, quantitat de descàrregues i puntuació.
- Els jocs s'han de poder instal·lar, desinstal·lar, iniciar i tancar.
  `);

class Joc {
  static #numApp = 1;

  constructor(nom, descarregues, puntuacio, pes) {
    this.id = Joc.#numApp++;
    this.nom = nom;
    this.descarregues = descarregues;
    this.puntuacio = puntuacio;
    this.pes = pes;
    this.installat = false;
    this.iniciat = false;
  }

  getID() {
    return this.id;
  }

  static getSeguentID() {
    return Joc.#numApp;
  }

  installar() {
    if (this.installat === false) {
      this.installat = true;
      console.log(`El joc ${this.nom} s'ha instal·lat correctament`);
    } else console.log(`El joc ${this.nom} ja s'està instal·lat`);
  }

  desinstallar() {
    if (this.installat === true) {
      this.installat = false;
      console.log(`El joc ${this.nom} s'ha desinstal·lat correctament`);
    } else console.log(`El joc ${this.nom} ja s'està desinstal·lat`);
  }

  iniciar() {
    if (this.iniciat === false && this.installat === true) {
      this.iniciat = true;
      console.log(`El joc ${this.nom} s'ha iniciat correctament`);
    } else
      console.log(
        `El joc ${this.nom} no s'ha pogut inciar perquè ja estàva iniciat`
      );
  }

  tancar() {
    if (this.iniciat === true && this.installat === true) {
      this.iniciat = false;
      console.log(`El joc ${this.nom} s'ha tancat correctament`);
    } else
      console.log(
        `El joc ${this.nom} no s'ha pogut tancar perquè ja estava tancat`
      );
  }

  mostrarDetalls() {
    console.log(`Destlls del joc ${this.getID()}:
    - ID: ${this.id}
    - Nom: ${this.nom}
    - Descàrregues: ${this.descarregues} descàrregues
    - Puntuació: ${this.puntuacio} punts
    - Pes: ${this.pes} MB
    `);
  }
}

function crearJocsTelefon() {
  const jocs = [];

  const joc1 = new Joc('Minecraft', 700, 23.99, 100);
  jocs[0] = joc1;
  const joc2 = new Joc('Fortnite', 30000, 8.33, 200);
  jocs[1] = joc2;
  const joc3 = new Joc('Among Us', 200, 4.99, 350);
  jocs[2] = joc3;
  const joc4 = new Joc('Genshin Impact', 20000, 7.22, 125);
  jocs[3] = joc4;
  const joc5 = new Joc('Clash Royale', 500, 6.66, 450);
  jocs[4] = joc5;
  const joc6 = new Joc('Subway Surfers', 180, 4.68, 750);
  jocs[5] = joc6;
  const joc7 = new Joc('Call of Duty Mobile', 25000, 9.25, 150);
  jocs[6] = joc7;

  console.table(jocs);

  console.log('\n--- Detalls del joc ---');
  joc1.mostrarDetalls();
  joc2.mostrarDetalls();
  joc3.mostrarDetalls();
  joc4.mostrarDetalls();
  joc5.mostrarDetalls();
  joc6.mostrarDetalls();
  joc7.mostrarDetalls();

  console.log(`--- Interacció amn joc 1 ---`);
  joc1.installar();
  joc1.iniciar();

  console.log(`--- Interacció amn joc 2 ---`);
  joc3.installar();
  joc3.iniciar();
  joc3.tancar();
  joc3.desinstallar();

  console.log(`--- Interacció amn joc 3 ---`);
  joc5.installar();
  joc5.desinstallar();

  console.log(`--- Interacció amn joc 4 ---`);
  joc7.installar();
  joc7.desinstallar();

  console.log(`--- Interacció amn joc 5 ---`);
  joc2.installar();
  joc2.iniciar();

  console.log(`--- Interacció amn joc 6 --`);
  joc6.installar();
  joc6.iniciar();
  joc6.tancar();
  joc6.desinstallar();

  console.log(`--- Interacció amn joc 7`);
  joc7.installar();
  joc7.iniciar();
  joc7.tancar();
  joc7.desinstallar();

  console.log(`Els jocs intal·lats finalment són:`);
  for (const joc of jocs) {
    if (joc.installat === true) {
      console.log(`- ${joc.nom}`);
    }
  }

  console.log(`El proper joc tindria la ID número ${Joc.getSeguentID()}`);

  console.table(jocs);
}
