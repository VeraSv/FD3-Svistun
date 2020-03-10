import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  
  render() {
     
      function f(a,i) {
      return <div style={{border:"solid 5px "+i ,padding:"10px"}}>{a}</div>
          
      };
     var div= this.props.colors.reduce(f,this.props.children)
    return (
     div
       
    );
  }

}

export default RainbowFrame;