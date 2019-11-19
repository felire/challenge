import AsyncStorage from '@react-native-community/async-storage';

const ITEMS_KEY = '@Items:items';
export const getItems = () => AsyncStorage.getItem(ITEMS_KEY).then(JSON.parse);
export const addItem = async item => {
  const actualItems = await getItems();
  const newItem = {
    ...item,
    id: actualItems && actualItems.length !== 0 ? actualItems[actualItems.length - 1].id + 1 : 0
  };
  const newItems = actualItems ? [...actualItems, newItem] : [newItem];
  await AsyncStorage.setItem(ITEMS_KEY, JSON.stringify(newItems));
  return new Promise.resolve(newItems);
};
export const removeItem = async item => {
  const actualItems = await getItems();
  const newItems = actualItems.filter(it => it.id !== item.id);
  await AsyncStorage.setItem(ITEMS_KEY, JSON.stringify(newItems));
  return new Promise.resolve(newItems);
};
