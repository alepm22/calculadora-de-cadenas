import calcularCadena from "./calculadoraCadenas.js";

describe("Calculadora de cadenas", () => {
  it("Debería retornar 0 cuando la cadena está vacía", () => {
    expect(calcularCadena("")).toEqual(0);
  });
  it("Debería retornar 3 para una cadena con un solo número", () => {
    expect(calcularCadena("3")).toEqual(3);
  });
  it("Debería devolver 5 porque la cadena contiene dos elementos", () => {
    expect(calcularCadena("3,2")).toEqual(5);
  });
});