let contenedorPokemon = document.getElementById('pokemones-filtrados');

export const traerPokemones = (dataPokemon) => {

  fetch('./data/pokemon/pokemon.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data){
      
      contenedorPokemon.textContent='';
      data.pokemon.forEach(pokemon => { 
        if(pokemon.name === dataPokemon || pokemon.num === dataPokemon){

        createPokemon(pokemon);
        contadorPokemones();
      }});

    })
};


/* function createPokemon (pokemon) {

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
} */

function contadorPokemones (){
  const items = document.getElementsByClassName('item');
  const resultadoPokemones = document.getElementById('totalPokemones');

  if (items.length === 1){
    resultadoPokemones.textContent = `${items.length} Pokemón`;
  } else {
    resultadoPokemones.textContent = `${items.length} Pokemones`;
  }
}


export const render=()=>{
  fetch('./data/pokemon/pokemon.json')
  .then( function (response){
    return response.json()
  })
  .then( function (data) {
    contenedorPokemon.textContent='';
    data.pokemon.forEach( pokemon => {
      createPokemon(pokemon);
    })
})}


export const filtradoTipos =(arrTipos)=>{
  fetch('./data/pokemon/pokemon.json')
  .then( function (response){
    return response.json()
  })
  .then( function (data) {
    contenedorPokemon.textContent='';
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
      /*   console.log('si sirve'); */
      }
      else {
       /*  console.log('No sirve') */
      }
    })
})}


function createPokemon (pokemon){
  
  const card=document.createElement('div')
  card.classList.add("item")
  const img=document.createElement('img')
  img.src=`https://www.serebii.net/pokemongo/pokemon/${pokemon.num}.png`
  card.append(img)
  const info=document.createElement('div')
  info.classList.add("info")
  card.append(info)
  const infoLeft=document.createElement('div')
  infoLeft.classList.add("info-left")
  info.append(infoLeft)
  const nombrepokemon=document.createElement('h3')
  nombrepokemon.classList.add("namepokemon")
  nombrepokemon.textContent=`${pokemon.name}`
  infoLeft.append(nombrepokemon)
  const cpPokemon=document.createElement('h3')
  cpPokemon.textContent=`CP: ${pokemon['stats']['base-attack']}`
  infoLeft.append(cpPokemon)
  const icon=document.createElement('div')
  icon.classList.add("icon")
  infoLeft.append(icon)
  const span=document.createElement('span')
  span.classList.add("icon-circle-svgrepo-com")
  icon.append(span)
  const infoRigth=document.createElement('div')
  infoRigth.classList.add("info-rigth")
  info.append(infoRigth)
  const numpokemon=document.createElement('h3')
  numpokemon.textContent=`${pokemon.num}`
  infoRigth.append(numpokemon)

contenedorPokemon.append(card);
}

/*  let prueba = ['fire'];
filtradoTipos(prueba); 
 */
 

/* const tipoSeleccionados = document.getElementsByClassName('tipo-seleccionado');
    for (let btn of tipoSeleccionados){
      console.log(btn)
      btn.onclick = filtradoTipos(btn);
  
    }  */

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
  


// -------------------------------------------




// enviarTipo();