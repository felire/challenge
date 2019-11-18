import React from 'react';
import { View, FlatList } from 'react-native';

import Item from '../Item';

import styles from './styles';

const DATA = [
  { id: 0, title: 'Hola' },
  { id: 1, title: 'Merca' },
  { id: 0, title: 'Hola' },
  { id: 1, title: 'Merca' },
  { id: 0, title: 'Hola' },
  { id: 1, title: 'Merca' },
  { id: 0, title: 'Hola' },
  { id: 1, title: 'Merca' },
  { id: 0, title: 'Hola' },
  { id: 1, title: 'Merca' },
  { id: 0, title: 'Hola' },
  { id: 1, title: 'Merca' },
  { id: 0, title: 'Hola' },
  { id: 1, title: 'Merca' },
  { id: 0, title: 'Hola' },
  { id: 1, title: 'Merca' }
];

const handleRenderItem = ({ item }) => <Item title={item.title} id={item.id} />;
const keyExtractor = item => `${item.id}`;
const renderSeparator = () => <View style={styles.separator} />;
export default function ListLayout({ data, removeItem }) {
  return (
    <FlatList
      data={data}
      renderItem={handleRenderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderSeparator}
      style={styles.list}
    />
  );
}
