export function getCart(){
    const stringCart = localStorage.getItem('CART');
    const cart = JSON.parse(stringCart);
    return cart;
}