import React from 'react';
import { View, FlatList } from 'react-native';

import Item from '../Item';

import styles from './styles';

const handleRenderItem = ({ item }) => <Item title={item.title} id={item.id} />;
const keyExtractor = item => `${item.id}`;
const renderSeparator = () => <View style={styles.separator} />;
export default function ListLayout({ data }) {
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
