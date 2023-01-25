const fetchPokemon = require("./api");

class Pokedex {

    constructor(){
        this.pokedex = [];
    }
    
    catch(pokemon){
        fetchPokemon(pokemon);
        this.pokedex.push(pokemon)
    }

    all() {
        return this.pokedex;
    }

}

module.exports = Pokedex;