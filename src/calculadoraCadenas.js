function obtenerSeparadoresPersonalizados(cadena) {
  const regexSeparadores = /\[(.*?)\]/g;
  let separadoresPersonalizados = [];
  let resultadoRegex;
  while ((resultadoRegex = regexSeparadores.exec(cadena)) !== null) {
    separadoresPersonalizados.push(resultadoRegex[1]);
  }
  return separadoresPersonalizados;
}

function esNumeroValido(cadenaNumeros) {
  const numero = parseInt(cadenaNumeros.join(""));
  return numero <= 1000;
}

function esSeparadorValido(caracterActual, siguienteCaracter, cadena, indice, separadoresPersonalizados) {
  const TAMANIOCADENA = cadena.length;
  return (
    (!isNaN(caracterActual) &&
      (siguienteCaracter === "," ||
       siguienteCaracter === "-" ||
       separadoresPersonalizados.some(separador => 
         cadena.substring(indice + 1, indice + 1 + separador.length) === separador)
      ) &&
      indice !== TAMANIOCADENA - 1) ||
    indice === TAMANIOCADENA - 1
  );
}

function calcularCadena(cadena) {
  const CERO = 0;
  let sumaTotal = CERO;
  const TAMANIOCADENA = cadena.length;

  if (TAMANIOCADENA === 0) return sumaTotal;

  let cadenaNumeros = [];
  const separadoresPersonalizados = obtenerSeparadoresPersonalizados(cadena);
  const SEPARADORUSUARIO = separadoresPersonalizados.length > 0 ? separadoresPersonalizados[0] : cadena[3];
  let cadenaEstaVacia = TAMANIOCADENA !== 0;

  if (cadenaEstaVacia) {
    for (let iteradorCadena = 0; iteradorCadena < TAMANIOCADENA; iteradorCadena++) {
      let caracter = cadena[iteradorCadena];
      let siguienteCaracter = cadena[iteradorCadena + 1];

      if (!isNaN(caracter)) {
        cadenaNumeros.push(caracter);
      }

      if (esSeparadorValido(caracter, siguienteCaracter, cadena, iteradorCadena, separadoresPersonalizados) &&
          esNumeroValido(cadenaNumeros)) {
        sumaTotal += parseInt(cadenaNumeros.join(''));
        cadenaNumeros = [];
      }

      if (esSeparadorValido(caracter, siguienteCaracter, cadena, iteradorCadena, separadoresPersonalizados) &&
          !esNumeroValido(cadenaNumeros)) {
        cadenaNumeros = [];
      }
    }
  }

  return sumaTotal;
}

export default calcularCadena;
