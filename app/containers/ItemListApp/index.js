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
      items: [
        {id: 0, text: 'Chips', checked: false},
        {id: 1, text: 'Dip', checked: false},
        {id: 2, text: 'Soda', checked: false}
      ]
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
    let newItem = {id: this.state.items.length + 1, text: this.state.newItem, checked: false};
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
    let itemId = +event.target.id;
    let items = this.state.items;

    items[itemId].checked = !items[itemId].checked

    this.setState({
      items: items
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
