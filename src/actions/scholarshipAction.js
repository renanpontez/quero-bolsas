import * as types from '../constants/ActionTypes';

export function addScholarship(items) {
  return async function (dispatch) {
    return dispatch({
      type: types.ADD_SCHOLARSHIP,
      items: items
    });
  };
}

export function removeScholarship(item) {
  return async function (dispatch) {
    return dispatch({
      type: types.REMOVE_SCHOLARSHIP,
      item: item
    });
  };
}