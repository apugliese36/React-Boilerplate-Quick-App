import { createSelector } from 'reselect';

/**
 * Direct selector to the itemListApp state domain
 */
const selectItemListAppDomain = (state) => state.get('itemListApp');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ItemListApp
 */

const makeSelectItemListApp = () => createSelector(
  selectItemListAppDomain,
  (substate) => substate.toJS()
);

export default makeSelectItemListApp;
export {
  selectItemListAppDomain
};
