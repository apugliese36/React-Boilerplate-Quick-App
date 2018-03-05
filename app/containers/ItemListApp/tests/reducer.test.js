
import { fromJS } from 'immutable';
import itemListAppReducer from '../reducer';

describe('itemListAppReducer', () => {
  it('returns the initial state', () => {
    expect(itemListAppReducer(undefined, {})).toEqual(fromJS({}));
  });
});
