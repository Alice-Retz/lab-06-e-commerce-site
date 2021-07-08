
import { CART, getCart, addItemtoCart, clearCart } from '../storage-utils.js';

const test = QUnit.test;

test('return the cart from localstorage', expect => {
    const fakeCart = [
        { id: 1, qty: 2 },
        { id: 5, qty: 3 },
    ];
    const fakeCartString = JSON.stringify(fakeCart);
    localStorage.setItem(CART, fakeCartString);

    const cart = getCart();

    expect.deepEqual(cart, fakeCart);
});

test('cart should return an empty array if empty', expect => {
    localStorage.removeItem(CART);
    const cart = getCart();
    const expected = [];
    expect.deepEqual(cart, expected);
});

test('addItemtoCart should update quantity', expect => {
    const fakeCart = [
        { id: 1, qty: 2 },
        { id: 5, qty: 3 },
    ];
    const fakeCartString = JSON.stringify(fakeCart);
    localStorage.setItem(CART, fakeCartString);

    addItemtoCart(1);
    const newCart = getCart();

    const expected = [
        { id: 1, qty: 3 },
        { id: 5, qty: 3 },
    ];

    expect.deepEqual(newCart, expected);
});

test('addItemtoCart should add item to cart', expect => {
    const fakeCart = [
        { id: 1, qty: 2 },
        { id: 5, qty: 3 },
    ];
    const fakeCartString = JSON.stringify(fakeCart);
    localStorage.setItem(CART, fakeCartString);

    addItemtoCart(2);
    const newCart = getCart();

    const expected = [
        { id: 1, qty: 2 },
        { id: 5, qty: 3 },
        { id: 2, qty: 1 },
    ];

    expect.deepEqual(newCart, expected);
});

test('clearCart should delete the cart contents', (expect)=>{
    const fakeCart = [
        { id: 1, qty: 2 },
        { id: 5, qty: 3 },
    ];
    const fakeCartString = JSON.stringify(fakeCart);
    localStorage.setItem(CART, fakeCartString);

    clearCart();

    const expected = [];
    const cart = getCart();
    expect.deepEqual(cart, expected);

});