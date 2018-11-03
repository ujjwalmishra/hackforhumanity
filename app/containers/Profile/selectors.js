/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const Profile = (state) => state.get('profile');
const selectGlobal = (state) => state.get('global');

const makeSelectUsername = () => createSelector(
  Profile,
  (homeState) => homeState.get('username')
);

const makeSelectDonorAdded = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('message')
);

export {
  Profile,
  makeSelectUsername,
  makeSelectDonorAdded
};
