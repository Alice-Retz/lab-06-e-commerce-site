import { findById, calcItemTotal, renderTableRow } from '../utils.js';
import flowers from '../data/flowers.js';
import cart from '../data/cart.js';

const tableBody = document.getElementById('table-body');

for (let item of cart) {
    const flower = findById(flowers, item.id);
    const tr = renderTableRow(flower, item);
    tableBody.appendChild(tr);
}

const totalDom = document.getElementById('order-total');
const total = calcItemTotal(flowers, cart);
totalDom.textContent = `$${total}.00`;