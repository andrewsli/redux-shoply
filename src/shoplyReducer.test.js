import shoplyReducer from "./shoplyReducer";

const emptyCart = { cart: {} };
const cartWithItems = { cart: { item1: 1, item2: 2 } }

//reducers should return the new state after applying the action to the previous state

it('should return the initial state', () => {
  expect(shoplyReducer(undefined, {})).toEqual({ cart: {} })
})

describe('reducer handles ADD_ITEM', () => {
  it('is a pure function', () => {
    const newState = shoplyReducer(cartWithItems, {
      type: "ADD_ITEM",
      payload: { id: "item1" }
    })
    expect(newState.cart).not.toBe(cartWithItems.cart)
  })

  it('should handle ADD_ITEM when nothing is in the cart', () => {
    expect(shoplyReducer(emptyCart, {
      type: "ADD_ITEM",
      payload: { id: "someItemId" }
    })).toEqual({ cart: { someItemId: 1 } })
  })

  it('should increment count by 1 when item already exists', () => {
    expect(shoplyReducer(cartWithItems, {
      type: "ADD_ITEM",
      payload: { id: "item1" }
    })).toEqual({ cart: { item1: 2, item2: 2 } })
  })
})

describe('reducer handles REMOVE_ITEM', () => {
  it('is a pure function', () => {
    const newState = shoplyReducer(cartWithItems, {
      type: "REMOVE_ITEM",
      payload: { id: "item1" }
    })
    expect(newState.cart).not.toBe(cartWithItems.cart)
  })

  it('should do nothing when nothing is in the cart', () => {
    expect(shoplyReducer(emptyCart, {
      type: "REMOVE_ITEM",
      payload: { id: "someItemId" }
    })).toEqual({ cart: {} })
  })


  it('should decrement count by 1 when item count > 1', () => {
    expect(shoplyReducer(cartWithItems, {
      type: "REMOVE_ITEM",
      payload: { id: "item2" }
    })).toEqual({ cart: { item1: 1, item2: 1 } })
  })

  it('should remove item from state when when item count = 1', () => {
    expect(shoplyReducer(cartWithItems, {
      type: "REMOVE_ITEM",
      payload: { id: "item1" }
    })).toEqual({ cart: { item2: 2 } })
  })
})