import * as types from './HomeActions';

const initialState = {
  data: {},
  isFetching: false,
  success: false,
  failure: false,
  error: {},
};

export default function HomeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_VALUE_FROM_KEY_INPROGRESS:
      return {
        ...state,
        data: {},
        success: false,
        failure: false,
        isFetching: true,
      };
    case types.GET_VALUE_FROM_KEY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: true,
        failure: false,
        data: action.data,
      };
    case types.GET_VALUE_FROM_KEY_FAILURE:
      return {
        ...state,
        isFetching: false,
        success: false,
        failure: true,
        error: action.error,
      };
    default:
      return state;
  }
}
