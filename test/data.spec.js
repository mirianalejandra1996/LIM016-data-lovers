// import { example, anotherExample } from '../src/data.js';
// import { dataPokemones,busquedaInput, filtradoPokemones, obtenerPokemon,obtenerPokemones,obtenerEvoluciones } from './data.js';
import {calculator} from '../src/data.js'

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });


test('sum calculator' , () => {
  const result = calculator.sum(1,2)

  // matcher ToBe , expect , isEqual
  expect(result).toBe(3)
});

test.todo("extract calculator")
test.todo("multiply calculator")
test.todo("divide calculator")