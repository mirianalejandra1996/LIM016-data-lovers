// import { dataPokemones,busquedaInput } from './data.js';
import { dataPokemones,busquedaInput, filtradoPokemones, busquedaDetalle } from './data.js';

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
    
    let pokemonFounded = await busquedaInput(formatNumber(inputBuscar.value.toLowerCase()))
    
    renderCards(pokemonFounded);
    
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
        pokemonClicked(pokemon)
    });

   
   
  };


  

// ----------------------


// Funcion pokemonClicked funcional
// Esta función crea el formato de las tarjetas de cada pokemón, y se mostrarán en su contenedor

export const pokemonClicked = (pokemon) => {
    
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

    // card.addEventListener('click', handleCardItem)
    card.addEventListener('click', viewDetail)

    contenedorFiltrados.append(card);
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



    let prueba = await imprimirDetalle(textArray);
    console.log(`${prueba}`);
}



const imprimirDetalle = async (id) => {

    let pokemonArray = await busquedaDetalle(id)
    let pokemon = pokemonArray[0]
    let tiposPokemon = pokemon.type

    let about = document.createElement('div');
    about.id = "descripcion-total"
    about.classList.add('descripcion-total','shown')

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

    about.append(secc1);

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
    
    for (let tipo of tiposPokemon){
        
        let button = document.createElement('div');
        button.classList.add('btn-tipo');
        button.style.backgroundColor = `${colors[tipo]}`
        button.textContent = `${tipo}`

        listaTipos.append(button)


    }

    listContent2.append(listaTipos);
    
    
    // Sec2. pesos


    // tipo.textContent = `Tipo: `

    // for (let )
    // content2.textContent = pokemon.about
    // secc2.append(content1);


    // <div id="descripcion-total" class="descripcion-total shown">
    //        
    //         <div class="informacion-basica sec-detail">
    //           <h1>Información Básica</h1>
    //           <div class="content">
    //             <ul>
    //               <li>
    //                 Tipo:
    //                 <span>
    //                   <button
    //                     style="background-color: #fbe043"
    //                     value="electric"
    //                     class="btn-tipo"
    //                   >
    //                     Eléctrico
    //                   </button>
    //                 </span>
    //               </li>
    //               <li>Peso: <span>5.0 kg</span></li>
    //               <li>Alto: <span>4.1 m</span></li>
    //               <li>CP: <span>230</span></li>
    //               <li>
    //                 Sexo: <span class="icon-male-svgrepo-com"></span>
    //                 <span class="icon-female-svgrepo-com"></span>
    //               </li>

    //               <li>Caramelos: <span>Pikachu Candy</span></li>
    //             </ul>
    //           </div>
    //         </div>

    //         <div class="debilidades sec-detail">
    //           <h1>Debilidades</h1>
    //           <div class="content">
    //             <button
    //               style="background-color: #f9766c"
    //               value="fire"
    //               class="btn-tipo"
    //             >
    //               Fuego
    //             </button>
    //             <button
    //               style="background-color: #2f9afe"
    //               value="water"
    //               class="btn-tipo"
    //             >
    //               Agua
    //             </button>
    //             <button
    //               style="background-color: #be875e"
    //               value="ground"
    //               class="btn-tipo"
    //             >
    //               Tierra
    //             </button>
    //           </div>
    //         </div>
    //       </div>

}