import React from 'react';
import './Block.css'
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  render() {
    
   var s=this.props.text.match(/[а-я]+([^(<br ?\/?>)])/g);
 
    var l=[]  
   s.map((i)=> {
    var br=<br></br>
  l.push(i)
       l.push(br)
       });
     return (
      <div className='Block'>{l}</div>
    );
  }

}

export default RainbowFrame;