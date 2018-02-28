/**
 *
 * ItemListApp
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Item from '../../components/Item';
import MiniForm from '../../components/Miniform';
import List from '../../components/List';

export class ItemListApp extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      items: ['Chips', 'Dip', 'Soda'],
      selectedItems: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(event) {
    let input = event.target.value;

    this.setState({
      newItem: input
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let newItem = this.state.newItem;
    let updatedItems = this.state.items.concat(newItem)

    this.setState({
      items: updatedItems,
      newItem: ''
    })
  }

  handleDelete(index) {
    let items = this.state.items;
    delete items[index];

    this.setState({
      items: items
    })
  }

  handleClick(event) {
    let item = event.target.innerHTML;
    let selectedItems = this.state.selectedItems;
    let updatedSelectedItems;

    if (selectedItems.includes(item)) {
      let index = selectedItems.indexOf(item)
      delete selectedItems[index]
      updatedSelectedItems = selectedItems
    } else {
      updatedSelectedItems = selectedItems.concat(item)
    }

    this.setState({
      selectedItems: updatedSelectedItems
    })
  }

  render() {

    return (
      <div>
        <List
          handleClick={this.handleClick}
          handleDelete={this.handleDelete}
          items={this.state.items}
          selectedItems={this.state.selectedItems}
        />
        <MiniForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          newItem={this.state.newItem}/>
      </div>
    );
  }
}

ItemListApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(ItemListApp);
