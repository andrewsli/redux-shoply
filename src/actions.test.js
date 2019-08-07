import { addItem, removeItem } from "./actions";

//action creators should return an action (a pojo with key of type)
describe('action creators', () => {
  it('should create an action to add an item', () => {
    expect(addItem("someItemId")).toEqual({ "payload": { "id": "someItemId" }, "type": "ADD_ITEM" })
  })

  it('should create an action to remove an item', () => {
    expect(removeItem("someItemId")).toEqual({ "payload": { "id": "someItemId" }, "type": "REMOVE_ITEM" })
  })

})