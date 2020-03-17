import React from 'react';
import './Block.css'
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  render() {
  /*var s=this.props.text.split(/<|>/g);
   var re=/br ?\/?/;
   var l=[];
   s.forEach((i)=>{
     if (re.test(i)) i=<br></br>;
     l.push(i)
   })*/
  var s=this.props.text.split(/<br *\/?>/i);
  var l=[];
  s.forEach((a,i)=>{
    if(i) {
      l.push(<br />)
    }
      l.push(a);
      return l
    
  })
     return (
      <div className='Block'>{l}</div>
    );
  }

}

export default RainbowFrame;