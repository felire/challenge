import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Home from '@screens/Home/layout';

import { setProviderToComponent } from '../utils';

const EMPTY_LIST = [];
const TWO_ITEMS_LIST = [
  { id: 0, title: 'Example 1' },
  { id: 1, title: 'Example 2' }
];

describe('some snapshots tests', () => {
  it('Empty list without modal', () => {
    const tree = renderer
      .create(setProviderToComponent(<Home items={EMPTY_LIST} modalVisibility={false} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Two items list without modal', () => {
    const tree = renderer
      .create(setProviderToComponent(<Home items={TWO_ITEMS_LIST} modalVisibility={false} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('empty list with modal', () => {
    const tree = renderer
      .create(setProviderToComponent(<Home items={EMPTY_LIST} modalVisibility={true} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('two items list with modal', () => {
    const tree = renderer
      .create(setProviderToComponent(<Home items={TWO_ITEMS_LIST} modalVisibility={true} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
