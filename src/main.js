// import { dataPokemones,busquedaInput } from './data.js';
import { dataPokemones,busquedaInput, filtradoPokemones } from './data.js';

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




let contenedorPokemon = document.getElementById("pokemones-filtrados");

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
    
    contenedorPokemon.textContent = '';

    // Cargando pokemones con SetTimeOut ?
    
    let arrPokemones = pokemones;
    // console.log('linea 141 ',arrPokemones)
    
    arrPokemones.forEach((pokemon) => {
        cardPokemon(pokemon)
    });

   
   
  };


  

// ----------------------


// Funcion cardPokemon funcional
// Esta función crea el formato de las tarjetas de cada pokemón, y se mostrarán en su contenedor

export const cardPokemon = (pokemon) => {
    
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
        // icon.classList.add('icon-dark');
        icon.classList.add(`icon-${type}`);
        circleColor.append(icon);
        typesContainer.append(circleColor);
      });
      




    const infoRigth = document.createElement("div");
    infoRigth.classList.add("info-rigth");
    info.append(infoRigth);
    const numpokemon = document.createElement("h3");
    numpokemon.textContent = `#${pokemon.num}`;
    infoRigth.append(numpokemon);

    contenedorPokemon.append(card);
  };

// export const cardPokemon = (pokemon) => {
    
//     const card = document.createElement("div");
//     card.classList.add("item");
//     const img = document.createElement("img");
//     img.src = `https://www.serebii.net/pokemongo/pokemon/${pokemon.num}.png`;
//     card.append(img);
//     const info = document.createElement("div");
//     info.classList.add("info");
//     card.append(info);
//     const infoLeft = document.createElement("div");
//     infoLeft.classList.add("info-left");
//     info.append(infoLeft);
//     const nombrepokemon = document.createElement("h3");
//     nombrepokemon.classList.add("namePokemon");
//     nombrepokemon.textContent = `${pokemon.name}`;
//     infoLeft.append(nombrepokemon);
//     const cpPokemon = document.createElement("h3");
//     cpPokemon.textContent = `CP: ${pokemon["stats"]["base-attack"]}`;
//     infoLeft.append(cpPokemon);


//     const icon = document.createElement("div");
//     icon.classList.add("icon");
//     infoLeft.append(icon);
//     const span = document.createElement("span");
//     span.classList.add("icon-circle-svgrepo-com");




//     icon.append(span);
//     const infoRigth = document.createElement("div");
//     infoRigth.classList.add("info-rigth");
//     info.append(infoRigth);
//     const numpokemon = document.createElement("h3");
//     numpokemon.textContent = `${pokemon.num}`;
//     infoRigth.append(numpokemon);

//     contenedorPokemon.append(card);
//   };



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
    
    while (filtrosTipos[0]) { ['tierra','agua']
        filtrosTipos[0].classList.remove('tipo-seleccionado')
    }

    while (filtrosDebilidades[0]) {
        filtrosDebilidades[0].classList.remove('debilidad-seleccionado')
    }

    filtrosSeleccionados()

    // filtrosTipos.forEach( btn => btn.classList.remove('tipo-seleccionado'))

    // .btn-tipo.tipo-seleccionado
    // btn-tipo tipo-seleccionado
}



const iconsTypes = {
    fire: '',
    grass: '',
    electric: '',
    water: '',
    ground: '',
    fairy: '',
    poison: '',
    bug: '',
    dragon: '',
    psychic: '',
    flying: '',
    fighting: '',
    normal: '',
    steel: '',
    rock: '',
    dark: '',
    ghost: '',
    ice: '',
}

console.log(iconsTypes)