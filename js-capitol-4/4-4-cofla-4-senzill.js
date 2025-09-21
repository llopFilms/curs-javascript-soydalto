console.log('***** Carregant 4-4-cofla-senzill.js *****');

(function registreUniversitatSenzill() {
  const materies = {
    fisica: [
      'Professor Pérez',
      'Pere Ramoneda',
      'Pep Codina',
      'Cofla Pintor',
      'Maria Serrano',
    ],
    programacio: [
      'Professora Garcia',
      'Dalto Román',
      'Pere Ramoneda',
      'Joan Serrano',
      'Pep Codina',
    ],
    logica: [
      'Professor Ramírez',
      'Pere Ramoneda',
      'Joan Serrano',
      'Pep Codina',
      'Cofla Pintor',
      'Maria Serrano',
    ],
    quimica: [
      'Professora Gutiérrez',
      'Pere Ramoneda',
      'Joan Serrano',
      'Pep Codina',
      'Cofla Pintor',
      'Maria Serrano',
    ],
  };

  const obtenirInfo = (materia) => {
    if (materies[materia] !== undefined) {
      return [materia, materies[materia]];
    } else {
      return 'La matèria selecionada no existeix';
    }
  };

  const mostrarInfo = (materia) => {
    let info = obtenirInfo(materia);

    if (info) {
      const materia = info[0];
      const professor = info[1][0];
      const alumnes = info[1].slice(1).join(', ') + '.';

      console.log(`      
Informació sol·licitada:

Assignatura: ${materia}
Professor: ${professor}
Alumnes: ${alumnes}
        `);
    }
  };

  mostrarInfo('fisica');
  mostrarInfo('programacio');
  mostrarInfo('logica');
  mostrarInfo('quimica');

  const quantitatDAssignatures = (alumne) => {
    let assignatures = [];
    let totalAssignatures = 0;
    for (const materia in materies) {
      if (materies[materia].includes(alumne)) {
        assignatures.push(materia);
        totalAssignatures++;
      }
    }
    return [alumne, totalAssignatures, assignatures];
  }
  let assignaturesCofla =
    quantitatDAssignatures('Cofla Pintor');
  
  console.log(`Total assignatures de ${assignaturesCofla[0]} --> ${assignaturesCofla[1]}.
Les assignatures són: ${assignaturesCofla[2].join(', ')}.`);
})();
