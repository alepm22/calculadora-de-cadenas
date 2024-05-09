function calcularCadena(cadena) {
  const CERO=0
  let sumaTotal=CERO
  const longitudCadena=cadena.length
  if (longitudCadena!=0)
    {
      for (let i=0;i<longitudCadena;i++)
        {
          let caracter=cadena[i]
          let siguienteCaracter=cadena[i+1]
          let caracterEsUnNumeroSeparadoPorComa=!isNaN(caracter) && siguienteCaracter=="," && i!=longitudCadena-1
          let caracterEsElUltimoNumero=i==longitudCadena-1
          let caracterEsUnNumeroSeparadoPorGuion=!isNaN(caracter) && siguienteCaracter=="-" && i!=longitudCadena-1
          if(caracterEsUnNumeroSeparadoPorComa || caracterEsElUltimoNumero|| caracterEsUnNumeroSeparadoPorGuion)
            {
              sumaTotal=sumaTotal+parseInt(cadena[i])
            }
        }
    }
  return sumaTotal
}

export default calcularCadena;