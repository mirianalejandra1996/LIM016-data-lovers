// import { dataPokemones,busquedaInput } from './data.js';
// import { types } from '@babel/core';
import { dataPokemones,busquedaInput, filtradoPokemones, obtenerPokemon,obtenerPokemones,obtenerEvoluciones } from './data.js';

// "test": "jest --verbose --coverage",

const colors = {

    fire: '#f9766c',
    grass: '#2cdbb2',
    electric: '#fbe043',
    water: '#2f9afe',
    ground: '#be875e',
    fairy: '#ffbbbb',
    poison: '#8e91fa',
    bug: '#9abf83',
    dragon: '#fba96c',
    psychic: '#fface5',
    flying: '#ffd19e',
    fighting: '#e3c1a8',
    normal: '#e1e2ff',
    steel: '#a1bebe',
    rock: '#e5e5e5',
    dark: '#a1a1a1',
    ghost: '#aa7ab6',
    ice: '#a4eaea',
}

let btnsTypes = document.getElementsByClassName('btn-tipo')
let btnsWeaknesses = document.getElementsByClassName('btn-debilidad')

// console.log('btnsProperties', btnsTypes.length);
// console.log('btnsProperties', btnsWeaknesses.length);

let allBtns = [...btnsTypes,...btnsWeaknesses];
console.log( 'allBtns',allBtns.length)


// while (btnsProperties[0]) {
//     btnsProperties[0].style.backgroundColor = colors[btnsProperties[0].value]
// }



// let contenedorDerecho = document.getElementById('contenedorPokemon');
let contenedorFiltrados = document.getElementById("pokemones-filtrados");
let vistaDetalle = document.getElementById('vista-detalle');

//mostrar hamburguesa
const hamburguesa = document.getElementById("hamburguesa");
const links = document.getElementById("links");
hamburguesa.addEventListener("click", () => {
  hamburguesa.classList.toggle("close");
  links.classList.toggle("mostrarnav");
});
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

        // funcion filtrosSeleccionados
        let pokemonesFiltrados = await filtrosSeleccionados();
        console.log('pokemones filtrados', {pokemonesFiltrados});

        const pokemonesOrdenados = sortBy( pokemonesFiltrados , this.textContent);
        console.log('pokemones ordenados',{pokemonesOrdenados});
    
        renderCards(pokemonesOrdenados);
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
    let pokemonesFiltrados = filtrosSeleccionados()
    renderCards(pokemonesFiltrados)
    
    // filtrosSeleccionados();
}
}


for (let boton of botonesDebilidad) {
    boton.onclick = function () {
        
        this.classList.toggle('debilidad-seleccionado');
        let pokemonesFiltrados = filtrosSeleccionados()
        renderCards(pokemonesFiltrados)

        // filtrosSeleccionados();

  }
}


// ------------


// Input búsqueda
let inputBuscar = document.getElementById('input-buscar');
let btnBuscar = document.getElementById('btn-buscar');

btnBuscar.addEventListener('click', async ()=>{
    
    let arrPokemon = []
    let pokemonFounded = await busquedaInput(formatNumber(inputBuscar.value.toLowerCase()))
    arrPokemon.push(pokemonFounded)

    // renderCards(pokemonFounded);
    renderCards(arrPokemon);
    
});

// Carga todos los pokemones en pantalla recién se carga la página por primera vez
const renderAllCards = async () => {
    let pokemones = await dataPokemones();
    renderCards(pokemones)
  }

renderAllCards();




console.log(colors);


// render es cargar los pokemones en pantalla
const renderCards = (pokemones) => {
    
    const resultadoPokemones = document.getElementById("totalPokemones");
    
    resultadoPokemones.textContent = ''

    if (pokemones.length === 1) {
      resultadoPokemones.textContent = `${pokemones.length} Pokemón`;
    } else {
      resultadoPokemones.textContent = `${pokemones.length} Pokemones`;
    }
    
    contenedorFiltrados.textContent = '';

    // Cargando pokemones con SetTimeOut ?
    
    let arrPokemones = pokemones;
    
    arrPokemones.forEach((pokemon) => {
      const card = crearPokemonCard(pokemon)
      card.addEventListener('click', viewDetail)
      contenedorFiltrados.append(card)
    });

   
   
  };


  

// ----------------------


// Funcion pokemonClicked funcional
// Esta función crea el formato de las tarjetas de cada pokemón, y se mostrarán en su contenedor

