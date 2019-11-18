import { createTypes, completeTypes, withFlowDetermination } from 'redux-recompose';
import * as ItemService from '@services/ItemService';

export const actions = createTypes(completeTypes(['GET_ITEMS, ADD_ITEM, REMOVE_ITEM']), '@@ITEMS');

const itemsTarget = 'items';

export const actionCreators = {
  addItem: item => ({
    type: actions.ADD_ITEM,
    target: itemsTarget,
    service: ItemService.addItem,
    payload: item,
    successSelector: response => response,
    injections: [withFlowDetermination(response => response)]
  }),
  removeItem: item => ({
    type: actions.REMOVE_ITEM,
    target: itemsTarget,
    service: ItemService.removeItem,
    payload: item,
    successSelector: response => response,
    injections: [withFlowDetermination(response => response)]
  }),
  getItems: () => ({
    type: actions.GET_ITEMS,
    target: itemsTarget,
    service: ItemService.getItems,
    successSelector: response => response,
    injections: [withFlowDetermination(response => response)]
  })
};
