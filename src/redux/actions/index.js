import * as ActionTypes from '../constants';
import { reqq } from '../../utils/utils';
import config from '../../utils/config';

export function changeActiveFeature(activeFeature) {
  return {
    type: ActionTypes.CHANGE_ACTIVE_FEATURE,
    activeFeature
  };
}

export function fetchPhotosStart() {
  return {
    type: ActionTypes.FETCH_PHOTOS_START,
  };
}

export function fetchPhotosFailed() {
  return {
    type: ActionTypes.FETCH_PHOTOS_FAILED,
  };
}

export function fetchPhotosSuccess(data) {
  return {
    type: ActionTypes.FETCH_PHOTOS_SUCCESS,
    data,
  };
}

export function fetchPhotos(params) {
  return (dispatch) => {
    dispatch(fetchPhotosStart());

    params.sort = 'created_at';
    params.only = 'Food';
    params.image_size = 3;
    params.include_store = 'store_download';
    params.include_states = 'voted';
    params.consumer_key = config.consumerKey;

    const payload = {
      method: 'get',
      url: 'photos',
      params,
    };

    reqq(payload)
      .then((res) => {
        dispatch(fetchPhotosSuccess(res.data));
      })
      .catch((res) => {
        console.log('catch: ', res);
        dispatch(fetchPhotosFailed());
      });
  };
}
