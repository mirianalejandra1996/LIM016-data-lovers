import { obtenerPokemones, obtenerEvoluciones } from '../src/data.js';
import pokemonData from '../src/data/pokemon/pokemon.json'

// si llamo a fetch es una funcion que me devuleve un promesa 
// que resuelve un objeto que contiene la propiedad json y esta
// funcion que devuelve una pomesa que resuleve el contenido de
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
