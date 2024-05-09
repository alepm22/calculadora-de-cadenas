import calcularCadena from "./calculadoraCadenas.js"

describe("Calculadora de cadenas", () => {
  it("Debería retornar 0 cuando la cadena está vacía", () => {
    expect(calcularCadena("")).toEqual(0);
  });
});
