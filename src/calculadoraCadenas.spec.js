import calcularCadena from "./calculadoraCadenas.js";

describe("Calculadora de cadenas", () => {
  it("Debería retornar 0 cuando la cadena está vacía", () => {
    expect(calcularCadena("")).toEqual(0);
  });
  it("Debería retornar 3 ya que la cadena contiene el número 3", () => {
    expect(calcularCadena("3")).toEqual(3);
  });
});
