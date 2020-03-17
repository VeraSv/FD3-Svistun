import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  
  render() {
    
    if(this.props.colors.length==0)
    return(this.props.children)
     /*
      function f(a,i) {
      return <div style={{border:"solid 5px "+i ,padding:"10px"}}>{a}</div>  
      };
     var div= this.props.colors.reduce(f,this.props.children)*/
else
    return (
     //div
    <div style={{border:"solid 5px "+this.props.colors[0],padding:"10px"}}><RainbowFrame colors={this.props.colors.slice(1)}>
    {this.props.children}
  </RainbowFrame></div>
    );
  }

}

export default RainbowFrame;