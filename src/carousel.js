/* Carousel */
const adelante = document.getElementById("adelante");
const atras = document.getElementById("atras");
const carouselPhoto = document.getElementsByClassName("carousel__photo");
let largo = 0;
adelante.addEventListener("click", function () {
  largo++;
  for (let i = 0; i < carouselPhoto.length; i++) {
    const card = carouselPhoto[i];
    if (largo == 1) {
      card.style.left = "-1370px";
    }
    if (largo == 2) {
      card.style.left = "-2740px";
    }
    if (largo == 3) {
      card.style.left = "-4110px";
    }
    if (largo > 3) {
      largo = 3;
    }
  }
});
atras.addEventListener("click", function () {
  largo--;
  for (let i = 0; i < carouselPhoto.length; i++) {
    const card = carouselPhoto[i];
    if (largo == 0) {
      card.style.left = "0px";
    }
    if (largo == 1) {
      card.style.left = "-1370px";
    }
    if (largo == 2) {
      card.style.left = "-2740px";
    }
    if (largo < 0) {
      largo = 0;
    }
  }
});

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
  info.append(nombrepokemon);
  const id = document.createElement("p");
  id.textContent = `# ${pokemon.num}`;
  info.append(id);

  console.log(pokemon.type)
  pokemon.type.forEach(type => {
    const tipo = document.createElement("div");
    tipo.classList.add("carousel-tipo");
    tipo.textContent = `${type}`;
    card.append(tipo);
  })
 

  contenedorcarousel.append(card);
}

function renderPokemones (pokemones) {
  contenedorcarousel.textContent = "";
  pokemones.forEach(pokemon => {
    createCarousel(pokemon)
  })
}

const traerPokemonesCarusel = (nrosAleatorios) => {
  return fetch("./data/pokemon/pokemon.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
     
      const pokemonesAleatorios = []
      nrosAleatorios.forEach(((nroAleatorio) => {
        pokemonesAleatorios.push(data.pokemon[nroAleatorio])
      }))

      return pokemonesAleatorios
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
    myArray.push(numeroAleatorio)
  }
}
console.log("números aleatorios: ", { myArray }); 

traerPokemonesCarusel(myArray)
.then((pokemones) => renderPokemones(pokemones))






