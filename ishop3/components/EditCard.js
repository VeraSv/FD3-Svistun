import React from 'react';
import PropTypes from 'prop-types';
import './editCard.css';
class EditCard extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        price:PropTypes.string.isRequired,
        count:PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
       
       } 
       render(){
         
          return(   <div><h2>{'Редактировать товар: '+this.props.name}</h2>
         <table className='Card'>
           <tbody>
             
             <tr><td>{'Цена: '}</td><td><input type={'text'} value={this.props.price}/></td></tr>
             <tr><td>{'Остаток: '}</td><td><input type={'text'} value={this.props.count}/></td></tr>
             <tr><td>{'URL: '}</td><td><input type={'text'} value={this.props.url}/></td></tr>
           </tbody>
         </table>
         <input type={'button'} value={'Save'} onClick={this.deleteRow}/>
         <input type={'button'} value={'Cancel'} onClick={this.deleteRow}/>
         </div>)
        
       }
    }
    export default EditCard