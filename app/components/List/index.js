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
      let payload = props.items.slice(0, index).concat(props.items.slice(index + 1))
      
      props.handleDelete(payload)
    }

    let onClick = () => {
      let checkedSwitchedItem = props.items[index]
      checkedSwitchedItem.checked = !checkedSwitchedItem.checked
      let payload = props.items.slice(0, index).concat(checkedSwitchedItem).concat(props.items.slice(index + 1))

      props.handleClick(payload);
    }

    return (
      <Item
        handleClick={onClick}
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
