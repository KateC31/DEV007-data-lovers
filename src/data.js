import data from '../src/data/pokemon/pokemon.js';

export const oredenarPokemones = (ordenamiento) => {
  data.pokemon.sort (function(a,b){
    if (ordenamiento === "A-Z") {
      if(a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
    }
    if (ordenamiento === "Z-A") {
      if(a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
      }
    }
  })
};

export const anotherExample = () => {
  return 'OMG';
};
