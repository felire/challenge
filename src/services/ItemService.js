import AsyncStorage from '@react-native-community/async-storage';

const ITEMS_KEY = '@Items:items';
export const getItems = () => AsyncStorage.getItem(ITEMS_KEY).then(JSON.parse);
export const addItem = async item => {
  const actualItems = await getItems();
  const newItems = {
    ...actualItems,
    item
  };
  return AsyncStorage.setItem(ITEMS_KEY, JSON.stringify(newItems));
};
export const removeItem = async item => {
  const actualItems = await getItems();
  const newItems = actualItems.filter(it => it.id !== item.id);
  return AsyncStorage.setItem(ITEMS_KEY, JSON.stringify(newItems));
};
