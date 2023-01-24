const ShoppingBasket = require('./shoppingBasket');

describe('shoppingBasket', () => {
    let basket;

    beforeEach(() => {
        basket = new ShoppingBasket();
    });

    it('adds new item to the basket', () => {
        const doubleCandy = {getPrice: () => 10};
        basket.addItem(doubleCandy);
        expect(basket.items.length).toEqual(1);
    });
    it('calculates total price of the basket', () => {
        const doubleCandy = {getPrice: () => 10};
        const doubleCandy2 = {getPrice: () => 20};
        basket.addItem(doubleCandy);
        basket.addItem(doubleCandy2);
        expect(basket.getTotalPrice()).toEqual(30);
    });
});