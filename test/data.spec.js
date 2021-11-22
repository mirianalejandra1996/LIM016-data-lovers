import { obtenerPokemones, obtenerEvoluciones, obtenerPokemon, filtradoPokemones, sortBy} from '../src/data.js';
import pokemonData from '../src/data/pokemon/pokemon.json'

// si llamo a fetch es una funcion que me devuleve un promesa 
// que resuelve un objeto que contiene la propiedad json y esta
// funcion que devuelve una promesa que resuleve el contenido de
// json de la lista de pokemones
global.fetch = jest.fn(() =>
Promise.resolve({
  json : ()=> Promise.resolve(pokemonData)
}))

describe('obtenerPokemones', () => {
  const listaPokemon = pokemonData.pokemon
  it('is a function', () => {
    expect(typeof obtenerPokemones).toBe('function');
  });

  it('returns correct pokemons', async () => {
    // preparar inputs y outputs£‰
    const primerPokemon = listaPokemon[0]
    const segundoPokemon =  listaPokemon[1]
    const ids = [primerPokemon.num, segundoPokemon.num]
    const pokemons = [primerPokemon, segundoPokemon]
    // correr la funcion
    expect(await obtenerPokemones(ids)).toEqual(pokemons);
  });
});

describe('obtenerEvoluciones', () => {
  const listaPokemon = pokemonData.pokemon
  it('is a function', () => {
    expect(typeof obtenerEvoluciones).toBe('function');
  });

  it('returns array de siguientes evoluciones ', () => {
    //prepar inputs y outputs
    const primerPokemon = listaPokemon[0]
    const idsevoluciones =[listaPokemon[0].num,listaPokemon[1].num,listaPokemon[2].num]
   // const idsevoluciones = [primerPokemon.evolution['next-evolution'][0].num,primerPokemon.evolution['next-evolution'][0]['next-evolution'][0].num]
    // correr funcion
    expect(obtenerEvoluciones(primerPokemon)).toEqual(idsevoluciones);
  });
  it('returns array de evoluciones previas', () => {
    //prepar inputs y outputs
    const primerPokemon = listaPokemon[2]
    const idsevoluciones =[listaPokemon[0].num,listaPokemon[1].num,listaPokemon[2].num]
   // const idsevoluciones = [primerPokemon.evolution['next-evolution'][0].num,primerPokemon.evolution['next-evolution'][0]['next-evolution'][0].num]
    // correr funcion
    expect(obtenerEvoluciones(primerPokemon)).toEqual(idsevoluciones);
  });
  it('returns array de suiguientes evoluciones y previas', () => {
    //prepar inputs y outputs
    const primerPokemon = listaPokemon[1]
    const idsevoluciones =[listaPokemon[0].num,listaPokemon[1].num,listaPokemon[2].num]
   // const idsevoluciones = [primerPokemon.evolution['next-evolution'][0].num,primerPokemon.evolution['next-evolution'][0]['next-evolution'][0].num]
    // correr funcion
    expect(obtenerEvoluciones(primerPokemon)).toEqual(idsevoluciones);
  });
});

// -----------Mirian

describe('función obtenerPokemon', () => {

  const listaPokemon = pokemonData.pokemon
  it('is a function', () => {
    expect(typeof obtenerPokemon).toBe('function');
  });

  // const pokemonPrueba = 
  it('should returns a pokemon object when its num match with the entered id', async () => {
    const pokemon = listaPokemon[0];
    expect(await obtenerPokemon('001')).toEqual(pokemon)
  });

  it('should returns a pokemon object when its name match with the entered id', async () => {
    const pokemon = listaPokemon[0];
    expect(await obtenerPokemon('bulbasaur')).toEqual(pokemon)
  });

})

