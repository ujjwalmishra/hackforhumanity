/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const addDonor = (state) => state.get('adddonor');

const makeSelectUsername = () => createSelector(
  addDonor,
  (homeState) => homeState.get('username')
);

export {
  addDonor,
  makeSelectUsername,
};
