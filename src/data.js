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


export const obtenerPokemon = async (id) => {

  const pokemones = await dataPokemones()

  const pokemon = pokemones.find((p) => {
    return p.num === id
  })

 return pokemon

};

export const obtenerPokemones = async (ids) => {

  const promesas = []

  ids.forEach((id) => {
    promesas.push(obtenerPokemon(id))
  })
  
  // eslint-disable-next-line no-undef
  const pokemones = await Promise.all(promesas)

  // En caso de las evoluciones siguiete no se encuentre lo va a filtrar y solo enviaria los que si existen en la data 
 return pokemones.filter((p) => {
   return p !== null
 })

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


export const obtenerEvoluciones = (pokemon) => {
  const nextEvolutions= []
  
  let evolucionesPokemonActual = pokemon.evolution
console.log(evolucionesPokemonActual)

  while (evolucionesPokemonActual['next-evolution']) {
    if(evolucionesPokemonActual['next-evolution'].length === 1){
      nextEvolutions.push(evolucionesPokemonActual['next-evolution'][0].num)
    } else {
      evolucionesPokemonActual['next-evolution'].forEach(nextEvolution => {
        nextEvolutions.push(nextEvolution.num)
      })
    }
    evolucionesPokemonActual = evolucionesPokemonActual['next-evolution'][0]
  
  }

  const prevEvolutions = []
  
  evolucionesPokemonActual = pokemon.evolution


  while (evolucionesPokemonActual['prev-evolution']) {
    prevEvolutions.unshift(evolucionesPokemonActual['prev-evolution'][0].num)
    evolucionesPokemonActual = evolucionesPokemonActual['prev-evolution'][0]
  }

  const evolucionesOrdenadas = prevEvolutions.concat(pokemon.num).concat(nextEvolutions)

  return evolucionesOrdenadas
  

}



