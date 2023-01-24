const searchCandies = require('./candies')

const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
  ];

  describe('searchCandies', () => {
    it('returns Mars and Maltesers when given prefix "Ma" and max price 10', () => {
        expect(searchCandies('Ma', 10, candies)).toEqual(['Mars', 'Maltesers']);
    });
    it('returns Mars when given prefix "Ma" and max price 2', () => {
        expect(searchCandies('Ma', 2, candies)).toEqual(['Mars']);
    });
    it('returns "Skitties", "Skittles", "Starburst" when given prefix "S" and max price 10', () => {
        expect(searchCandies('S', 10, candies)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    });
    it('returns "Skitties", "Skittles" when given prefix "S" and max price 4', () => {
        expect(searchCandies('S', 4, candies)).toEqual(['Skitties', 'Skittles']);
    });
  });