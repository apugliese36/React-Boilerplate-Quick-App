/**
*
* List
*
*/

import React from 'react';
import Item from '../Item';
// import styled from 'styled-components';

function List(props) {
  let items = props.items.map((item, index) => {
    let style;
    if (props.selectedItems.includes(item)) {
      style = 'selected'
    }

    let deleteItem = () => {
      props.handleDelete(index)
    }

    return (
      <Item
        handleClick={props.handleClick}
        style={style}
        key={index}
        itemName={item}
        deleteItem={deleteItem}
      />
    )
  })

  return (
    <ul>
      {items}
    </ul>
  );
}

List.propTypes = {

};

export default List;
