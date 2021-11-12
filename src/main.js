import { traerPokemones ,filtradoTipos,render, createPokemon, renderPokemon, contadorPokemones } from './data.js';
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
    
    option.onclick = async function (){
        selectText.innerHTML = this.textContent;
        list.classList.toggle('hidden');
        arrowIcon.classList.toggle('rotate');

        let pokemonesFiltrados = await enviarTipos();
        console.log('pokemones filtrados', {pokemonesFiltrados});

        const pokemonesOrdenados = sortBy( pokemonesFiltrados , this.textContent);
        console.log('pokemones ordenados',{pokemonesOrdenados});
        renderPokemon(pokemonesOrdenados);
        
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

    enviarTipos(seleccionados);
  }
}


for (let boton of botonesDebilidad) {
  boton.onclick = function () {

    // this.classList.toggle('seleccionado');
    this.classList.toggle('debilidad-seleccionado');

  }
}


//-----------
async function enviarTipos (){
    const tipoSeleccionados = document.getElementsByClassName('tipo-seleccionado');
    let tipoSelecionados=[];
    for (let btnS of tipoSeleccionados){
        tipoSelecionados.push(btnS.value)
    }
  //  filtradoTipos(tipoSelecionados)
    const pokemones = await filtradoTipos(tipoSelecionados)
    console.log(pokemones)

        for(let pokemon of pokemones){
           createPokemon(pokemon)
           contadorPokemones()
       }

    return pokemones
  }



function sortBy (pokemonesFiltrados, ordenSeleccionado){

    console.log('orden seleccionado es' + ordenSeleccionado);
    console.log('entramooos aquiii');
    // console.log('y mis pokemones? ', {pokemonesFiltrados})
    let resultado = [];

    switch (ordenSeleccionado){

        case "Número inferior":
            resultado = pokemonesFiltrados.sort( (pa , pb) => {return pa.num - pb.num });
            console.log('Nummmm inferior' , {resultado})
            break
        case "Número superior":
            resultado = pokemonesFiltrados.sort( (pa , pb) => {return pb.num - pa.num });
            console.log('Nummmm superior' , {resultado})
            break
        case "A-Z":
            resultado = pokemonesFiltrados.sort( (pa , pb) => {return pa.name.localeCompare(pb.name)});
            console.log('a a la z' , {resultado})
            break
        case "Z-A":
            resultado = pokemonesFiltrados.sort( (pa , pb) => {return pb.name.localeCompare(pa.name)});
            console.log('z a la a' , {resultado})
            break
    }

    console.log(resultado);
    return resultado;

}
  
// sortBy([{nombre: "lucero", edad: "25"}, {nombre: "mirian", edad: "30"}],"Número inferior");
// sortBy([{nombre: "lucero", edad: "25"}, {nombre: "mirian", edad: "30"}],"Número superior");


