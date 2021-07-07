export function renderFlowers(flowers){
    const flowerLI = document.createElement('li');
    flowerLI.classList.add('flowerItem');

    const flowerName = document.createElement('h3');
    flowerName.textContent = flowers.name;
    
    const flowerImg = document.createElement('img');
    flowerImg.src = `./assets/${flowers.image}`;
    flowerImg.alt = flowers.name;
    
    const flowerMean = document.createElement('span');
    flowerMean.textContent = `Meaning: ${flowers.meaning}`;
    flowerMean.classList.add('productDescription');

    const flowerSpan = document.createElement('span');
    flowerSpan.textContent = `${flowers.category}, ${flowers.price}`;
    flowerSpan.classList.add('productPrice');
    
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    
    flowerLI.appendChild(flowerName);
    flowerLI.appendChild(flowerImg);
    flowerLI.appendChild(flowerMean);
    flowerLI.appendChild(flowerSpan);
    flowerLI.appendChild(button);

    return flowerLI;
}