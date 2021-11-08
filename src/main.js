import { traerPokemones } from './data.js';

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
    traerPokemones(formatNumber(inputBuscar.value))
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

    tipos.classList.toggle('active');
    debilidades.classList.toggle('active');
    btnsDebilidades.classList.toggle('hidden');
    btnsTipo.classList.toggle('hidden');

})

