const fizzBuzz = require('../Phase_one/fizzBuzz');

describe('fizzBuzz', () => {
    it('prints fizz if numbers can be devided by 3', () => {
        expect(fizzBuzz(3)).toEqual('Fizz');
        expect(fizzBuzz(6)).toEqual('Fizz');
    });
    it('prints buzz if numbers can be devided by 5', () => {
        expect(fizzBuzz(5)).toEqual('Buzz');
        expect(fizzBuzz(10)).toEqual('Buzz');
    });
    it('prints FizzBuzz if numbers can be devided by 15', () => {
        expect(fizzBuzz(15)).toEqual('FizzBuzz');
        expect(fizzBuzz(30)).toEqual('FizzBuzz');
    });
    it('prints numbers if the numbers cant be devided by 3, 5 or 15', () => {
        expect(fizzBuzz(17)).toEqual(17);
        expect(fizzBuzz(7)).toEqual(7);
    });
})