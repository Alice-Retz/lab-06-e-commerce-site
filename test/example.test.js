import { findById, calcItemTotal, renderTableRow } from '../utils.js';
import flowers from '../data/flowers.js';

const test = QUnit.test;

test('returns item by ID', expect => {
    const expected = {
        id: 1,
        name: 'Petunias',
        image: 'petunia.jpg',
        meaning: 'I hate you so much I paid to send you these flowers in order to tell you.',
        category: 'Bouquet base',
        price: '$5.99', 
    };
    const actual = findById(flowers, 1);
    console.log(actual);
    expect.deepEqual(actual, expected);
});


// Day 1 test
// test('will it give me a list item of petunias?', (expect) => {
//     const petuniasLi = `<li><h3>Petunias</h3><img src="./assets/petunia.jpg" alt="Petunias"><span>Meaning: I hate you so much I paid to send you these flowers in order to tell you.</span><span>Bouquet base, $5.99</span><button>Add to Cart</button></li>`;
//     const petunias = {
//         id: 'petunias',
//         name: 'Petunias',
//         image: 'petunia.jpg',
//         meaning: 'I hate you so much I paid to send you these flowers in order to tell you.',
//         category: 'Bouquet base',
//         price: '$5.99', 
//     };

//     const actual = renderFlowers(petunias);

//     expect.equal(actual.outerHTML, petuniasLi);
// });
