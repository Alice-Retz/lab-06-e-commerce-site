export function renderFlowers(flowers){
    const flowerLI = document.createElement('li');
    const flowerName = document.createElement('h3');
    flowerName.textContent = flowers.name;
    
    const flowerImg = document.createElement('img');
    flowerImg.src = `./assets/${flowers.image}`;
    flowerImg.alt = flowers.name;
    
    const flowerSpan = document.createElement('span');
    flowerSpan.textContent = `$${flowers.price}`;
    
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    
    flowerLI.appendChild(flowerName);
    flowerLI.appendChild(flowerImg);
    flowerLI.appendChild(flowerSpan);
    flowerLI.appendChild(button);

    return flowerLI;
}