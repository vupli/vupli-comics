import { put, takeLatest } from 'redux-saga/effects';

import { FETCH_COMICS_REQUEST, FETCH_COMICS_SUCCESS } from '../actions/comics';

function* fetchComics(action) {
  yield put({ type: FETCH_COMICS_SUCCESS, payload: [] });
}

function* comicsSaga() {
  yield takeLatest(FETCH_COMICS_REQUEST, fetchComics);
}

export default comicsSaga;
