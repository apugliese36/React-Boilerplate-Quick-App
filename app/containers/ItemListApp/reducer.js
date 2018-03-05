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
      return state
        .set('items', action.payload)
        .set('newItem', '')

    case DELETE_ITEM:
      return state
        .set('items', action.payload)

    case TOGGLE_ITEM:
      return state
        .set('items', action.payload)

    case CHANGE_ITEMNAME:
      return state
        .set('newItem', action.name)
        
    default:
      return state;
  }
}

export default itemListAppReducer;
