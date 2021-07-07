import { findById, calcItemTotal, renderTableRow } from '../utils.js'
import flowers from '../data/flowers.js'

const test = Qunit.test;

test('returns item by ID', expect => {
    const expected = {
        id: '1',
        name: 'Petunias',
        image: 'petunia.jpg',
        meaning: 'I hate you so much I paid to send you these flowers in order to tell you.',
        category: 'Bouquet base',
        price: '$5.99', 
    };
    const actual = findById(fruits, 1);
    expect.deepEqual(actual, expected);
});