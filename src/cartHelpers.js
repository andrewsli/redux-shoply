export function countItemsInCart(cart){
  return Object.values(cart).reduce((total, currVal) => total + currVal, 0)
}