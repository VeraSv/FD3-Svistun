import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        price:PropTypes.string.isRequired,
        count:PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
       } 
       render(){
        return(<div><h2>{this.props.name}</h2>
            <table>
              <tbody>
                <tr>{'Цена: '+this.props.price}</tr>
                <tr>{'Остаток: '+this.props.count}</tr>
                <tr>{'URL: '+this.props.url}</tr>
              </tbody>
            </table>
            
            </div>)
       }
    }
    export default Card