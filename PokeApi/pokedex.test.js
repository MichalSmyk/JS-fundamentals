const Pokedex = require('./pokedex');

describe('catching pokemons into pokedex', () => {
    let pokedex = new Pokedex();

    it('catches new pokemon - pokemon', () => {
        pokedex.catch('pikachu');
        expect(pokedex.all()).toEqual(['pikachu']);
    });
    it('catches another pokemon - bulbasaur', () => {
        pokedex.catch('bulbasaur');
        expect(pokedex.all()).toEqual(['pikachu', 'bulbasaur']);
    });
    it('catches 3rd pokemon - jigglypuff', () =>{
        pokedex.catch('jigglypuff');
        expect(pokedex.all()).toEqual(['pikachu', 'bulbasaur', 'jigglypuff']);
    });
});