export const crearPokemonCard = (pokemon) => {
    
    const card = document.createElement("div");
    card.classList.add("item");
    const img = document.createElement("img");
    img.src = `https://www.serebii.net/pokemongo/pokemon/${pokemon.num}.png`;
    card.append(img);
    const info = document.createElement("div");
    info.classList.add("info");
    card.append(info);
    const infoLeft = document.createElement("div");
    infoLeft.classList.add("info-left");
    info.append(infoLeft);
    const nombrepokemon = document.createElement("h3");
    nombrepokemon.classList.add("namePokemon");
    nombrepokemon.textContent = `${pokemon.name}`;
    infoLeft.append(nombrepokemon);
    const cpPokemon = document.createElement("h3");
    cpPokemon.textContent = `CP: ${pokemon["stats"]["base-attack"]}`;
    infoLeft.append(cpPokemon);



    const typesContainer = document.createElement("div");
    typesContainer.classList.add("icon-container");
    infoLeft.append(typesContainer);

    pokemon.type.forEach((type) => {
        const circleColor = document.createElement("div");
        circleColor.classList.add("circle-type");
        circleColor.style.backgroundColor = colors[type]
        const icon = document.createElement('span');
        icon.classList.add('format-icon');
        icon.classList.add(`icon-${type}`);
        circleColor.append(icon);
        typesContainer.append(circleColor);
      });

    const infoRight = document.createElement("div");
    infoRight.classList.add("info-rigth");
    info.append(infoRight);
    const numpokemon = document.createElement("h3");
    numpokemon.textContent = `#${pokemon.num}`;
    infoRight.append(numpokemon);

    return card
  };
  


// const handleCardItem = (e) => {
//     // console.log(e.target.textContent)
//     // console.log(e.target.textContent)

//     // if (!e.target) return;

//     // const pokemonClicked = e.target;
//     const pokemonClicked = e.currentTarget;
//     // console.log(pokemonClicked.textContent)
//     // event.currentTarget

//     // Si el contenido es un string vacio "" es un falsy
//     if (!pokemonClicked.textContent) return 

//     const textArray = pokemonClicked.textContent.split('#')[1];
//     console.log(textArray);
    

// }

//-----------
const filtrosSeleccionados = async ()=> {


    // ARREGLAR LOS NOMBRES DE LAS VARIABLES
    
    // inputBuscar.value = '';
    const tipoSeleccionados = document.getElementsByClassName('tipo-seleccionado');
    const debilidadSeleccionados = document.getElementsByClassName('debilidad-seleccionado');

    let tipoSelecionados=[];
    for (let btnS of tipoSeleccionados){
        tipoSelecionados.push(btnS.value)
    }

    let debilidadSelecionados=[];
    for (let btnS of debilidadSeleccionados){
        debilidadSelecionados.push(btnS.value)
    }
    
    const pokemones = await dataPokemones();

    console.log('Mirian', pokemones)
    const pokemonesFiltrados = await filtradoPokemones(pokemones, tipoSelecionados , debilidadSelecionados);

    // ! No sé si esto debería imprimir aquí de una vez
    renderCards(pokemonesFiltrados);

    return pokemonesFiltrados
  }



