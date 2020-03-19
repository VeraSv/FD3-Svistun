import React from 'react';
import PropTypes from 'prop-types';
import BR2JSX from './BR2JSX';
class Block extends React.Component {
    render() { 

      let text="первый<br>второй<br/>третий<br />последний";
      return <BR2JSX text={text}/>;
}
}
export default Block
