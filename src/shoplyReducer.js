import { products } from "./data.json";
import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

// cart: {id1: numItem1, id2: numItem2}
// start with nothing in the cart
const productIds = Object.keys(products);
const INITIAL_STATE = { cart: {}, products };
for (let id of productIds) {
  INITIAL_STATE.cart[id] = 0;
};

function shoplyReducer(state = INITIAL_STATE, action) {
  console.log(`reducer ran, state and action are:`, state, action)

  switch (action.type) {
    case ADD_ITEM:
      return state;
    case REMOVE_ITEM:
      return state;
    default:
      return state;
  }
}

export default shoplyReducer;