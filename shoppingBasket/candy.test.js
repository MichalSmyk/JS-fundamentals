const Candy = require('./candy');
;


describe('Candy', () => {
    it('returns the name of the candy', () => {
        const newCandy = new Candy('Mars', 4.99);
        expect(newCandy.getName()).toEqual('Mars');
    });
    it('returns the price of the candy', () => {
        const newCandy = new Candy('Skittles', 6.99);
        expect(newCandy.getPrice()).toEqual(6.99);
    })
});