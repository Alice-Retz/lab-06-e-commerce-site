
import { getCart } from '../storage-utils.js'

const test = QUnit.test;

test('returns item by ID', expect => {
    cosnt fakeCart = [
            { id: 1, qty: 2 },
            { id: 5, qty: 3 },
    ];
    const fakeCartString = JSON.stringify(fakeCart);
    localStorage.setItem("CART", fakeCartString);

    const cart = getCart();

    expect.deepEqual(cart, fakeCart);
});