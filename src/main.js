import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example, data);
console.log(data.pokemon[0]);
const enlistar= document.getElementById("Pokemon");
const pokeList= data.pokemon;
pokeList.forEach(element => enlistar.innerHTML += `<div class="caracteristica"> <p>${element.name}</p><img src=${element.img}>  <div>${element.type}</div><div>${element.num}</div></div>`);
const select= document.getElementById("ordenamiento");
select.addEventListener("change", () => {
    const selectedOpttion=select.value
    console.log(selectedOpttion)
});