describe('función filtradoPokemones' , () => {
  const listaPokemon = pokemonData.pokemon
  
  it('is a function', () => {
    expect(typeof filtradoPokemones).toBe('function');
  });

  it('should filter how many pokemons that match by types and weaknesses entered', () => {
    
    const types = ["electric"]
    const weaknesses = ["ground"]

    expect(filtradoPokemones(listaPokemon,types,weaknesses).length).toEqual(12)
  });

  it('should filter pokemons that match by only types entered', () => {
    
    const types = ["fire","dark"]
    const weaknesses = []

    const pokemonesFiltrados = [listaPokemon[227],listaPokemon[228]]
    expect(filtradoPokemones(listaPokemon,types,weaknesses)).toEqual(pokemonesFiltrados)
  });

  it('should filter pokemons that match by only weaknesses entered', () => {
    
    const types = []
    const weaknesses = ["ice","bug","ghost"]

    const pokemonesFiltrados = [listaPokemon[101],listaPokemon[102]]
    expect(filtradoPokemones(listaPokemon,types,weaknesses)).toEqual(pokemonesFiltrados)
    
    const pokemonesFiltrados2 = [listaPokemon[1],listaPokemon[102]]
    expect(filtradoPokemones(listaPokemon,types,weaknesses)).not.toEqual(pokemonesFiltrados2)
  });

  it('should filter pokemons that match by types and weaknesses entered', () => {
    
    const types = ["fire"]
    const weaknesses = ["rock"]

    const pokemonesFiltrados = [listaPokemon[249]]
    expect(filtradoPokemones(listaPokemon,types,weaknesses)).toEqual(pokemonesFiltrados)
    
    const pokemonesFiltrados2 = [listaPokemon[1],listaPokemon[24]]
    expect(filtradoPokemones(listaPokemon,types,weaknesses)).not.toEqual(pokemonesFiltrados2)
  });

  it('should filter all pokemons without entering any type and weaknesses', () => {
    
    const pokemones = listaPokemon.slice(0,4)
    const types = []
    const weaknesses = []

    expect(filtradoPokemones(pokemones,types,weaknesses)).toEqual(pokemones)
    
  });

  
})

describe('function sortBy', () => {

  const listaPokemon = pokemonData.pokemon

  it('is a function', () => {
    expect(typeof sortBy).toBe('function');
  });

  it('should sort pokemon by A-Z', () => {
  
    const pokemons = listaPokemon.slice(0,4)
    // ordenados de la A-Z (bulbasour, chamander, ivysaur, venusaur)
    let pokemonesOrdenados = [pokemons[0],pokemons[3],pokemons[1],pokemons[2]];
    
    expect(sortBy(pokemons,"A-Z")).toStrictEqual(pokemonesOrdenados);
  });

  it('should sort pokemon by Z-A', () => {

    const pokemons = listaPokemon.slice(0,4)
    // ordenados de la Z-A (venusaur, ivysaur, chamander, bulbasour)
    let pokemonesOrdenados = [pokemons[2],pokemons[1],pokemons[3],pokemons[0]];
    expect(sortBy(pokemons,"Z-A")).toStrictEqual(pokemonesOrdenados);
  });

  it('should sort pokemon by upperNumber', () => {

    const pokemons = listaPokemon.slice(0,4)
    // ordenados de la Número Superior ( chamander, venusaur, ivysaur, bulbasour)
    let pokemonesOrdenados = [pokemons[3],pokemons[2],pokemons[1],pokemons[0]]
    expect(sortBy(pokemons,"Número superior")).toStrictEqual(pokemonesOrdenados)
  })

  
  it('should sort pokemon by lowerNumber', () => {
    
    const pokemons = listaPokemon.slice(0,4)
    // ordenados de la Número Superior ( bulbasour, ivysaur, venusaur, chamander)
    let pokemonesOrdenados = [pokemons[0],pokemons[1],pokemons[2],pokemons[3]]
    expect(sortBy(pokemons,"Número inferior")).toStrictEqual(pokemonesOrdenados)
  })


})