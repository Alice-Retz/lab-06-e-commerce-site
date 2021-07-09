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
        addItemtoCart(Number(e.target.value));
        console.log('clicked');
    });
}
