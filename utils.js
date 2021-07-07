export function findById(items, id){
    for (const item of items){
        if (item.id === id) {
        return item;
        }
    }
}

export function findById(){

}

export function renderTableRow(cartItem, flowerItem){
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = cartItem.name;
    tr.appendChild(tdName);

    const tdPrice = document.createElement('td');
    tdPrice.textContent = cartItem.price;
    
}