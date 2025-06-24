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
  #id;

  constructor(color, pes, resPantalla, resCamara, memRam) {
    this.#id = Telefon.#numTel++;
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
    return this.#id;
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
  constructor(
    color,
    pes,
    resPantalla,
    resCamara,
    memRam,
    camLenta,
    recFacial,
    camExtra
  ) {
    super(color, pes, resPantalla, resCamara, memRam);
    this.camLenta = camLenta;
    this.recFacial = recFacial;
    this.camExtra = camExtra;
  }

  mostrarDetalls() {
    super.mostrarDetalls();
    console.log(`Detalls Alta Gamma telèfon ${this.getID()}:
Càmera lenta: ${this.camLenta}
Reconeicement facial: ${this.recFacial}
Càmera extra: ${this.camExtra}
`);
  }


  activarCamLenta() {
    if (this.ences === true) {
      this.camLenta = true;
      console.log(`Telèfon ${this.getID()} activat la càmera lenta.`);
    } else {
      console.log(`Telèfon ${this.getID()} no està encès.`);
    }
  }

  desactivarCamLenta() {
    if (this.ences === true) {
      this.camLenta = false;
      console.log(`Telèfon ${this.getID()} desactivat la càmera lenta.`);
    } else {
      console.log(`Telèfon ${this.getID()} no està encès.`);
    }
  }

  activarRecFacial() {
    if (this.ences === true) {
      this.recFacial = true;
      console.log(`Telèfon ${this.getID()} activat el reconeixement facial.`);
    } else {
      console.log(`Telèfon ${this.getID()} no està encès.`);
    }
  }

  desactivarRecFacial() {
    if (this.ences === true) {
      this.recFacial = false;
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
    true,
    true,
    true
  );
  telefons[3] = telefon1AltaGamma1;
  const telefon2AltaGamma2 = new TelefonAltaGamma(
    'blau',
    150,
    '720p',
    '1080p',
    4,
    true,
    true,
    true
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
  console.log(
    `El proper ID que s'assignaria seria: ${Telefon.getSeguentID()}`
  );

  console.table(telefons);
}
