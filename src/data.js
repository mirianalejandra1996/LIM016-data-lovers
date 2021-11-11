let contenedorPokemon = document.getElementById("pokemones-filtrados");

export const traerPokemones = (dataPokemon) => {
  fetch("./data/pokemon/pokemon.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      contenedorPokemon.textContent = "";
      data.pokemon.forEach((pokemon) => {
        if (pokemon.name === dataPokemon || pokemon.num === dataPokemon) {
          createPokemon(pokemon);
          contadorPokemones();
        }
      });
    });
};

function contadorPokemones() {
  const items = document.getElementsByClassName("item");
  const resultadoPokemones = document.getElementById("totalPokemones");

  if (items.length === 1) {
    resultadoPokemones.textContent = `${items.length} Pokemón`;
  } else {
    resultadoPokemones.textContent = `${items.length} Pokemones`;
  }
}

export const render = () => {
  fetch("./data/pokemon/pokemon.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      contenedorPokemon.textContent = "";
      data.pokemon.forEach((pokemon) => {
        createPokemon(pokemon);
      });
    });
};

export const filtradoTipos = (arrTipos) => {
  
  const data= fetch("./data/pokemon/pokemon.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      contenedorPokemon.textContent = "";
      let pokemonesFiltrados = [];
      data.pokemon.forEach((pokemon) => {
        let pokemonApi = pokemon.type;
        let resultado = [];

        for (let tipo of arrTipos) {
          let isType = (pokemonType) => pokemonType === tipo;
          let comprobando = pokemonApi.some(isType);

          if (comprobando) {
            resultado.push(true);
          } else {
            resultado.push(false);
          }
        }

        if (resultado.every((pokemonCheckTipo) => pokemonCheckTipo === true)) {
          pokemonesFiltrados.push(pokemon);
        } else {
          contadorPokemones();
          return []
        }
      });
      return pokemonesFiltrados;
    });
    return data
};

export const createPokemon = (pokemon) => {
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
  const icon = document.createElement("div");
  icon.classList.add("icon");
  infoLeft.append(icon);
  const span = document.createElement("span");
  span.classList.add("icon-circle-svgrepo-com");
  icon.append(span);
  const infoRigth = document.createElement("div");
  infoRigth.classList.add("info-rigth");
  info.append(infoRigth);
  const numpokemon = document.createElement("h3");
  numpokemon.textContent = `${pokemon.num}`;
  infoRigth.append(numpokemon);

  contenedorPokemon.append(card);
};

