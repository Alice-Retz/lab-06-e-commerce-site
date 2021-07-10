import { findById } from './utils.js';

export const CART = 'CART';

export function getCart(){

    let stringCart = localStorage.getItem(CART) || '[]';
    const cart = JSON.parse(stringCart);
    return cart;
}

export function addItemtoCart(itemId, qty){
    const cart = getCart();
    const item = findById(cart, itemId);
    
    if (item) {
        item.qty += qty;
    } else {
        const newItem = { id: itemId, qty };
        cart.push(newItem);
        console.log(newItem);
    }
    setCart(cart);
    
}

export function setCart(cart){
    localStorage.setItem(CART, JSON.stringify(cart));
}

export function clearCart(){
    localStorage.removeItem(CART);
}


// #flowers > li:nth-child(1) > select > option:nth-child(1)