import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators as ItemsActions } from '@redux/items/actions';

import Item from './layout';

class ItemContainer extends Component {
  handleRemoveItem = () => {
    const { title, id, removeItem } = this.props;
    removeItem({ title, id });
  };

  render() {
    const { title } = this.props;
    return <Item title={title} onPress={this.handleRemoveItem} />;
  }
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(ItemsActions.removeItem(item))
});

export default connect(null, mapDispatchToProps)(ItemContainer);
