// contants for get value from key
export const GET_VALUE_FROM_KEY = 'GET_VALUE_FROM_KEY';
export const GET_VALUE_FROM_KEY_INPROGRESS = 'GET_VALUE_FROM_KEY_INPROGRESS';
export const GET_VALUE_FROM_KEY_SUCCESS = 'GET_VALUE_FROM_KEY_SUCCESS';
export const GET_VALUE_FROM_KEY_FAILURE = 'GET_VALUE_FROM_KEY_FAILURE';

export function getValueFromKey(payload) {
  return {
    type: GET_VALUE_FROM_KEY,
    payload: payload,
  };
}

export function getValueFromKeyProgress(payload) {
  return {
    type: GET_VALUE_FROM_KEY_INPROGRESS,
    payload: payload,
  };
}

export function getValueFromKeySuccess(payload) {
  return {
    type: GET_VALUE_FROM_KEY_SUCCESS,
    payload: payload,
  };
}
export function getValueFromKeyFailure(payload) {
  return {
    type: GET_VALUE_FROM_KEY_FAILURE,
    payload: payload,
  };
}
