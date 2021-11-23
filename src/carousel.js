//mostrar hamburguesa
const hamburguesa = document.getElementById("hamburguesa");
const links = document.getElementById("links");
hamburguesa.addEventListener("click", () => {
  hamburguesa.classList.toggle("close");
  links.classList.toggle("mostrarnav");
});

// Carousel Desktop
let adelante = document.getElementById("adelante");
let atras = document.getElementById("atras");
let carouselPhoto = document.getElementsByClassName("carousel__photo");
let cantidadphoto = Math.ceil(carouselPhoto.length / 4);
let largo = 0;
let movePer = 25.34;
let maxmove = 320;
// Carousel Movile
let movile_view = window.matchMedia("(max-width: 768px)");
if (movile_view.matches) {
  movePer = 111;
  maxmove = 2100;
}
let rigthmover = () => {
  largo = largo + movePer;
  if (carouselPhoto == 1) {
    largo = 0;
  }
  for (const i of carouselPhoto) {
    if (largo > maxmove) {
      largo = largo - movePer;
    }
    i.style.left = "-" + largo + "%";
  }
};
let leftmover = () => {
  largo = largo - movePer;
  if (largo <= 0) {
    largo = 0;
  }
  for (const i of carouselPhoto) {
    if (cantidadphoto > 1) {
      largo = largo - movePer;
    }
    i.style.left = "-" + largo + "%";
  }
};
adelante.onclick = () => {
  rigthmover();
};
atras.onclick = () => {
  leftmover();
};

// Colores por Tipo
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

// Carousel Tarjetas Dinamicas
let contenedorcarousel = document.getElementById("carousel");

export function createCarousel(pokemon) {
  const card = document.createElement("div");
  card.classList.add("carousel__photo");
  const img = document.createElement("img");
  img.src = `https://www.serebii.net/pokemongo/pokemon/${pokemon.num}.png`;
  card.append(img);
  const info = document.createElement("div");
  info.classList.add("carousel-info");
  card.append(info);
  const nombrepokemon = document.createElement("h2");
  nombrepokemon.textContent = `${pokemon.name}`;
  nombrepokemon.classList.add("nombre-pokemon")
  info.append(nombrepokemon);
  const id = document.createElement("p");
  id.textContent = `# ${pokemon.num}`;
  info.append(id);

  pokemon.type.forEach((type) => {
    const tipo = document.createElement("div");
    tipo.style.backgroundColor = colors[type];
    tipo.classList.add("carousel-tipo");
    const icon = document.createElement("span");
    icon.classList.add("format-icon");
    icon.classList.add(`icon-${type}`);
    const nombreTipo=document.createElement("span")
    nombreTipo.classList.add('nombre-tipo')
    nombreTipo.innerText = `${type}`;
    tipo.prepend(icon);
    tipo.append(nombreTipo);

    card.append(tipo);
  });

  return card
}

function renderPokemones(pokemones) {
  contenedorcarousel.textContent = ''
  pokemones.forEach((pokemon) => {
  const card =createCarousel(pokemon)
  contenedorcarousel.append(card)
  });
}

const traerPokemonesCarusel = (nrosAleatorios) => {
  return fetch("./data/pokemon/pokemon.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const pokemonesAleatorios = [];
      nrosAleatorios.forEach((nroAleatorio) => {
        pokemonesAleatorios.push(data.pokemon[nroAleatorio]);
      });

      return pokemonesAleatorios;
    });
};

const cantidadPokemons = 250;
let myArray = [];
while (myArray.length < 20) {
  let numeroAleatorio = Math.ceil(Math.random() * cantidadPokemons);
  let existe = false;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] == numeroAleatorio) {
      existe = true;
      break;
    }
  }
  if (!existe) {
    myArray.push(numeroAleatorio);
  }
}

traerPokemonesCarusel(myArray).then((pokemones) => renderPokemones(pokemones));
