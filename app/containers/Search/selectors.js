/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const search = (state) => state.get('search');
const selectGlobal = (state) => state.get('global');

const makeSelectUsername = () => createSelector(
  search,
  (homeState) => homeState.get('username')
);

const makeSelectDonors = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('donors')
);

export {
  search,
  makeSelectUsername,
  makeSelectDonors
};
