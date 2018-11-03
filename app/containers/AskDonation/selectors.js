/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const addDonor = (state) => state.get('adddonor');
const selectGlobal = (state) => state.get('global');

const makeSelectUsername = () => createSelector(
  addDonor,
  (homeState) => homeState.get('username')
);

const makeSelectDonorAdded = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('message')
);

export {
  addDonor,
  makeSelectUsername,
  makeSelectDonorAdded
};
