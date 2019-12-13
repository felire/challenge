import { addItem } from '@services/ItemService';
import AsyncStorage from '@react-native-community/async-storage';

const EMPTY_LIST = 0;
const TWO_ITEMS_LIST = [
  {
    title: 'asd',
    id: 0
  },
  {
    title: 'asdasd',
    id: 1
  }
];

const NEW_ITEM = { title: 'new' };
const NEW_CREATED_ITEM = id => ({
  ...NEW_ITEM,
  id
});
describe('service test', () => {
  test('service test with null', async () => {
    AsyncStorage.getItem = jest.fn().mockReturnValue(Promise.resolve(null));
    const result = await addItem(NEW_ITEM);
    expect(result).toEqual([NEW_CREATED_ITEM(0)]);
  });
  test('service test with empty list', async () => {
    AsyncStorage.getItem = jest.fn().mockReturnValue(Promise.resolve(EMPTY_LIST));
    const result = await addItem(NEW_ITEM);
    expect(result).toEqual([NEW_CREATED_ITEM(0)]);
  });
  test('service test with two items list', async () => {
    JSON.parse = jest.fn(some => some);
    AsyncStorage.getItem = jest.fn().mockReturnValue(Promise.resolve(TWO_ITEMS_LIST));
    const result = await addItem(NEW_ITEM);
    expect(result).toEqual([...TWO_ITEMS_LIST, NEW_CREATED_ITEM(2)]);
  });
});
