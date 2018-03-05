import {
  ADD_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM,
  CHANGE_ITEMNAME,
} from './constants';

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item,
  };
}
export function deleteItem(item) {
  return {
    type: DELETE_ITEM,
    item,
  };
}
export function toggleItem(item) {
  return {
    type: TOGGLE_ITEM,
    item,
  };
}
export function changeItemname(name) {
  return {
    type: CHANGE_ITEMNAME,
    name,
  };
}
