import {
  dataPokemones,
  filtradoPokemones,
  obtenerPokemon,
  obtenerPokemones,
  obtenerEvoluciones,
  sortBy,
  buscarPokemones,
} from "./data.js";

const colors = {
  fire: "#f9766c",
  grass: "#2cdbb2",
  electric: "#fbe043",
  water: "#2f9afe",
  ground: "#be875e",
  fairy: "#ffbbbb",
  poison: "#8e91fa",
  bug: "#9abf83",
  dragon: "#fba96c",
  psychic: "#fface5",
  flying: "#ffd19e",
  fighting: "#e3c1a8",
  normal: "#e1e2ff",
  steel: "#a1bebe",
  rock: "#e5e5e5",
  dark: "#a1a1a1",
  ghost: "#aa7ab6",
  ice: "#a4eaea",
};

let btnsTypes = document.getElementsByClassName("btn-tipo");
let btnsWeaknesses = document.getElementsByClassName("btn-debilidad");

let allBtns = [...btnsTypes, ...btnsWeaknesses];

for (let btn of allBtns) {
  let property = btn.value;
  btn.style.backgroundColor = colors[property];
}

// let contenedorDerecho = document.getElementById('contenedorPokemon');
let contenedorFiltrados = document.getElementById("pokemones-filtrados");
let vistaDetalle = document.getElementById("vista-detalle");

//mostrar hamburguesa
const hamburguesa = document.getElementById("hamburguesa");
const links = document.getElementById("links");
hamburguesa.addEventListener("click", () => {
  hamburguesa.classList.toggle("close");
  links.classList.toggle("mostrarnav");
});
// Select Box
const selectField = document.getElementById("dropdownSelect");
const selectText = document.getElementById("selectText");
const options = document.getElementsByClassName("options");
const list = document.getElementById("list");
const arrowIcon = document.getElementById("arrowIcon");

selectField.onclick = function () {
  list.classList.toggle("hidden");
  arrowIcon.classList.toggle("rotate");
};

for (let option of options) {
  option.onclick = async function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hidden");
    arrowIcon.classList.toggle("rotate");

    // funcion filtrosSeleccionados
    let pokemonesFiltrados = await filtrosSeleccionados();

    const pokemonesOrdenados = sortBy(pokemonesFiltrados, this.textContent);

    renderCards(pokemonesOrdenados);
  };
}

// Sección de botones
const tipos = document.getElementById("tipos");
const debilidades = document.getElementById("debilidades");

const btnsTipo = document.getElementById("btns-tipo");
const btnsDebilidades = document.getElementById("btns-debilidades");

tipos.addEventListener("click", () => {
  tipos.classList.replace("inactive", "active");
  debilidades.classList.replace("active", "inactive");
  btnsTipo.classList.replace("hidden", "shown");
  btnsDebilidades.classList.replace("shown", "hidden");
  tipos.classList.replace("hide-bottom-line", "show-bottom-line");
  debilidades.classList.replace("show-bottom-line", "hide-bottom-line");
});

debilidades.addEventListener("click", () => {
  tipos.classList.replace("active", "inactive");
  debilidades.classList.replace("inactive", "active");
  btnsTipo.classList.replace("shown", "hidden");
  btnsDebilidades.classList.replace("hidden", "shown");
  debilidades.classList.replace("hide-bottom-line", "show-bottom-line");
  tipos.classList.replace("show-bottom-line", "hide-bottom-line");
});

// --------

let botonesTipo = document.getElementsByClassName("btn-tipo");
let botonesDebilidad = document.getElementsByClassName("btn-debilidad");

for (let boton of botonesTipo) {
  boton.onclick = function () {
    this.classList.toggle("tipo-seleccionado");
    let pokemonesFiltrados = filtrosSeleccionados();
    renderCards(pokemonesFiltrados);

    // filtrosSeleccionados();
  };
}

for (let boton of botonesDebilidad) {
  boton.onclick = function () {
    this.classList.toggle("debilidad-seleccionado");
    let pokemonesFiltrados = filtrosSeleccionados();
    renderCards(pokemonesFiltrados);

    // filtrosSeleccionados();
  };
}

// ------------

// Input búsqueda
let inputBuscar = document.getElementById("input-buscar");
let btnBuscar = document.getElementById("btn-buscar");
let errMsg = document.getElementById("errMsg");

