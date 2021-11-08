let contenedorPokemon = document.getElementById('pokemones-filtrados');

export const traerPokemones = (dataPokemon) => {

  fetch('./data/pokemon/pokemon.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data){
      
      data.pokemon.forEach(pokemon => { 
        
        if(pokemon.name === dataPokemon || pokemon.num === dataPokemon){

        // console.log(pokemon.type)  
        createPokemon(pokemon);
        contadorPokemones();
      }});

    })
};


function createPokemon (pokemon) {

contenedorPokemon.innerHTML = `
<div class="item">
            <img src="https://www.serebii.net/pokemongo/pokemon/${pokemon.num}.png" />

            <div class="info">
              <div class="info-left">
                <h3 class="namePokemon">${pokemon.name}</h3>
                <h3>CP:${pokemon['stats']['base-attack']}</h3>

                <div class="icon">
                  <span class="icon-circle-svgrepo-com"></span>
                </div>
              </div>

              <div class="info-rigth">
                <h3>#${pokemon.num}</h3>
              </div>
            </div>
          </div>`;
}

function contadorPokemones (){
  const items = document.getElementsByClassName('item');
  const resultadoPokemones = document.getElementById('totalPokemones');

  if (items.length === 1){
    resultadoPokemones.textContent = `${items.length} Pokemón`;
  } else {
    resultadoPokemones.textContent = `${items.length} Pokemones`;
  }
}






// function filtradoTipos (arrTypes){
//   fetch('./data/pokemon/pokemon.json')
//   .then( function (response){
//     return response.json()
//   })
//   .then( function (data) {
    
//     // data.pokemon.filter( pokemon => )
// })}

// let prueba = ['ice', 'psychic'];
// console.log(filtradoTipos(prueba));





// function pruebaUnTipo () {
  
//   let a = ['fuego','agua','tierra'];
//   const b = a.includes('agua');

//   return b

//     // return JSON.stringify(a.sort()) === JSON.stringify(b.sort());
  
//   }

// console.log(pruebaUnTipo());


// function pruebaVariosTipos () {
  
//   let a = ['fuego','volador','tierra'];

//   const c = p => p === 'agua' || p === 'tierra'; //true o false
//   console.log(c)

//   const b = a.some(c);

//   return b

 //   // return JSON.stringify(a.sort()) === JSON.stringify(b.sort());
  
  // }

// console.log(pruebaVariosTipos());





















// function enviarTipo (){

//   const btntipos = document.getElementsByClassName('btn-tipo')

//   for (let btn of btntipos){

//     btn.onclick = filtradoTipos

//   }
  
// }