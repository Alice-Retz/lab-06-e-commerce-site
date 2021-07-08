export function findById(items, id){
    for (let item of items){
        if (item.id === id) {
            return item;
        }
    }
}

export function calcItemTotal(flowers, cart){
    let orderTotal = 0;
    for (let item of cart) {
        const flower = findById(flowers, item.id);
        orderTotal += flower.price * item.qty;
    }
    return orderTotal;
}

export function renderTableRow(flowerItem, cartItem){
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = flowerItem.name;
    tr.appendChild(tdName);

    const tdPrice = document.createElement('td');
    tdPrice.textContent = `$${flowerItem.price}.00`;
    tr.appendChild(tdPrice);

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    tr.appendChild(tdQty);
    
    const tdTotal = document.createElement('td');
    const total = flowerItem.price * cartItem.qty;
    tdTotal.textContent = `$${total}.00`;
    tr.appendChild(tdTotal);
    
    return tr;
}
