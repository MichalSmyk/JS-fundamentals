

//Function to Fetch the API
const fetchPokemon = (pokemonName) => {
  //You can use name, number, type, or ability in the url. 
  //Example: pokemon/ditto/, pokemon/1/, type/3/ or ability/4/.
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
       return {
        name: data.name,
        id: data.id,
        height: data.height, 
        weight: data.weight, 
        types: data.types.map(object => object.type.name)
      }
    } 
    )
}



module.exports = fetchPokemon;

