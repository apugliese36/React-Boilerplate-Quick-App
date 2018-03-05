/**
 *
 * ItemListApp
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectItemListApp from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { changeItemname, addItem, deleteItem, toggleItem } from './actions'

import Item from '../../components/Item';
import MiniForm from '../../components/Miniform';
import List from '../../components/List';

export class ItemListApp extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>ItemListApp</title>
          <meta name="description" content="Description of ItemListApp" />
        </Helmet>
        <List
          handleClick={this.props.onToggleItem}
          handleDelete={this.props.onDeleteItem}
          items={this.props.itemlistapp.items}
        />
        <MiniForm
          items={this.props.itemlistapp.items}
          handleSubmit={this.props.onAddItem}
          newItem={this.props.itemlistapp.newItem}
          onChangeItemname={this.props.onChangeItemname}
        />
      </div>
    );
  }
}

ItemListApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onChangeItemname: PropTypes.func,
  onAddItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onToggleItem: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  itemlistapp: makeSelectItemListApp()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeItemname: (event) => dispatch(changeItemname(event.target.value)),
    onAddItem: (payload) => dispatch(addItem(payload)),
    onDeleteItem: (payload) => dispatch(deleteItem(payload)),
    onToggleItem: (payload) => dispatch(toggleItem(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'itemListApp', reducer });
const withSaga = injectSaga({ key: 'itemListApp', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ItemListApp);
