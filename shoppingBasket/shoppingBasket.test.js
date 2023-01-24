const ShoppingBasket = require('./shoppingBasket');

describe('shoppingBasket', () => {
    let basket;

    beforeEach(() => {
        basket = new ShoppingBasket();
    });

    it('adds new item to the basket', () => {
        const item1 = {getPrice: () => 10};
        basket.addItem(item1);
        expect(basket.items.length).toEqual(1);
    });
    it('calculates total price of the basket', () => {
        const item1 = {getPrice: () => 10};
        const item2 = {getPrice: () => 20};
        basket.addItem(item1);
        basket.addItem(item2);
        expect(basket.getTotalPrice()).toEqual(30);
    });
});