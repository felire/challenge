import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionsCreators as ItemsActions } from '@redux/items/actions';

import Home from './layout';
import './i18n';

class HomeContainer extends Component {
  componentDidMount() {}

  render() {
    const { items, removeItem, addItem } = this.props;
    return <Home items={items} removeItem={removeItem} addItem={addItem} />;
  }
}

const mapStateToProps = store => ({
  items: store.items.items
});

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(ItemsActions.removeItem(item)),
  addItem: item => dispatch(ItemsActions.addItem(item)),
  getItems: () => dispatch(ItemsActions.getItems())
});

const connectHomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default connectHomeContainer;
