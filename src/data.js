// estas funciones son de ejemplo

export const example = () => {

  let pokemon;
  // return 'Este es el example';
  fetch("./data/pokemon/pokemon.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data){

      // console.log(data.pokemon[0].name);
      pokemon = JSON.stringify(data.pokemon[0].name);
      // console.log(data.pokemon[1].name);

      // let item1 = document.getElementById("item1").innerHTML = data.pokemon[0].name;

      
    });
    // return example;
    // console.log(pokemon.stringify);
    console.log(typeof pokemon);
    // console.log("final del pokemon " + pokemon)
    return pokemon;
};

export const anotherExample = () => {
  return 'OMG';
};


