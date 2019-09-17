import {all} from 'redux-saga/effects';
import {watchGetValueFromKey} from '../screens/home/HomeSaga';

export default function* rootSaga() {
  yield all([watchGetValueFromKey()]);
}
