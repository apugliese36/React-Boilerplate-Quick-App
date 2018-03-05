/*
 *
 * ItemListApp reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM,
  CHANGE_ITEMNAME,
} from './constants';

const initialState = fromJS({
  newItem: '',
  items: [
    {id: 0, text: 'Chips', checked: false},
    {id: 1, text: 'Dip', checked: false},
    {id: 2, text: 'Soda', checked: false},
  ]
});

function itemListAppReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      console.log('ADD_ITEM payload', action.payload);
      return state
        .set('items', action.payload)

    case DELETE_ITEM:
    case TOGGLE_ITEM:
    case CHANGE_ITEMNAME:
      return state
        .set('newItem', action.name)
    default:
      return state;
  }
}

export default itemListAppReducer;
