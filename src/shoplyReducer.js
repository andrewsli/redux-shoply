import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

// cart: {id1: numItem1, id2: numItem2}
// start with nothing in the cart
const INITIAL_STATE = { cart: {} };

function shoplyReducer(state = INITIAL_STATE, action) {  
  // guard against error on initialization because action is undefined.
  let id;
  if (action.payload) {
    id = action.payload.id
  }

  switch (action.type) {
    // keep everything else in state the same, keep everything else in cart the same
    // except increment the item that matches id
    case ADD_ITEM:
      return {
        ...state,
        cart: {
          // increment item by 1 or set it to 1 if it doesn't exist yet
          ...state.cart, [id]: (state.cart[id] + 1 || 1)
        }
      }

    // removes the item from state if item has only one left
    // else decrement item by one
    case REMOVE_ITEM:
      // if item doesn't exist in cart, just returns same state because delete won't do anything
      // if item count is 1, returns state with that item removed
      if (!state.cart[id] || state.cart[id] === 1) {
        let cart = {...state.cart};
        delete cart[id];
        return {...state, cart}
      } else {
        return {...state,
          cart: {...state.cart,
            [id]: state.cart[id] - 1
          }
        };
      }
      
    default:
      return state;
  }
}

export default shoplyReducer;