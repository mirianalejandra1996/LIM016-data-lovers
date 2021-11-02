// estas funciones son de ejemplo

let contenedorPokemon = document.getElementById('pokemones-filtrados');

export const traerPokemones = () => {

  fetch("https://pokeapi.co/api/v2/pokemon/snorlax/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data){

      // data.pokemon.forEach(pokemon => console.log(pokemon.name))
      console.log(data.name)
      createPokemon(data);
    });
};


function createPokemon (pokemon) {

contenedorPokemon.innerHTML = `
<div class="item">
    <h2>N° ${pokemon.id}</h2>
    <img src="${pokemon.sprites.front_default}" alt="" />
    <h3>${pokemon.name}</h3>
</div>`

}


// function createPokemon (pokemon) {

//   const img = document.createElement('img');
//   img.src = pokemon.sprites.front_default;

//   const tarjeta = document.createElement('div');
//   tarjeta.classList.add('item');
//   tarjeta.innerHTML = pokemon.name;
//   tarjeta.innerHTML = pokemon.id;

//   tarjeta.prepend(img);

//   contenedorPokemon.prepend(tarjeta);

//   // document.getElementById('pokemones-filtrados').prepend(tarjeta);
  
//   // document.getElementById('pokemones-filtrados').appendChild(tarjeta)
// }
