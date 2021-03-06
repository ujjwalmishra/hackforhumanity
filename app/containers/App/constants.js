/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const DEFAULT_LOCALE = 'en';
export const ADD_DONOR = 'boilerplate/App/ADD_DONOR';
export const DONOR_ADDED = 'boilerplate/App/DONOR_ADDED';
export const LOGIN_USER = 'boilerplate/App/LOGIN_USER';
export const ASK_DONATION = 'boilerplate/App/ASK_DONATION';
export const SEARCH_DONOR = 'boilerplate/App/SEARCH_DONOR';
export const SEARCHED_DONOR = 'boilerplate/App/SEARCHED_DONOR';
