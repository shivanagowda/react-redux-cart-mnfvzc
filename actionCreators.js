
import PRODUCTS from "./Data";

const removeFromCart = product => {
  return {
    type: 'REMOVE_FROM_CART',
    product
  }
}

const updateCart = product => {
  return {
    type: 'UPDATE_CART',
    product
  }
}

const loadProducts = () => {
  let products = PRODUCTS;
  return {
    type: 'LOAD_PRODUCTS',
    cart: products,
  };
}


export { removeFromCart, updateCart, loadProducts };