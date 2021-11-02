// estas funciones son de ejemplo

export const traerPokemones = (id) => {

  fetch("./data/pokemon/pokemon.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data){

      // console.log(data.pokemon[id]);
      data.pokemon.forEach(pokemon => console.log(pokemon.name))
      // document.getElementById("llenar").innerHTML = data.pokemon[0].name;
      // document.getElementById("llenar2").innerHTML = data.pokemon[1].name;

      
    });
    // return example;
};



// let imprimirPokemon = () => {
  
// }

// export const anotherExample = () => {
//   return 'OMG';
// };

function createPokemon () {

  let div = document.createElement('div');
  div.innerHTML = 'Si';

  document.getElementById('pokemones-filtrados').appendChild(div);

}