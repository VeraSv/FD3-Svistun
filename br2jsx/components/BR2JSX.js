import React from 'react';
import './Block.css'
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  render() {
       var s=this.props.text.split(/<|>/g);
   var re=/br ?\/?/;
   var l=[];
   s.forEach((i)=>{
     if (re.test(i)) i=<br></br>;
     l.push(i)
   })
 
     return (
      <div className='Block'>{l}</div>
    );
  }

}

export default RainbowFrame;