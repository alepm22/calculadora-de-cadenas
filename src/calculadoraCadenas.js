function calcularCadena(cadena) {
  const CERO=0
  let sumaTotal=CERO
  const TAMANIOCADENA=cadena.length
  const SEPARADORUSUARIO=cadena[3]
  let cadenaEstaVacia=TAMANIOCADENA!=0
  let cadenaNumeros=[]
  if (cadenaEstaVacia)
    {
      for (let iteradorCadena=0;iteradorCadena<TAMANIOCADENA;iteradorCadena++)
        {
          let caracter=cadena[iteradorCadena]
          let siguienteCaracter=cadena[iteradorCadena+1]
          let caracterEsUnNumeroSeparadoPorComa=!isNaN(caracter) && siguienteCaracter=="," && iteradorCadena!=TAMANIOCADENA-1
          let caracterEsElUltimoNumero=iteradorCadena==TAMANIOCADENA-1
          let caracterEsUnNumeroSeparadoPorGuion=!isNaN(caracter) && siguienteCaracter=="-" && iteradorCadena!=TAMANIOCADENA-1
          let caracterEsUnNumeroSeparadoPorCaracterEspecificadoPorUsuario=!isNaN(caracter) && siguienteCaracter==SEPARADORUSUARIO && iteradorCadena!=TAMANIOCADENA-1
          if (!isNaN(caracter)){
            cadenaNumeros.push(caracter)
          }
          if((caracterEsUnNumeroSeparadoPorComa || caracterEsElUltimoNumero || caracterEsUnNumeroSeparadoPorGuion || caracterEsUnNumeroSeparadoPorCaracterEspecificadoPorUsuario) && (parseInt(cadenaNumeros.join(''))<=1000))
            {
              
                  sumaTotal=sumaTotal+parseInt(cadenaNumeros.join(''))

                
              cadenaNumeros=[]
            }
            if((parseInt(cadenaNumeros.join(''))>1000))
              {
                cadenaNumeros=[]
              }

        }
    }
  return sumaTotal
}

export default calcularCadena;