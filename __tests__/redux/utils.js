import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

export const setProviderToComponent = Component => <Provider store={store}>{Component}</Provider>;
