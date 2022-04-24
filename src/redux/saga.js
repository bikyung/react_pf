import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { getFlickr } from './api';

export default function* rootSaga() {
	yield all([fork(callFlickr)]);
}

export function* callFlickr(action) {
	yield takeLatest('FLICKR_START', returnFlickr);
}

export function* returnFlickr(action) {
	const response = yield call(getFlickr, action.opt);
	yield put();
}
