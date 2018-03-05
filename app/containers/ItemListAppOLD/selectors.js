import { createSelector } from 'reselect';

const selectItemListApp = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectItemListApp,
  (homeState) => homeState.get('username')
);

export {
  selectHome,
  makeSelectUsername,
};
