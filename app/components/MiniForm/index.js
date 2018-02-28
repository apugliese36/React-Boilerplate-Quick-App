/**
*
* MiniForm
*
*/

import React from 'react';
// import styled from 'styled-components';


function MiniForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          New Item:
          <input
            onChange={props.handleInputChange}
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
