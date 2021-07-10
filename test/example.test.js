import { findById, calcOrderTotal, renderTableRow } from '../utils.js';
import flowers from '../data/flowers.js';
import { renderFlowers } from '../renderflowers.js';

const test = QUnit.test;

test('returns item by ID', expect => {
    const expected = {
        id: 1,
        name: 'Petunias',
        image: 'petunia.jpg',
        meaning: 'I hate you so much I paid to send you these flowers in order to tell you.',
        category: 'Bouquet base',
        price: 6, 
    };
    const actual = findById(flowers, 1);
    expect.deepEqual(actual, expected);
});
 
test('returns correct total from cart', expect => {
    const cart = [
        { id: 2, qty: 3 },
        { id: 4, qty: 1 },
        { id: 5, qty: 2 }
    ];
    const data = [{
        id: 2,
        price: 2
    }, {
        id: 4,
        price: 6
    }, {
        id: 5,
        price: 2
    }];
    const actual = calcOrderTotal(data, cart);
    const expected = 16;
    expect.equal(actual, expected);
});



test('does it render the tables properly', expect => {
    const testCart = {
        id: 1,
        qty: 2
    };
    const petunia = {
        id: 1,
        name: 'Petunias',
        image: 'petunia.jpg',
        meaning: 'I hate you so much I paid to send you these flowers in order to tell you.',
        category: 'Bouquet base',
        price: 6,
    };
    const expected = `<tr><td>Petunias</td><td>$6.00</td><td>2</td><td>$12.00</td></tr>`;
    const dom = renderTableRow(petunia, testCart);
    const html = dom.outerHTML;
    expect.equal(html, expected);
});




test('will it give me a list item of petunias?', (expect) => {
    const petuniasLi = `<li class="flowerItem"><h3>Petunias</h3><img src="./assets/petunia.jpg" alt="Petunias"><span class="productDescription">Meaning: I hate you so much I paid to send you these flowers in order to tell you.</span><span class="productPrice">Bouquet base, $6.00</span><select class="selectMenu" id="selectMenu-petunias"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select><button value="petunias" class="add">Add to Cart</button></li>`;
    const petunias = {
        id: 'petunias',
        name: 'Petunias',
        image: 'petunia.jpg',
        meaning: 'I hate you so much I paid to send you these flowers in order to tell you.',
        category: 'Bouquet base',
        price: '6', 
    };

    const actual = renderFlowers(petunias);

    expect.equal(actual.outerHTML, petuniasLi);
});
