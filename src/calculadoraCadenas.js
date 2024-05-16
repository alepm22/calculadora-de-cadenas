function extraerSeparadoresPersonalizados(cadena) {
  const PATRON_SEPARADORES = /\[(.*?)\]/g;
  let separadores = [];
  let coincidencia;
  while ((coincidencia = PATRON_SEPARADORES.exec(cadena)) !== null) {
    separadores.push(coincidencia[1]);
  }
  return separadores;
}

function esNumeroMenorOIgualAMil(cadenaNumeros) {
  const numero = parseInt(cadenaNumeros.join(""));
  return numero <= 1000;
}

function esUnSeparador(caracterActual, siguienteCaracter, cadena, indice, separadores) {
  const longitudCadena = cadena.length;
  return (
    (!isNaN(caracterActual) &&
      (siguienteCaracter === "," ||
       siguienteCaracter === "-" ||
       separadores.some(separador => 
         cadena.substring(indice + 1, indice + 1 + separador.length) === separador)
      ) &&
      indice !== longitudCadena - 1) ||
    indice === longitudCadena - 1
  );
}

function sumarNumerosEnCadena(cadena) {
  const INICIO = 0;
  let sumaTotal = INICIO;
  const longitudCadena = cadena.length;

  if (longitudCadena === 0) return sumaTotal;

  let numerosTemporales = [];
  const separadores = extraerSeparadoresPersonalizados(cadena);
  const separadorUsuario = separadores.length > 0 ? separadores[0] : cadena[3];
  let cadenaNoEstaVacia = longitudCadena !== 0;

  if (cadenaNoEstaVacia) {
    for (let i = 0; i < longitudCadena; i++) {
      let caracterActual = cadena[i];
      let siguienteCaracter = cadena[i + 1];

      if (!isNaN(caracterActual)) {
        numerosTemporales.push(caracterActual);
      }

      if (esUnSeparador(caracterActual, siguienteCaracter, cadena, i, separadores) &&
          esNumeroMenorOIgualAMil(numerosTemporales)) {
        sumaTotal += parseInt(numerosTemporales.join(''));
        numerosTemporales = [];
      }

      if (esUnSeparador(caracterActual, siguienteCaracter, cadena, i, separadores) &&
          !esNumeroMenorOIgualAMil(numerosTemporales)) {
        numerosTemporales = [];
      }
    }
  }

  return sumaTotal;
}

export default sumarNumerosEnCadena;
