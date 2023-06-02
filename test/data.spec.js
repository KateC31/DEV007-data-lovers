import { filterData, ordenarPokemones } from "../src/data.js";

describe("ordenarPokemones", () => {
  it("Deberia ser una función", () => {
    expect(typeof ordenarPokemones).toBe("function");
  });

  it("Ordenamiento de forma ascendente", () => {
    const ordenAscendente = ordenarPokemones("A-Z");
    expect(ordenAscendente[0].name).toBe("abra");
  });
});

describe("ordenarPokemones", () => {
  it("Ordenamiento de forma descendente", () => {
    const ordenDescendente = ordenarPokemones("Z-A");
    expect(ordenDescendente[0].name).toBe("zubat");
  });
});

describe("pokemonesTipo", () => {
  const filtroTipo = {
    pokemon: [
      { name: "bulbasaur", type: ["grass"] },
      { name: "squirtle", type: ["water"] },
      { name: "charmander", type: ["fire"] },
      { name: "pikachu", type: ["electric"] },
    ],
  };

  it("Ordenamiento de por tipo", () => {
    const filtro2 = filterData(filtroTipo, "electric");
    expect(filtro2).toEqual([
      {
        name: "pikachu",
        type: ["electric"],
      },
    ]);
  });
});
