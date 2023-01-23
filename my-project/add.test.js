const add = require('./add')

describe('add', ()=> {
    it('adds 2 and 2', () =>{
        expect(2+2).toBe(4);
    });
    it('adds 3 and 7', () => {
        expect(3+7).toBe(10);
    });
});