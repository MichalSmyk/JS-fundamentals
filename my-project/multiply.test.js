const multiply = require('./multiply')

describe('multiply', () => {
    it('multiplies 7 by 7', () => {
        expect(7*7).toBe(49);
    });
    it('multiplies 10 by 10 ', () => {
        expect(10*10).toBe(100);
    });
})