btnBuscar.addEventListener("click", async () => {
  if (inputBuscar.value === "") {
    errMsg.textContent = "Por favor ingresar dato";
  } else {
    errMsg.textContent = "";

    // let arrPokemon = [];
    // let pokemonFounded = await busquedaInput(formatNumber(inputBuscar.value.toLowerCase()))
    let pokemonsFounded = await buscarPokemones(
      formatNumber(inputBuscar.value.toLowerCase())
    );
    // arrPokemon.push(pokemonFounded);

    // renderCards(pokemonFounded);
    renderCards(pokemonsFounded);
  }
});

// Carga todos los pokemones en pantalla recién se carga la página por primera vez
const renderAllCards = async () => {
  let pokemones = await dataPokemones();
  renderCards(pokemones);
};

renderAllCards();

// render es cargar los pokemones en pantalla
const renderCards = (pokemones) => {
  const resultadoPokemones = document.getElementById("totalPokemones");

  resultadoPokemones.textContent = "";

  if (pokemones.length === 1) {
    resultadoPokemones.textContent = `${pokemones.length} Pokemón`;
  } else {
    resultadoPokemones.textContent = `${pokemones.length} Pokemones`;
  }

  contenedorFiltrados.textContent = "";

  // Cargando pokemones con SetTimeOut ?

  let arrPokemones = pokemones;

  arrPokemones.forEach((pokemon) => {
    const card = crearPokemonCard(pokemon);
    card.addEventListener("click", viewDetail);
    contenedorFiltrados.append(card);
  });
};

// ----------------------

