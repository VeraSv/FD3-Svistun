import React from 'react';
import PropTypes from 'prop-types';
import RainbowFrame from './RainbowFrame';
import './ColorFrame.css'

class ColorFrame extends React.Component {
    render() { let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
    return (
        <RainbowFrame colors={colors}>
          <div className='Block'>Hello!</div>
        </RainbowFrame>
      );
}
}

export default ColorFrame 
