/**
*
* MiniForm
*
*/

import React from 'react';
// import styled from 'styled-components';


function MiniForm(props) {
  let item = {id: 3, text: props.newItem}
  let payload = [ ...props.items, item ]

  let handleSubmittal = (event) => {
    event.preventDefault();
    props.handleSubmit(payload);
  }

  return (
    <div>
      <form onSubmit={handleSubmittal}>
        <label>
          New Item:
          <input
            onChange={props.onChangeItemname}
            type='text'
            value={props.newItem}
          />
        </label>
        <input type='submit' value='Submit'/>
      </form>
    </div>
  );
}

MiniForm.propTypes = {

};

export default MiniForm;
