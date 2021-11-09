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






function filtradoTipos (arrTipos){
  fetch('./data/pokemon/pokemon.json')
  .then( function (response){
    return response.json()
  })
  .then( function (data) {
    
    data.pokemon.forEach( pokemon => {

      let pokemonApi = pokemon.type;
      let resultado = [];

      for (let tipo of arrTipos){

        let isType = pokemonType => pokemonType === tipo;
      
        let comprobando = pokemonApi.some(isType);

        if (comprobando){
          resultado.push(1);
        }
        else {
          resultado.push(0);
        }

      }

      if (resultado.every(pokemon => pokemon === 1)){
        createPokemon(pokemon);
        contadorPokemones();
        console.log('si sirve');
      }
      else {
        console.log('No sirve')
      }
    })
})}

let prueba = ['fire'];
filtradoTipos(prueba);





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

//    // return JSON.stringify(a.sort()) === JSON.stringify(b.sort());
  
//   }
  
  // console.log(pruebaVariosTipos());
  













  // -----------------------AQUII
  
  // function pruebaVariosTiposArray (arrTipos) {
    
  //   let pokemonApi = ['fuego','volador','tierra'];
  //   // let pokemonApi = ['agua','tierra','volador'];
  
  //   let resultado = [];

  //   for (let tipo of arrTipos){

  //     let isType = pokemonType => pokemonType === tipo;
      
  //     let comprobando = pokemonApi.some(isType);

  //     if (comprobando){
  //       resultado.push(1);
  //     }
  //     else {
  //       resultado.push(0);
  //     }
  //   }
    
  //   if (resultado.every(pokemon => pokemon === 1)){
  //     console.log('pikachu');
  //   }
  //   else {
  //     console.log('no sirve')
  //   }
  // }
  
  
  // pruebaVariosTiposArray(['agua','tierra','volador']);
  

// -------------------------------------------

// function enviarTipos (){

//   const tipoSeleccionados = document.getElementsByClassName('tipo-seleccionado');

//   for (let btn of tipoSeleccionados){
    
//     btn.onclick = filtradoTipos

//   }
  
// }


// enviarTipo();