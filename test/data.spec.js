import { obtenerPokemones, obtenerEvoluciones, obtenerPokemon, filtradoPokemones, sortBy} from '../src/data.js';
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

// -----------Mirian

describe('función obtenerPokemon', () => {

  const listaPokemon = pokemonData.pokemon
  it('is a function', () => {
    expect(typeof obtenerPokemon).toBe('function');
  });

  // const pokemonPrueba = 
  it('should returns a pokemon object when its id match with the entered value', async () => {
    const pokemon = listaPokemon[0];
    expect(await obtenerPokemon('001')).toEqual(pokemon)
  })

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
  })
})

describe(' function sortBy', () => {

  const listaPokemon = pokemonData.pokemon
  it('is a function', () => {
    expect(typeof sortBy).toBe('function');
  });





  it('should sort pokemon by A-Z', () => {
  
    const pokemons = listaPokemon.slice(0,3)

    // console.log('probando', pokemons.sort)
    
    let namesPokemon = sortBy(pokemons,"A-Z")
    let names = []
    for (let pokemon of namesPokemon) {
      names.push(pokemon.name)
    }
    
    console.log('probando', names)
    

    // expect(pokemons).toStrictEqual(pokemons.sort(sortBy(pokemons,"A-Z")))
    expect(sortBy(pokemons,"A-Z")).toStrictEqual(pokemons.sort)
  })



})