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
    if (item.checked) {
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
        id={item.id}
        itemName={item.text}
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
