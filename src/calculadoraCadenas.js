function calcularCadena(cadena) {
  const CERO=0
  let sumaTotal=CERO
  const longitudCadena=cadena.length
  if (longitudCadena!=0)
    {
      for (let i=0;i<longitudCadena;i++)
        {
          if(!isNaN(cadena[i]) && cadena[i+1]=="," && i!=longitudCadena-1)
            {
              sumaTotal=sumaTotal+parseInt(cadena[i])
            }
          if(i==longitudCadena-1)
            {
              sumaTotal=sumaTotal+parseInt(cadena[i])
            }
        }
    }
  return sumaTotal
}

export default calcularCadena;