function sortBy (pokemonesFiltrados, ordenSeleccionado){

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

const btnClean = document.getElementById('btn-clean');
btnClean.addEventListener('click', limpiarFiltros)


function limpiarFiltros () {

    inputBuscar.value=''
    let filtrosTipos = document.getElementsByClassName('tipo-seleccionado'); 
    let filtrosDebilidades = document.getElementsByClassName('debilidad-seleccionado')
    
    while (filtrosTipos[0]) {
        filtrosTipos[0].classList.remove('tipo-seleccionado')
    }

    while (filtrosDebilidades[0]) {
        filtrosDebilidades[0].classList.remove('debilidad-seleccionado')
    }

    filtrosSeleccionados()
}

const viewDetail = async (e) => {

    const pokemonClicked = e.currentTarget;
    console.log(pokemonClicked.textContent)

    // Si el contenido es un string vacio "" es un falsy
    if (!pokemonClicked.textContent) return 

    const textArray = pokemonClicked.textContent.split('#')[1];
    console.log(textArray);

    let cabecera = document.getElementById('upperSection')
    cabecera.classList.add('hidden')

    let filterContainer = document.getElementById('left-container');
    filterContainer.classList.add('hidden');

    // Se realiza un forzado para que los pokemones filtrados no estén visibles
    contenedorFiltrados.style.display = 'none'

    let vistaDetalle = document.getElementById('vista-detalle');
    vistaDetalle.classList.remove('hidden')

    let leftDetalle = document.getElementById('left-detalle')
    leftDetalle.classList.remove('hidden')

    imprimirDetalle(textArray);
   
}


const imprimirDetalle = async (id) => {
    
    let pokemon = await obtenerPokemon(id)
    if(!pokemon) return
    detailRight(pokemon)




    let leftSection = document.getElementById('left-detalle')
    
    // let leftDetail = document.createElement('div');

    // // creación de botón para volver al pokedex
    // let backPokedex = document.createElement('div');
    // backPokedex.classList.add('large-btn')
    
    // let btnText = document.createElement('span')
    // btnText.textContent = 'Volver a Pokedex'
    // backPokedex.append(btnText)
    
    // let btnIcon = document.createElement('span');
    // btnIcon.classList.add('icon-pokebola-recta')
    // backPokedex.append(btnIcon)
    
    // leftDetail.append(backPokedex);
    
    
    
    // ---------------------


    // Creación de img para el pokemón
    // let leftImg = document.createElement('div')
    // leftImg.classList.add('left-img')
    // leftImg.id = 'left-img'
    // leftSection.append(leftImg)
    

    let pokemonDetail = document.createElement('div')
    pokemonDetail.classList.add('detail-pokemon')
    // pokemonDetail.id = 'detail-pokemon'
    // leftImg.append(pokemonDetail)
    
    leftImg.append(pokemonDetail)


    let imgCentered = document.createElement('div')
    imgCentered.id = 'big-img'

    let imgPokemon = document.createElement('img')
    // imgPokemon.src = 'https://www.serebii.net/pokemongo/pokemon/025.png'
    imgPokemon.src = `https://www.serebii.net/pokemongo/pokemon/${pokemon.num}.png`
    imgPokemon.style.width = '150px'

    imgCentered.append(imgPokemon)
    

    // Textos Identificadores de la imagen del pokemon
    let identifier = document.createElement('div')
    identifier.id = 'identifier'

    let namePokemon = document.createElement('span')
    namePokemon.id = 'namePokemon'
    namePokemon.textContent = `${pokemon.name}`

    let idPokemon = document.createElement('span')
    idPokemon.id = 'idPokemon'
    idPokemon.textContent = `#${pokemon.num}`

    identifier.append(namePokemon)
    identifier.append(idPokemon)


    pokemonDetail.append(imgCentered)
    pokemonDetail.append(identifier)

    leftSection.append(leftImg)
   

//Crear Seccion Evoluciones

let contenedorEvoluciones=document.createElement('div')
contenedorEvoluciones.id='container-evoluciones'
contenedorEvoluciones.classList.add('pokemones-filtrados')

//obtenemos array de las evoluciones del pokemon
const evoluciones = obtenerEvoluciones(pokemon) 
obtenerPokemones(evoluciones) 
    .then((pokemones) => {
        for(pokemon of pokemones){
            //Reutilizamos la funcion crear pokemon card
            const card = crearPokemonCard(pokemon)
            contenedorEvoluciones.append(card)
            
        }
    })


seccionEvoluciones.append(contenedorEvoluciones)
vistaDetalle.append(seccionEvoluciones)







}

function detailRight (pokemon) {

    let tiposPokemon = pokemon.type
    let debilidadesPokemon = pokemon.weaknesses

    console.log('debilidades', debilidadesPokemon)

    // Sección 1
    let secc1 = document.createElement('div')
    secc1.classList.add('about','sec-detail')
    let title1 = document.createElement('h1');
    title1.textContent = 'Descripción'
    secc1.append(title1);

    let content1 = document.createElement('div')
    content1.classList.add('content')
    content1.textContent = pokemon.about
    secc1.append(content1);

    // Sección 2
    let secc2 = document.createElement('div')
    secc2.classList.add('informacion-basica','sec-detail')
    let title2 = document.createElement('h1');
    title2.textContent = 'Información Básica'
    secc2.append(title2);

    let content2 = document.createElement('div')
    content2.classList.add('content')

    let listContent2 = document.createElement('ul');

    // Sec2. tipos

    let listaTipos = document.createElement('li');

    // Contenedor interno del li 
    let liContent = document.createElement('div');


    liContent.classList.add('horizontal')

    listaTipos.append(liContent) //ESTÁ BIEN!

    // DIV PARA HACER EL TITULO DE TIPOS
    let typeTitle = document.createElement('div')
    typeTitle.textContent = 'Tipo:'
    liContent.append(typeTitle)


    // Contenedor de los botones de tipo
    let typesContainer = document.createElement('div');
    typesContainer.classList.add('horizontal');


    for (let tipo of tiposPokemon){
        
        let button = document.createElement('div');
        button.classList.add('btn-detail')
        button.style.backgroundColor = `${colors[tipo]}`
        button.textContent = `${tipo}`

        typesContainer.append(button)

    }

    liContent.append(typesContainer)

    listContent2.append(listaTipos);
    
    // Sec2. pesos
    let listaPeso = document.createElement('li')
    listaPeso.innerHTML=`Peso: <span>${pokemon["size"]["weight"]}</span>`

    listContent2.append(listaPeso)

    // Sec2. Alto
    let listaAlto = document.createElement('li')
    listaAlto.innerHTML=`Alto: <span>${pokemon["size"]["height"]}</span>`

    listContent2.append(listaAlto)

    // Sec2. CP
    let listaCP= document.createElement('li')
    listaCP.innerHTML=`CP: <span>${pokemon["stats"]["base-attack"]}</span>`

    listContent2.append(listaCP)

    // Sec2. Caramelos
    let listaCaramelos= document.createElement('li')

    listaCaramelos.innerHTML=`Caramelos: <span class="capitalize">${pokemon["evolution"]["candy"]}</span>`

    listContent2.append(listaCaramelos)

    content2.append(listContent2)
    secc2.append(content2)


    // Sección 3
    let secc3 = document.createElement('div')
    secc3.classList.add('debilidades','sec-detail')
    let title3 = document.createElement('h1');
    title3.textContent = 'Debilidades'
    secc3.append(title3);
    
    let content3 = document.createElement('div')
    content3.classList.add('content')
    content3.classList.add('horizontal')
    
    for (let debilidad of debilidadesPokemon) {
        console.log(debilidad);

        
        let button = document.createElement('div');
        button.classList.add('btn-detail')
        button.style.backgroundColor = `${colors[debilidad]}`
        button.textContent = `${debilidad}`

        content3.append(button)
        
    }
    
    secc3.append(content3);

    seccionDescripcion.append(secc1)
    seccionDescripcion.append(secc2)
    seccionDescripcion.append(secc3)

    vistaDetalle.append(seccionDescripcion)
}

// Sección de botones detalles  evoluciones y stats
const leftImg = document.getElementById('left-img')

const btnDetalles = document.getElementById('detalles');
const btnEvoluciones = document.getElementById('evoluciones');
const btnStats = document.getElementById('stats');
const seccionDescripcion = document.getElementById('descripcion-total');
const seccionEvoluciones = document.getElementById('seccion-evoluciones');
const seccionStats=document.getElementById('seccion-stats')

//Boton Detalle vista Detalle Pokemon
btnDetalles.addEventListener('click', () => {

    btnDetalles.classList.replace('inactive','active');
    btnEvoluciones.classList.replace('active', 'inactive');
    btnStats.classList.replace('active','inactive')
    //secciones 
    seccionDescripcion.classList.replace('hidden','shown');
    seccionEvoluciones.classList.replace('shown','hidden');
    seccionStats.classList.replace('shown','hidden');
     // lineas debajo del nombre
     btnDetalles.classList.replace('hide-bottom-line','show-bottom-line');
     btnEvoluciones.classList.replace('show-bottom-line', 'hide-bottom-line');
     btnStats.classList.replace('show-bottom-line', 'hide-bottom-line');
    
})

//Boton Evoluciones vista Detalle Pokemon
btnEvoluciones.addEventListener('click', () => {
    
    btnEvoluciones.classList.replace('inactive','active');
    btnStats.classList.replace('active','inactive')
    btnDetalles.classList.replace('active','inactive');
    //secciones 
    seccionEvoluciones.classList.replace('hidden','shown');
    seccionDescripcion.classList.replace('shown','hidden');
    seccionStats.classList.replace('shown','hidden');
      // lineas debajo del nombre
    btnEvoluciones.classList.replace('hide-bottom-line','show-bottom-line');
    btnDetalles.classList.replace('show-bottom-line', 'hide-bottom-line');
    btnStats.classList.replace('show-bottom-line', 'hide-bottom-line');
    
})

//Boton Stats vista Detalle Pokemon
btnStats.addEventListener('click', () => {
    
    btnStats.classList.replace('inactive','active');
    btnEvoluciones.classList.replace('active','inactive')
    btnDetalles.classList.replace('active','inactive');
     //secciones 
    seccionStats.classList.replace('hidden','shown');
    seccionEvoluciones.classList.replace('shown','hidden');
    seccionDescripcion.classList.replace('shown','hidden');
    // lineas debajo del nombre
    btnStats.classList.replace('hide-bottom-line','show-bottom-line');
    btnEvoluciones.classList.replace('show-bottom-line', 'hide-bottom-line');
    btnDetalles.classList.replace('show-bottom-line', 'hide-bottom-line');
    
})



// Sección volver a vista lista

const backPokedexBtn = document.getElementById('backPokedex');

backPokedexBtn.addEventListener('click', volverPokedex)

function volverPokedex () {

    // El camino fácil
    // location.reload()


    // El camino rebuscado
    limpiarFiltros()
    let cabecera = document.getElementById('upperSection')
    cabecera.classList.remove('hidden')

    let filterContainer = document.getElementById('left-container');
    filterContainer.classList.remove('hidden');

    contenedorFiltrados.style.display = ''

    seccionDescripcion.textContent = ''
    seccionEvoluciones.textContent = ''
    leftImg.textContent = ''

    let vistaDetalle = document.getElementById('vista-detalle');
    vistaDetalle.classList.add('hidden')

    let leftDetalle = document.getElementById('left-detalle')
    leftDetalle.classList.add('hidden')

}