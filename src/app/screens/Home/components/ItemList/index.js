import React from 'react';

import IsEmptyWrapper from '../IsEmptyWrapper';

import DiscountListLayout from './layout';

const DiscountList = props => <DiscountListLayout {...props} />;

export default IsEmptyWrapper(DiscountList);
