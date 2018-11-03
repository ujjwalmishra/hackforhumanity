/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  ADD_DONOR,
  DONOR_ADDED,
  LOGIN_USER,
  SEARCH_DONOR,
  SEARCHED_DONOR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  message: "",
  userData: {
    repositories: false,
  },
  donors: []
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_DONOR:
      console.log(action.payload);
      return  state
      .set('loading', true)
      .set('error', false);
    case SEARCHED_DONOR:
      console.log(action.payload);
      return  state
      .set('loading', false)
      .set('error', false)
      .set('donors', action.payload);  
    case LOGIN_USER: 
      return state
        .set('loading', false)
        .set('name', action.username)
    case DONOR_ADDED:
      console.log(action.payload);
      return state
        .set('message', action.payload)
        .set('loading', true)
    case ADD_DONOR:
      return  state
      .set('loading', true)
      .set('error', false);
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
