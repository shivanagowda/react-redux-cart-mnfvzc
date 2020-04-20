const reducer = (state, action) => {
  switch(action.type){
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        cart: action.cart
      }
    case 'UPDATE_CART':
      return {
        ...state,
        cart: state.cart.map(product =>{
        if(product === action.product)
          product = action.product
          return product
        })
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(product => product !== action.product)
      }
    default:
      return state
  }
  return state;
}

export { reducer };