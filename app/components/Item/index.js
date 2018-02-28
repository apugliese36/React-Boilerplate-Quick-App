/**
*
* Item
*
*/

import React from 'react';
// import styled from 'styled-components';
import './Item.css';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Item = props => {
  return (
    <li>
      <span id={props.id} className={props.style} onClick={props.handleClick}>{props.itemName}</span>
      <button className='delete' onClick={props.deleteItem}>DELETE</button>
    </li>
  );
}

Item.propTypes = {

};

export default Item;
