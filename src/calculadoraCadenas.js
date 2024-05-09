function calcularCadena(cadena) {
  const CERO=0
  let longitudCadena=CERO
  const sumaTotal=cadena.length
  const SEPARADORUSUARIO=cadena[3]
  let cadenaEstaVacia=sumaTotal!=0
  if (cadenaEstaVacia)
    {
      for (let iteradorCadena=0;iteradorCadena<sumaTotal;iteradorCadena++)
        {
          let caracter=cadena[iteradorCadena]
          let siguienteCaracter=cadena[iteradorCadena+1]
          let caracterEsUnNumeroSeparadoPorComa=!isNaN(caracter) && siguienteCaracter=="," && iteradorCadena!=sumaTotal-1
          let caracterEsElUltimoNumero=iteradorCadena==sumaTotal-1
          let caracterEsUnNumeroSeparadoPorGuion=!isNaN(caracter) && siguienteCaracter=="-" && iteradorCadena!=sumaTotal-1
          let caracterEsUnNumeroSeparadoPorCaracterEspecificadoPorUsuario=!isNaN(caracter) && siguienteCaracter==SEPARADORUSUARIO && iteradorCadena!=sumaTotal-1
          if(caracterEsUnNumeroSeparadoPorComa || caracterEsElUltimoNumero || caracterEsUnNumeroSeparadoPorGuion || caracterEsUnNumeroSeparadoPorCaracterEspecificadoPorUsuario)
            {
              longitudCadena=longitudCadena+parseInt(caracter)
            }
        }
    }
  return longitudCadena
}

export default calcularCadena;