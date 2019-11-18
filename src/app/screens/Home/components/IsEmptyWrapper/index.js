import React from 'react';

import EmptyList from './layout';

const isEmptyConditionFn = ({ data }) => !data.length || !data;

const IsEmptyWrapper = Component => props => // eslint-disable-line
  isEmptyConditionFn(props) ? <EmptyList /> : <Component {...props} />; // eslint-disable-line

export default IsEmptyWrapper;
