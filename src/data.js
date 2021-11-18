// Primero obtenemos toda la data de los pokemones del json
export const dataPokemones = () => {

  return fetch("./data/pokemon/pokemon.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    return data.pokemon;
  })
};


// ---------------------


// Función busqueda Input funcional
// Podrá conseguir el pokemón deseado ingresando su Nombre o su Número
// Esta función retornará un array con el pokemon que coincida con la data ingresada en el buscador
// solo podrá recibir strings como Parámetro

export const busquedaInput = async (inputContent) => {

    const pokemones = await dataPokemones()
    
    let resultado = []

    pokemones.forEach((pokemon) => {

        if (pokemon.name === inputContent || pokemon.num === inputContent) {
          resultado.push(pokemon)
        }
    })

    if (resultado.length === 0){
      return []
    }
    return resultado
  
};


export const busquedaDetalle = async (id) => {

    const pokemones = await dataPokemones()
    
    let resultado = []

    pokemones.forEach((pokemon) => {

        if (pokemon.num === id) {
          resultado.push(pokemon)
        }
    })

    if (resultado.length === 0){
      return []
    }
    return resultado
  
};




// ---------------------


// Filtrado de pokemones según tipo seleccionado

// Si no ha seleccionado ningún boton para filtrar, me retorna un array de todos los pokemones
// Si la búsqueda no coincide según los parametros (botones de tipo seleccionados), retorna array vacios
// Si hace match con n° cantidad de pokemones, retornan estos en un array

export const filtradoPokemones = (pokemones, types, weakness ) => {
// export const matchPokemon = (pokemones, types, weakness ) => {

                  // 251
  let filtered = pokemones.filter((pokemon) => {
    if(types.length === 1 && weakness.length === 1) {
      return types.includes(pokemon.type[0]) && weakness.includes(pokemon.weaknesses[0]);
    }else {
      return types.every(e => pokemon.type.includes(e)) && weakness.every(e => pokemon.weaknesses.includes(e))
    }
  })
  return filtered
    
}






