function calcularCadena(cadena) {
  const CERO=0
  let sumaTotal=CERO
  const longitudCadena=cadena.length
  const SEPARADORUSUARIO=cadena[3]
  if (longitudCadena!=0)
    {
      for (let iteradorCadena=0;iteradorCadena<longitudCadena;iteradorCadena++)
        {
          let caracter=cadena[iteradorCadena]
          let siguienteCaracter=cadena[iteradorCadena+1]
          let caracterEsUnNumeroSeparadoPorComa=!isNaN(caracter) && siguienteCaracter=="," && iteradorCadena!=longitudCadena-1
          let caracterEsElUltimoNumero=iteradorCadena==longitudCadena-1
          let caracterEsUnNumeroSeparadoPorGuion=!isNaN(caracter) && siguienteCaracter=="-" && iteradorCadena!=longitudCadena-1
          let caracterEsUnNumeroSeparadoPorCaracterEspecificadoPorUsuario=!isNaN(caracter) && siguienteCaracter==SEPARADORUSUARIO && iteradorCadena!=longitudCadena-1
          if(caracterEsUnNumeroSeparadoPorComa || caracterEsElUltimoNumero || caracterEsUnNumeroSeparadoPorGuion || caracterEsUnNumeroSeparadoPorCaracterEspecificadoPorUsuario)
            {
              sumaTotal=sumaTotal+parseInt(caracter)
            }
        }
    }
  return sumaTotal
}

export default calcularCadena;