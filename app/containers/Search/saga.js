/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SEARCH_DONOR } from 'containers/App/constants';
import { searchDonors, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* searchDonor(action) {
  // Select username from store
  const requestURL = `http://localhost:3000/data`;

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
  
    console.log("dispatching")
    yield put(searchDonors(data.donors));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SEARCH_DONOR, searchDonor);
}
