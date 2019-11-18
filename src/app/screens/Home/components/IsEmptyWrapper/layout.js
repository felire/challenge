import React, { memo } from 'react';
import CustomText from '@components/CustomText';
import i18next from 'i18next';

import styles from './styles';

const EmptyList = () => (
  <CustomText medium dirtyGray spacingSmall style={styles.container}>
    {i18next.t('HOME:NO_ITEMS')}
  </CustomText>
);

export default memo(EmptyList);
