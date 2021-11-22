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

export const obtenerPokemon = async (id) => {

  const pokemones = await dataPokemones()

  const pokemon = pokemones.find((p) => {
    return p.num === id || p.name === id
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
   return p
 })

};



// ---------------------


// Filtrado de pokemones según tipo seleccionado

// Si no ha seleccionado ningún boton para filtrar, me retorna un array de todos los pokemones
// Si la búsqueda no coincide según los parametros (botones de tipo seleccionados), retorna array vacios
// Si hace match con n° cantidad de pokemones, retornan estos en un array

export const filtradoPokemones = (pokemones, types, weakness ) => {

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

export const sortBy = (pokemonesFiltrados, ordenSeleccionado) => {

  let resultado = [];

  switch (ordenSeleccionado){

      case "Número inferior":
          resultado = pokemonesFiltrados.sort( (pa , pb) => {return pa.num - pb.num });
          break
      case "Número superior":
          resultado = pokemonesFiltrados.sort( (pa , pb) => {return pb.num - pa.num });
          break
      case "A-Z":
          resultado = pokemonesFiltrados.sort( (pa , pb) => {return pa.name.localeCompare(pb.name)});
          break
      case "Z-A":
          resultado = pokemonesFiltrados.sort( (pa , pb) => {return pb.name.localeCompare(pa.name)});
          break
  }

  return resultado;

}