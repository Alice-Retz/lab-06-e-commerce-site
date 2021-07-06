import flowers from './flowers.js';
import { renderFlowers } from './renderFlowers.js';
console.log(flowers);

const flowersUL = document.getElementById('flowers');

for (let flower of flowers) {
    const flowerLI = renderFlowers(flower);
    flowersUL.appendChild(flowerLI);
}