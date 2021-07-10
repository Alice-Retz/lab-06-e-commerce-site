import flowers from './data/flowers.js';
import { renderFlowers } from './renderflowers.js';
import { addItemtoCart } from './storage-utils.js';

const flowersUL = document.getElementById('flowers');

for (let flower of flowers) {
    const flowerLI = renderFlowers(flower);
    flowersUL.appendChild(flowerLI);
}

const addButtons = document.querySelectorAll('.add');
for (let btn of addButtons) {
    btn.addEventListener('click', (e)=>{
        // const select = btn.parentNode.querySelector('.selectMenu').value;
        const select = document.getElementById(`selectMenu-${e.target.value}`).value;
        addItemtoCart(Number(e.target.value), Number(select));
    });
}