// Esta función crearPokemonCard crea el formato de las tarjetas de cada pokemón, y se mostrarán en su contenedor
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

  // Impresión de las bolitas de tipos del pokemon
  pokemon.type.forEach((type) => {
    const circleColor = document.createElement("div");
    circleColor.classList.add("circle-type");
    circleColor.style.backgroundColor = colors[type];
    const icon = document.createElement("span");
    icon.classList.add("format-icon");
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

  return card;
};

// En caso de que el pokemón no tenga evoluciones relacionadas, imprimirá en pantalla que no evoluciona
export const crearCardSinEvoluciones = () => {
  const mensaje = document.createElement("h3");
  mensaje.classList.add("namePokemon");
  mensaje.textContent = `Este pokémon no evoluciona.`;

  return mensaje;
};

//-----------
const filtrosSeleccionados = async () => {
  const tipoSeleccionados =
    document.getElementsByClassName("tipo-seleccionado");
  const debilidadSeleccionados = document.getElementsByClassName(
    "debilidad-seleccionado"
  );

  let tipoSelecionados = [];
  for (let btnS of tipoSeleccionados) {
    tipoSelecionados.push(btnS.value);
  }

  let debilidadSelecionados = [];
  for (let btnS of debilidadSeleccionados) {
    debilidadSelecionados.push(btnS.value);
  }

  const pokemones = await dataPokemones();

  const pokemonesFiltrados = await filtradoPokemones(
    pokemones,
    tipoSelecionados,
    debilidadSelecionados
  );

  renderCards(pokemonesFiltrados);

  return pokemonesFiltrados;
};

// Función para obtener un formato al ingresar algún número (ejemplo: 1 retorna 001)
function formatNumber(num) {
  if (parseInt(num) < 10) {
    return "00" + num;
  } else if (parseInt(num) < 100) {
    return "0" + num;
  } else {
    return num;
  }
}

const btnCleanMobile = document.getElementById("btn-clean-mobile");
const btnCleanDesktop = document.getElementById("btn-clean-desktop");
btnCleanMobile.addEventListener("click", limpiarFiltros);
btnCleanDesktop.addEventListener("click", limpiarFiltros);

function limpiarFiltros() {
  inputBuscar.value = "";
  let filtrosTipos = document.getElementsByClassName("tipo-seleccionado");
  let filtrosDebilidades = document.getElementsByClassName(
    "debilidad-seleccionado"
  );

  while (filtrosTipos[0]) {
    filtrosTipos[0].classList.remove("tipo-seleccionado");
  }

  while (filtrosDebilidades[0]) {
    filtrosDebilidades[0].classList.remove("debilidad-seleccionado");
  }

  filtrosSeleccionados();
}

const viewDetail = async (e) => {
  const pokemonClicked = e.currentTarget;

  // Si el contenido es un string vacio "" es un falsy
  if (!pokemonClicked.textContent) return;

  const textArray = pokemonClicked.textContent.split("#")[1];

  let cabecera = document.getElementById("upperSection");
  cabecera.classList.add("hidden");

  let secFilter = document.getElementById("sect-btn-filter");
  secFilter.classList.add("hidden");
  mostrarContenedorBuscador();

  let filterContainer = document.getElementById("left-container");
  filterContainer.classList.add("hidden");

  // Se realiza un forzado para que los pokemones filtrados no estén visibles
  contenedorFiltrados.style.display = "none";

  // Nuevo
  let buscador = document.getElementById("buscador");
  //buscador.style.display = "block";
  buscador.classList.add('shown')

  let vistaDetalle = document.getElementById("vista-detalle");
  vistaDetalle.classList.remove('hidden');

  let leftDetalle = document.getElementById("left-detalle");
  leftDetalle.classList.remove("hidden");

  imprimirDetalle(textArray);
};

// Esta función imprimirá en pantalla los detalles del pokemón que haya sido seleccionado
const imprimirDetalle = async (id) => {
  let pokemon = await obtenerPokemon(id);
  if (!pokemon) return;
  detailRight(pokemon);
  detailLeft(pokemon);
  evolutions(pokemon);
  crearChart(pokemon);
};

function detailRight(pokemon) {
  let tiposPokemon = pokemon.type;
  let debilidadesPokemon = pokemon.weaknesses;

  // Sección 1
  let secc1 = document.createElement("div");
  secc1.classList.add("about", "sec-detail");
  let title1 = document.createElement("h1");
  title1.textContent = "Descripción";
  secc1.append(title1);

  let content1 = document.createElement("div");
  content1.classList.add("content");
  content1.textContent = pokemon.about;
  secc1.append(content1);

  // Sección 2
  let secc2 = document.createElement("div");
  secc2.classList.add("informacion-basica", "sec-detail");
  let title2 = document.createElement("h1");
  title2.textContent = "Información Básica";
  secc2.append(title2);

  let content2 = document.createElement("div");
  content2.classList.add("content");

  let listContent2 = document.createElement("ul");

  // Sec2. tipos

  let listaTipos = document.createElement("li");

  // Contenedor interno del li
  let liContent = document.createElement("div");

  liContent.classList.add("horizontal");

  listaTipos.append(liContent); //ESTÁ BIEN!

  // DIV PARA HACER EL TITULO DE TIPOS
  let typeTitle = document.createElement("div");
  typeTitle.textContent = "Tipo:";
  liContent.append(typeTitle);

  // Contenedor de los botones de tipo
  let typesContainer = document.createElement("div");
  typesContainer.classList.add("horizontal");

  for (let tipo of tiposPokemon) {
    let button = document.createElement("div");
    button.classList.add("btn-detail");
    button.style.backgroundColor = `${colors[tipo]}`;
    button.textContent = `${tipo}`;

    typesContainer.append(button);
  }

  liContent.append(typesContainer);

  listContent2.append(listaTipos);

  // Sec2. pesos
  let listaPeso = document.createElement("li");
  listaPeso.innerHTML = `Peso: <span>${pokemon["size"]["weight"]}</span>`;

  listContent2.append(listaPeso);

  // Sec2. Alto
  let listaAlto = document.createElement("li");
  listaAlto.innerHTML = `Alto: <span>${pokemon["size"]["height"]}</span>`;

  listContent2.append(listaAlto);

  // Sec2. CP
  let listaCP = document.createElement("li");
  listaCP.innerHTML = `CP: <span>${pokemon["stats"]["base-attack"]}</span>`;

  listContent2.append(listaCP);

  // Sec2. Caramelos
  let listaCaramelos = document.createElement("li");

  listaCaramelos.innerHTML = `Caramelos: <span class="capitalize">${pokemon["evolution"]["candy"]}</span>`;

  listContent2.append(listaCaramelos);

  content2.append(listContent2);
  secc2.append(content2);

  // Sección 3
  let secc3 = document.createElement("div");
  secc3.classList.add("debilidades", "sec-detail");
  let title3 = document.createElement("h1");
  title3.textContent = "Debilidades";
  secc3.append(title3);

  let content3 = document.createElement("div");
  content3.classList.add("content");
  content3.classList.add("horizontal");

  for (let debilidad of debilidadesPokemon) {
    let button = document.createElement("div");
    button.classList.add("btn-detail");
    button.style.backgroundColor = `${colors[debilidad]}`;
    button.textContent = `${debilidad}`;

    content3.append(button);
  }

  secc3.append(content3);

  seccionDescripcion.append(secc1);
  seccionDescripcion.append(secc2);
  seccionDescripcion.append(secc3);

  vistaDetalle.append(seccionDescripcion);
}

function detailLeft(pokemon) {
  let leftSection = document.getElementById("left-detalle");

  let pokemonDetail = document.createElement("div");
  pokemonDetail.classList.add("detail-pokemon");

  leftImg.append(pokemonDetail);

  let imgCentered = document.createElement("div");
  imgCentered.id = "big-img";

  let imgPokemon = document.createElement("img");
  imgPokemon.src = `https://www.serebii.net/pokemongo/pokemon/${pokemon.num}.png`;
  imgPokemon.style.width = "150px";

  imgCentered.append(imgPokemon);

  // Textos Identificadores de la imagen del pokemon
  let identifier = document.createElement("div");
  identifier.id = "identifier";

  let namePokemon = document.createElement("span");
  namePokemon.id = "namePokemon";
  namePokemon.textContent = `${pokemon.name}`;

  let idPokemon = document.createElement("span");
  idPokemon.id = "idPokemon";
  idPokemon.textContent = `#${pokemon.num}`;

  identifier.append(namePokemon);
  identifier.append(idPokemon);

  pokemonDetail.append(imgCentered);
  pokemonDetail.append(identifier);

  leftSection.append(leftImg);
}

function evolutions(pokemon) {
  //Crear Seccion Evoluciones

  let contenedorEvoluciones = document.createElement("div");
  contenedorEvoluciones.id = "container-evoluciones";
  contenedorEvoluciones.classList.add("pokemones-filtrados");

  //obtenemos array de las evoluciones del pokemon
  const evoluciones = obtenerEvoluciones(pokemon);
  if (evoluciones.length == 1) {
    obtenerPokemones(evoluciones).then((pokemones) => {
      for (pokemon of pokemones) {
        //Reutilizamos la funcion crear pokemon card
        const card = crearPokemonCard(pokemon);
        contenedorEvoluciones.append(card);
        const cardSinEvoluciones = crearCardSinEvoluciones();
        seccionEvoluciones.prepend(cardSinEvoluciones);
      }
    });
  } else {
    obtenerPokemones(evoluciones).then((pokemones) => {
      for (pokemon of pokemones) {
        //Reutilizamos la funcion crear pokemon card
        const card = crearPokemonCard(pokemon);
        card.addEventListener("click", refreshViewDetail);
        contenedorEvoluciones.append(card);
      }
    });
  }

  seccionEvoluciones.append(contenedorEvoluciones);
  vistaDetalle.append(seccionEvoluciones);
}

// Sección de botones detalles  evoluciones y stats
const leftImg = document.getElementById("left-img");

const btnDetalles = document.getElementById("detalles");
const btnEvoluciones = document.getElementById("evoluciones");
const btnStats = document.getElementById("stats");
const seccionDescripcion = document.getElementById("descripcion-total");
const seccionEvoluciones = document.getElementById("seccion-evoluciones");
const seccionStats = document.getElementById("seccion-stats");
const canvas = document.getElementById("chart")
//Boton Detalle vista Detalle Pokemon
btnDetalles.addEventListener("click", () => {
  irADetalle();
});

//Boton Evoluciones vista Detalle Pokemon
btnEvoluciones.addEventListener("click", () => {
  btnEvoluciones.classList.replace("inactive", "active");
  btnStats.classList.replace("active", "inactive");
  btnDetalles.classList.replace("active", "inactive");
  //secciones
  seccionEvoluciones.classList.replace("hidden", "shown");
  seccionDescripcion.classList.replace("shown", "hidden");
  seccionStats.classList.replace("shown", "hidden");
  // lineas debajo del nombre
  btnEvoluciones.classList.replace("hide-bottom-line", "show-bottom-line");
  btnDetalles.classList.replace("show-bottom-line", "hide-bottom-line");
  btnStats.classList.replace("show-bottom-line", "hide-bottom-line");
});

//Boton Stats vista Detalle Pokemon
btnStats.addEventListener("click", () => {
  btnStats.classList.replace("inactive", "active");
  btnEvoluciones.classList.replace("active", "inactive");
  btnDetalles.classList.replace("active", "inactive");
  //secciones
  seccionStats.classList.replace("hidden", "shown");
  seccionEvoluciones.classList.replace("shown", "hidden");
  seccionDescripcion.classList.replace("shown", "hidden");
  // lineas debajo del nombre
  btnStats.classList.replace("hide-bottom-line", "show-bottom-line");
  btnEvoluciones.classList.replace("show-bottom-line", "hide-bottom-line");
  btnDetalles.classList.replace("show-bottom-line", "hide-bottom-line");
});

// Sección volver a vista lista

const backPokedexBtn = document.getElementById("backPokedex");

backPokedexBtn.addEventListener("click", volverPokedex);

function volverPokedex() {
  // El camino fácil
  // location.reload()

  // El camino rebuscado
  limpiarFiltros();
  let cabecera = document.getElementById("upperSection");
  cabecera.classList.remove("hidden");

  let filterContainer = document.getElementById("left-container");
  filterContainer.classList.remove("hidden");

  contenedorFiltrados.style.display = "";

  seccionDescripcion.textContent = "";
  seccionEvoluciones.textContent = "";
  leftImg.textContent = "";
  irADetalle();
  let vistaDetalle = document.getElementById("vista-detalle");
  vistaDetalle.classList.add("hidden");

  let leftDetalle = document.getElementById("left-detalle");
  leftDetalle.classList.add("hidden");

  let sectBtnFilter = document.getElementById("sect-btn-filter");
  sectBtnFilter.classList.remove("hidden");

  let buscador = document.getElementById("buscador");
  buscador.classList.remove("shown");
  //buscador.classList.add("shown");

  // No funciona
  // if (buscador.style.display === "block") {
  //   buscador.style.display === "none";
  // } else {
  //   buscador.style.display === "block";
  // }
}

// }

// -------------

const btnShowFilter = document.getElementById("btn-filter");
btnShowFilter.addEventListener("click", mostrarContenedorBuscador);

function mostrarContenedorBuscador() {
  // ERES TU
  const sectionFilter = document.getElementById("buscador");
  // sectionFilter.classList.add("shown");
  sectionFilter.classList.toggle("shown");
}

// Para poder visualizar los detalles del pokemon seleccionado en la sección de evoluciones
// de X pokemón
function refreshViewDetail(e) {
  seccionDescripcion.textContent = "";
  seccionEvoluciones.textContent = "";
  leftImg.textContent = "";
  irADetalle();
  viewDetail(e);
}

function irADetalle() {
  btnDetalles.classList.replace("inactive", "active");
  btnEvoluciones.classList.replace("active", "inactive");
  btnStats.classList.replace("active", "inactive");
  //secciones
  seccionDescripcion.classList.replace("hidden", "shown");
  seccionEvoluciones.classList.replace("shown", "hidden");
  seccionStats.classList.replace("shown", "hidden");
  // lineas debajo del nombre
  btnDetalles.classList.replace("hide-bottom-line", "show-bottom-line");
  btnEvoluciones.classList.replace("show-bottom-line", "hide-bottom-line");
  btnStats.classList.replace("show-bottom-line", "hide-bottom-line");
}

//Implementando Chart js
function crearChart(pokemon){
  const ctx = document.getElementById('chart').getContext('2d');
  if (window.grafica) {
    window.grafica.clear();
    window.grafica.destroy();
}

var barStroke = ctx.createLinearGradient(700, 0, 120, 0);
barStroke.addColorStop(0, 'rgba(0, 255, 188, 0.6)');
barStroke.addColorStop(1, 'rgba(0, 205, 194, 0.6)');

var barFill = ctx.createLinearGradient(700, 0, 120, 0);
barFill.addColorStop(0, "rgba(0, 255, 188, 0.6)");
barFill.addColorStop(1, "rgba(0, 205, 194, 0.6)");

var barFillHover = ctx.createLinearGradient(700, 0, 120, 0);
barFillHover.addColorStop(0, "rgba(0, 255, 188, 0.8)");
barFillHover.addColorStop(1, "rgba(0, 205, 194, 0.6)");



  window.grafica = new Chart(ctx, {
      type: 'bar',
      data: {
          type: 'horizontalBar',
          labels: ['ataque', 'defensa', 'estamina', 'maximo-cp', 'maximo-hp'],
          datasets: [{
              label: ' ESTADISTICAS POKEMON',
              data: [`${pokemon.stats['base-attack']}`, `${pokemon.stats['base-defense']}`, `${pokemon.stats['base-stamina']}`, `${pokemon.stats['max-cp']}`, `${pokemon.stats['max-hp']}`],
              backgroundColor: [
                barFill
              ],
              borderColor: [
                barStroke
              ],
              borderWidth: 1,
              fill: true,
              hoverBackgroundColor: barFillHover,
          }]
      },
      options: {
          animation: {
              easing: "easeOutQuart"
          },
          legend: {
              position: "bottom",
              display: false
          },
          scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#fafafa",
                    fontStyle: "bold",
                    beginAtZero: true,
                    padding: 15,
					//display: false - remove this and commenting to display: false
                },
                gridLines: {
                    drawTicks: false,
                    display: false,
					color: "transparent",
					zeroLineColor: "transparent"
                }
            }],
            xAxes: [{
                gridLines: {
					display: false,
					color: "transparent",
					zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 15,
					beginAtZero: true,
                    fontColor: "#fafafa",
                    fontStyle: "bold",
					maxTicksLimit: 20,
					//display: false - remove this and commenting to display: false
                }
            }]
        }
      }
  });

}

