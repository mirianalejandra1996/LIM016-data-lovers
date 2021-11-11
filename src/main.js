import { traerPokemones ,filtradoTipos,render} from './data.js';
// import { traerPokemones ,filtradoTipos,render, createPokemon } from './data.js';
// import { filtradoTipos } from '../../src/data.js';
// import { traerPokemones, render} from './data.js';


render();
// Redes sociales (iconos del nav)
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


// Input búsqueda
let inputBuscar = document.getElementById('input-buscar');
let btnBuscar = document.getElementById('btn-buscar');

btnBuscar.addEventListener('click', ()=>{
    traerPokemones(formatNumber(inputBuscar.value.toLowerCase()))
});


function formatNumber(num) {

    if (parseInt(num) < 10){
        return '00' + num;
    }
    else if ( parseInt(num) < 100 ){
        return '0' + num;
    }
    else {
        return num;
    }
}





// Select Box
const selectField = document.getElementById('dropdownSelect');
const selectText = document.getElementById('selectText');
const options = document.getElementsByClassName('options');
const list = document.getElementById('list');
const arrowIcon = document.getElementById('arrowIcon');

selectField.onclick = function(){
    list.classList.toggle('hidden');
    arrowIcon.classList.toggle('rotate');
}

for( let option of options){
    
    option.onclick = function (){
        selectText.innerHTML = this.textContent;
        list.classList.toggle('hidden');
        arrowIcon.classList.toggle('rotate');
    }
}


// Sección de botones
const tipos = document.getElementById('tipos');
const debilidades = document.getElementById('debilidades');

const btnsTipo = document.getElementById('btns-tipo');
const btnsDebilidades = document.getElementById('btns-debilidades');


tipos.addEventListener('click', () => {

    tipos.classList.replace('inactive','active');
    debilidades.classList.replace('active', 'inactive');
    btnsTipo.classList.replace('hidden','shown');
    btnsDebilidades.classList.replace('shown','hidden');
    tipos.classList.replace('hide-bottom-line','show-bottom-line');
    debilidades.classList.replace('show-bottom-line', 'hide-bottom-line');
    
})


debilidades.addEventListener('click', () => {
    
    tipos.classList.replace('active','inactive');
    debilidades.classList.replace('inactive','active');
    btnsTipo.classList.replace('shown','hidden');
    btnsDebilidades.classList.replace('hidden','shown');
    debilidades.classList.replace('hide-bottom-line','show-bottom-line');
    tipos.classList.replace('show-bottom-line', 'hide-bottom-line');
    
})

// --------


let botonesTipo = document.getElementsByClassName('btn-tipo');
let botonesDebilidad = document.getElementsByClassName('btn-debilidad');

for (let boton of botonesTipo) {
  boton.onclick = function () {

    this.classList.toggle('tipo-seleccionado');
    
    let btnsSelects = document.getElementsByClassName('tipo-seleccionado');
    let seleccionados = []

    for (let botonS of btnsSelects){
        seleccionados.push(botonS.value)
    }

    filtradoTipos(seleccionados);
  }
}


for (let boton of botonesDebilidad) {
  boton.onclick = function () {

    // this.classList.toggle('seleccionado');
    this.classList.toggle('debilidad-seleccionado');

  }
}
