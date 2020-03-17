import React from 'react';
import PropTypes from 'prop-types';
import {withRainbowFrame} from './withRainbowFrame';
import Fragment from './Fragment'
import './ColorFrame.css'

class ColorFrame extends React.Component {
    render() { 
      let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
      let FramedFragment=withRainbowFrame(colors)(Fragment);
    return (
      <FramedFragment>
      Hello!
    </FramedFragment>
      );
}
}

export default ColorFrame 
