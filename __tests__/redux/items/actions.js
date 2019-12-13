/* eslint-disable import/default */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable import/first */

// jest.mock('@services/ItemService');
import { addItem } from '@services/ItemService';
import { actionCreators, actions } from '@redux/items/actions';
import api from '@config/api';
import { withNavigation } from 'react-navigation';
import { JestEnvironment } from '@jest/environment';

import { store, mockStore } from '../store';

import { successApiCall } from './responseExamples';

describe('suit', () => {
  beforeEach(() => {
    store.clearActions();
  });
  /* it('my redux and mock test', async () => {
    const expectedActions = [actions.ADD_ITEM, actions.ADD_ITEM_SUCCESS, actions.SOME_SUCCESS];
    addItem.mockReturnValue(Promise.resolve(true));
    await store.dispatch(actionCreators.addItem());
    const receivedActions = store.getActions().map(action => action.type);
    expect(expectedActions).toEqual(receivedActions);
    expect(addItem.mock.calls).toHaveLength(1);
  });*/
  it('my redux and mock test Async Storage', async () => {
    const expectedActions = [actions.ADD_ITEM, actions.ADD_ITEM_SUCCESS, actions.SOME_SUCCESS];
    await store.dispatch(actionCreators.addItem());
    const receivedActions = store.getActions().map(action => action.type);
    expect(expectedActions).toEqual(receivedActions);
  });
  it('my other redux test', async () => {
    api.delete = jest.fn().mockReturnValue(successApiCall);
    const expectedActions = [actions.REMOVE_ITEM, actions.REMOVE_ITEM_SUCCESS, actions.SOME_SUCCESS];
    await store.dispatch(actionCreators.removeItem());
    const receivedActions = store.getActions().map(action => action.type);
    expect(expectedActions).toEqual(receivedActions);
    expect(api.delete.mock.calls).toHaveLength(1);
  });
});
