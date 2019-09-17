import {put, takeLatest} from 'redux-saga/effects';
import * as types from './HomeActions';

export function* handleGetValueFromKey(action) {
  yield put(types.getValueFromKey());
  //perform work logic
}

export function* watchGetValueFromKey() {
  yield takeLatest(types.GET_VALUE_FROM_KEY, handleGetValueFromKey);
}
