function calcularCadena(cadena) {
  const CERO=0
  const longitudCadena=cadena.length
  if (longitudCadena==1)
    {
      return parseInt(cadena[0]);
    }
  if(longitudCadena==3){
    return parseInt(cadena[0])+parseInt(cadena[2])
  }
  return CERO
}

export default calcularCadena;
