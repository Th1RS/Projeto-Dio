// function convertPokemonTypesToLi(pokemonTypes) {
//   return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 151
const limit = 10
let offset = 0



function loadPokemonItems(offset, limit) {
  pokeApi.getPokemons(offset , limit).then((pokemons =  []) => {
    const newHtml = pokemons.map((pokemon) =>
    `
        <li class="pokemon ${pokemon.type}">
              <span class="number">${pokemon.number}</span>
              <span class="name">${pokemon.name}</span>

              <div class="detail">
                  <ol class="types">
                      ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                  </ol>

                  <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
              </div>
          </li>
      ` ).join('')

    pokemonList.innerHTML += newHtml
})
  
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click' , () => {
  offset += limit

  const qtdRecordNexPage = offset + limit

  if (qtdRecordNexPage >= maxRecords) {
    const newLimit = maxRecords - offset 
    loadPokemonItems(offset, limit)

    loadMoreButton.parentElement.removeChild(loadMoreButton)
  
  } else {
    loadPokemonItems(offset, limit)
  }

})








// pokeApi.getPokemons().then(pokemons = []) => {
//   const listItems = []

//   const newList = pokemons.map((pokemon) => {
//     return convertPokemonToLi(pokemon)


//   const newHtml = newList.join('')
//   })
//   // pokemons.forEach(pokemon => {
  //   listItems.push(convertPokemonToLi(pokemon))
    // pokemonList.innerHTML += convertPokemonToLi(pokemon);
  // });



  // .catch((error) => console.error(error))
// .then((pokemons) => {

//     for (let i = 0; i < pokemons.lengtn; i++) {
//         const pokemon = pokemons[i];
//         pokemonList.innerHTML += convertPokemonToLi(pokemon);

//     }

// })