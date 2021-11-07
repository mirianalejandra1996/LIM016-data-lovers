import { traerPokemones } from './data.js';
import data from './data/pokemon/pokemon.js';


const githubMirian = document.getElementById('github-mirian');
const githubLucero = document.getElementById('github-lucero');
const pokemonWebsite = document.getElementById('pokemon-website');

githubMirian.addEventListener('click', ()=> {
    window.open('https://github.com/mirianalejandra1996','_blank')
});

githubLucero.addEventListener('click', ()=> {
    window.open('https://github.com/lucerogoga','_blank')
});

pokemonWebsite.addEventListener('click',()=>{
    window.open('https://www.pokemon.com/el/','_blank')
})


console.log(traerPokemones,data);

let inputBuscar = document.getElementById('input-buscar');
let btnBuscar = document.getElementById('btn-buscar');

btnBuscar.addEventListener('click', ()=>{traerPokemones(inputBuscar)});

// traerPokemones();


// let iconNav = document.get


// let pokemon = [{name:"lucero"},{name:"mirian"},{name:"diosito"}];
// console.log(pokemon[0].name);

// let prueba = {"pokemon" : [{"num": "001","name": "bulbasaur"},{"num": "002","name": "pikachu"}]};
// console.log(prueba.pokemon[1].name);
