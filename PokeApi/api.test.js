const fetchPokemon = require('./api')

describe('fetchPokemon', () => {
    it('returns promse with information about a pokemon', (done) => {
        fetchPokemon('pikachu')
            .then((pokemon) => {
                expect(pokemon.name).toEqual('pikachu');
                done();
            });
    });
});