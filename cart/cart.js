import { findById, toUSD, calcOrderTotal, renderTableRow } from '../utils.js';
import flowers from '../data/flowers.js';
import { getCart, clearCart, CART } from '../storage-utils.js';

const placeOrder = document.getElementById('place-order');
const tableBody = document.getElementById('table-body');
const submitBtn = document.getElementById('place-order');

function renderCart(){
    const cart = getCart();
    for (let item of cart) {
        const flower = findById(flowers, item.id);
        const tr = renderTableRow(flower, item);
        tableBody.appendChild(tr);
    }
    if (cart.length === 0){
        submitBtn.disabled = true;
        tableBody.innerHTML = '';
    }
    const totalDom = document.getElementById('order-total');
    const total = calcOrderTotal(flowers, cart);
    totalDom.textContent = toUSD(total);
}
renderCart();

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', ()=>{
    clearCart();
    location.reload();
});



placeOrder.addEventListener('click', () => {
    let stringCart = localStorage.getItem(CART) || '[]';
    const cart = JSON.parse(stringCart);
    alert(`Thank you for your order: ${JSON.stringify(cart, true, 2)}`);
    clearCart();
    window.location.href = '..';
   
});