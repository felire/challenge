import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators as ItemsActions } from '@redux/items/actions';

import Home from './layout';
import './i18n';

class HomeContainer extends Component {
  state = { modalVisibility: false };

  componentDidMount() {
    const { getItems } = this.props;
    getItems();
  }

  onHandleAddItem = values => {
    const { addItem } = this.props;
    const { itemTitle } = values;
    addItem({ title: itemTitle });
    this.handleCancelAddItem();
  };

  handleCancelAddItem = () => this.setState({ modalVisibility: false });

  handleOpenModal = () => this.setState({ modalVisibility: true });

  render() {
    const { items } = this.props;
    const { modalVisibility } = this.state;
    return (
      <Home
        items={items}
        addItem={this.onHandleAddItem}
        modalVisibility={modalVisibility}
        onAddItem={this.handleOpenModal}
        onCloseModal={this.handleCancelAddItem}
      />
    );
  }
}

const mapStateToProps = store => ({
  items: store.items.items
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(ItemsActions.addItem(item)),
  getItems: () => dispatch(ItemsActions.getItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
