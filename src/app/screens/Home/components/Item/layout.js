import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import CustomText from '@components/CustomText';
import crashIcon from '@assets/crash-icon.png';

import styles from './styles';

const HIT_SLOP = 30;
export default function Item({ title, onPress }) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.mainButton}>{title}</CustomText>
      <TouchableOpacity
        onPress={onPress}
        hitSlop={{ top: HIT_SLOP, right: HIT_SLOP, left: HIT_SLOP, bottom: HIT_SLOP }}>
        <Image source={crashIcon} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}
