console.log('***** Carregant 3-1-classes.js *****');

console.log('----- Instanciació de classes -----');

class Animal {
  constructor(especie, edat, color) {
    this.especie = especie;
    this.edat = edat;
    this.color = color;
    this.info = `Sóc un ${this.especie} de ${this.edat} anys, i sóc de color ${this.color}.`;
  }

  veureInfo() {
    return this.info;
  }
}

const animal1 = new Animal('gos dàlmata', 2, 'negre i blanc');
console.log(animal1);

console.log('----- Aributs / propietats -----');
const especiaAnimal1 = animal1.especie;
console.log('especiaAnimal1 -->', especiaAnimal1);

const edatAnimal1 = animal1.edat;
console.log('edatAnimal1 -->', edatAnimal1);

const colorAnimal1 = animal1.color;
console.log('colorAnimal1 -->', colorAnimal1);

const infoAnimal1 = animal1.info;
console.log('infoAnimal1 -->', infoAnimal1);

console.log('----- Mètodes -----');
console.log(animal1.veureInfo());

console.log('----- Herència -----');

class Gos extends Animal {
  constructor(especie, edat, color, pel, pataner) {
    super(especie, edat, color);
    this.pel = pel;
    this.pataner = pataner;
    this.infoGos = `El meu pèl és ${this.pel} i el meu pataner és ${this.pataner}.`;
  }

  veureInfoAnimal() {
    return super.veureInfo();
  }
  veureInfoGos() {
    return super.veureInfo() + ' ' + this.infoGos;
  }
  bordar(nom) {
    return `Hola, sóc en ${nom} i us dic bub-bub!`;
  }
}

const dalmata = new Gos('gos dàlmata', 2, 'negre i blanc', 'curt', true);
console.log(dalmata);

console.log('----- Mètodes heredats-----');

console.log(dalmata.veureInfoAnimal());
console.log(dalmata.veureInfoGos());
console.log(dalmata.bordar('Gran dàlmata'));

console.log('----- Mètodes i propietats estàtiques -----');

class Gat extends Animal {
  static id = 1;
  constructor(especie, edat, color, cua, barreja) {
    super(especie, edat, color);
    this.cua = cua;
    this.barreja = barreja;
    this.id = Gat.id++;
  }
  static numeroGat() {
    return `Tinc 7 vides de ben segur`;
  }

  veureInfoAnimal() {
    return super.veureInfo();
  }
  veureInfoGat() {
    return (
      super.veureInfo() +
      ` La meva cua es ${this.cua} i la meva barreja és ${
        this.barreja
      }. ${Gat.numeroGat()}`
    );
  }
}

console.log(Gat.numeroGat());

const gat1 = new Gat('gat', 2, 'negre', 'curta', true);
console.log(gat1);
console.log(Gat.numeroGat());
console.log(gat1.veureInfoAnimal());
console.log(gat1.veureInfoGat());

const gat2 = new Gat('gat', 2, 'negre', 'curta', true);
console.log(gat2);
const gat3 = new Gat('gat', 2, 'negre', 'curta', true);
console.log(gat3);

console.log('----- getters i setters -----');

class Ocell extends Animal {
  static id = 1;
  #idPrivada;
  constructor(especie, edat, color, tipus, esAquatic) {
    super(especie, edat, color);
    this.tipus = tipus;
    this.esAquatic = esAquatic;
    this.#idPrivada = Ocell.id++;
  }

  get id() {
    return this.#idPrivada;
  }  

  get getTipus() {
    return this.tipus;
  }

  set setTipus(tipus) {
    this.tipus = tipus;
  }

  getEsAquatic() {
    return this.esAquatic;
  }
  
}

const ocell1 = new Ocell('ocell', 2, 'negre', 'comú', true);
console.log(ocell1);
console.log("ocell1.id -->", ocell1.id);
console.log("ocell1.tipus -->",ocell1.tipus);
console.log("ocell1.esAquatic -->", ocell1.esAquatic);
console.log("getTipus -->", ocell1.getTipus);
ocell1.setTipus = 'blau';
console.log("getTipus -->", ocell1.getTipus);
console.log("getEsAquatic() -->", ocell1.getEsAquatic());
ocell1.tipus = 'groc';
console.log("tipus -->",ocell1.tipus);




