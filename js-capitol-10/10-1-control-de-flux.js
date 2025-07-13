console.log('***** Carregant 10-1-control-de-flux.js *****');

console.log('----- Àmbit -----');

let nom = "Ramon";
console.log("nom àmbit 1-->", nom);

{
  let nom = "Jordi";
  console.log("nom àmbit 2-->", nom);

  {
    let nom = "Maria";
    console.log("nom àmbit 3-->", nom);
  
  }
}

console.log('----- switch -----');

let fruites = ["platan", "poma", "pera", "cirera"];

for (let fruita of fruites) {
  switch (fruita) {
    case "platan":
      console.log("Aquesta fruita és unplàtan");
      break;
    case "poma":
      console.log("Aquesta fruita és una  poma");
      break;
    case "pera":
      console.log("Aquesta fruita és una pera");
      break;
    default:
      console.log(`Aquesta fruita és una ${fruita} i no és cap de les anteriors`);
  }
}

