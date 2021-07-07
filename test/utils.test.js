import 

test ('renderTableRow returns a <tr> element', expect =>
const petunia = {
    id: '1',
    name: 'Petunias',
    image: 'petunia.jpg',
    meaning: 'I hate you so much I paid to send you these flowers in order to tell you.',
    category: 'Bouquet base',
    price: '$5.99',
};
const petuniaCart = {
    id: 1,
    qty: 2,
}
const expected = '';
const dome = renderTableRow(petunia, petuniaCart)
)