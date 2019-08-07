import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

export function addItem(id) {
  return {
    type: ADD_ITEM,
    payload: { id }
  }
}
export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    payload: { id }
  }
}