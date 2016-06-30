import * as ActionTypes from '../constants';

const initialState = {
  data: {
    photos: [],
  },
  isFetching: false
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PHOTOS_START:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case ActionTypes.FETCH_PHOTOS_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
      });

    case ActionTypes.FETCH_PHOTOS_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isFetching: false,
      });

    default:
      return state
  }
}

export default photoReducer;
