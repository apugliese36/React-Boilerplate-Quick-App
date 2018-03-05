import { fromJS } from 'immutable';

import {
  ADD_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM,
  CHANGE_ITEMNAME,
} from './constants';

// The initial state of the App
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
      let newItem = { id: action.item.id, text: action.item.text, checked: false }
      return [ ...state.items, newItem ]

    case DELETE_ITEM:
    case TOGGLE_ITEM:
    case CHANGE_ITEMNAME:
    default:
      return state;
  }
}

export default itemListAppReducer;
