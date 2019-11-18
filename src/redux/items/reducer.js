import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';
// you also have spent and gained points in the EP of currentPoints
const stateDescription = {
  items: []
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_ITEMS, actions.ADD_ITEM, actions.REMOVE_ITEM]
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
