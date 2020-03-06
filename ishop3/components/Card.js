import React from 'react';
import PropTypes from 'prop-types';
import './editCard.css';
class Card extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price:PropTypes.string.isRequired,
    count:PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  } 
  
  render(){
        
    return(
    <div><h2>{this.props.name}</h2>
      <table className='Card'>
        <tbody>
          <tr><td>{'Цена: '+this.props.price}</td></tr>
          <tr><td>{'Остаток: '+this.props.count}</td></tr>
          <tr><td>{'URL: '+this.props.url}</td></tr>
       </tbody>
      </table>
    </div>)
  }
}
export default Card