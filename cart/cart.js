import { findById, calcItemTotal, renderTableRow } from '../utils.js';
import flowers from '../data/flowers.js';
// import cart from '../data/cart.js';
import { getCart, clearCart } from '../storage-utils.js';

const tableBody = document.getElementById('table-body');

function renderCart(){
    const cart = getCart();
    for (let item of cart) {
        const flower = findById(flowers, item.id);
        const tr = renderTableRow(flower, item);
        tableBody.appendChild(tr);
    }
    if (cart.length === 0){
        tableBody.innerHTML = '';
    }
    const totalDom = document.getElementById('order-total');
    const total = calcItemTotal(flowers, cart);
    totalDom.textContent = `$${total}.00`;
}
renderCart();

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', ()=>{
    clearCart();
    location.reload();
});