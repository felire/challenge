import {
  createTypes,
  completeTypes,
  withFlowDetermination,
  withPostSuccess,
  withPostFailure
} from 'redux-recompose';
import * as ItemService from '@services/ItemService';

export const actions = createTypes(
  completeTypes(['GET_ITEMS', 'ADD_ITEM', 'REMOVE_ITEM'], ['SOME_SUCCESS', 'SOME_FAILURE']),
  '@@ITEMS'
);

const itemsTarget = 'items';

const postSuccessExample = dispatch => dispatch({ type: actions.SOME_SUCCESS });

const postFailureExample = dispatch => dispatch({ type: actions.SOME_FAILURE });
export const actionCreators = {
  addItem: item => ({
    type: actions.ADD_ITEM,
    target: itemsTarget,
    service: ItemService.addItem,
    payload: item,
    successSelector: response => response,
    failureSelector: response => response,
    injections: [
      withFlowDetermination(response => response),
      withPostFailure(postFailureExample),
      withPostSuccess(postSuccessExample)
    ]
  }),
  removeItem: item => ({
    type: actions.REMOVE_ITEM,
    target: itemsTarget,
    service: ItemService.removeItem,
    payload: item,
    successSelector: response => response,
    failureSelector: response => response,
    injections: [withPostFailure(postFailureExample), withPostSuccess(postSuccessExample)]
  }),
  getItems: () => ({
    type: actions.GET_ITEMS,
    target: itemsTarget,
    service: ItemService.getItems,
    successSelector: response => response,
    failureSelector: response => response,
    injections: [withFlowDetermination(response => response)]
  })
};
