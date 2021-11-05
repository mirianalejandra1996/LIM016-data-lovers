// estas funciones son de ejemplo

let contenedorPokemon = document.getElementById('pokemones-filtrados');
// let inputBuscar = document.getElementById('input-buscar');


export const traerPokemones = (pokemon) => {

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}/`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data){
      createPokemon(data);
    })
    // .catch((data){
    //   notFound()
    // });
};


function createPokemon (pokemon) {

contenedorPokemon.innerHTML = `
<div class="item">
    <h2>N° ${pokemon.id}</h2>
    <img src="${pokemon.sprites.front_default}" alt="" />
    <h3>${formatName (pokemon.name)}</h3>
</div>`
}


// function notFound (){
//   contenedorPokemon.innerHTML = `Este pokemón no se encuentra`
// }

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

function formatName (name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// function formatId (id){
//   return id.toLocaleString()
// }
