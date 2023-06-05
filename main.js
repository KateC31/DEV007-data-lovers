import { ordenarPokemones } from "./data.js";
import data from "./data/pokemon/pokemon.js";
import { filterData } from "./data.js";
// Obtener el elemento del DOM para listar los pokémon
const enlistar = document.getElementById("Pokemon");
// Obtener la lista de pokémon del archivo de datos
const pokeList = data.pokemon;
// Función para mostrar los pokémon en la página
function mostrarpokemones(listadoPokemones) {
// Limpiar el contenido del contenedor
  enlistar.innerHTML = "";
// Iterar sobre cada pokémon y agregar su información al contenedor
  listadoPokemones.forEach(
    (element) =>
      (enlistar.innerHTML += `<div class="caracteristica"> <div>${element.num}</div><p>${element.name}</p><img src=${element.img}>  <div>${element.type}</div></div>`)
  );
}
// Evento para el selector de ordenamiento
const select = document.getElementById("ordenamiento");
select.addEventListener("change", () => {
// Obtener la opción seleccionada
  const selectedOpttion = select.value;
  //console.log(selectedOpttion);
  // Ordenar los pokémon según la opción seleccionada
  const newData = ordenarPokemones(selectedOpttion);
   // Mostrar los pokémon ordenados
  mostrarpokemones(newData);
});
// Evento cuando la página se carga
window.onload = function () {
  //console.log("carga");
 // Mostrar todos los pokémon al cargar la página
  mostrarpokemones(pokeList);
};
// Evento para el selector de tipos
const seleccionarTipo = document.getElementById("seleccionar-tipo");
seleccionarTipo.addEventListener("change", () => {
 // Obtener el tipo seleccionado
  const type = seleccionarTipo.options[seleccionarTipo.selectedIndex].value;
  //console.log(type);
// Filtrar los pokémon según el tipo seleccionado
  if (type === "All") {
    mostrarpokemones(pokeList);
  } else {
    mostrarpokemones(filterData(data, type));
  }
});
