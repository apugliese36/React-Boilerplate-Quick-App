/**
*
* TopBar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class TopBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}

TopBar.propTypes = {

};

export default TopBar;
