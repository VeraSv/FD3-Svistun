'use strict'
import React from 'react';
import PropTypes from 'prop-types';

class Goods extends React.Component {

   // displayName: 'Goods',

   static propTypes = {
       name: PropTypes.string.isRequired,
       id: PropTypes.string.isRequired,
       selectedGood:PropTypes.string.isRequired,
       deleteGood:PropTypes.func.isRequired,
       drawCard:PropTypes.func.isRequired,
       edit:PropTypes.func.isRequired,
       select:PropTypes.func.isRequired,
       price:PropTypes.string.isRequired,
       count:PropTypes.number.isRequired,
       url: PropTypes.string.isRequired,
      } 
      selectedRow=() =>{
        this.props.select(this.props.name)
        
        this.props.drawCard([{name:this.props.name, price:this.props.price, count:this.props.count, url:this.props.url}])
      }
      
      editRow =() =>{
        this.props.edit('edit');
        
         this.props.drawCard([{name:this.props.name, price:this.props.price, count:this.props.count, url:this.props.url}])
      } 

      deleteRow=()=> {
        var question=confirm('Удалить товар?');
        
        if (question) this.props.deleteGood(this.props.name)
      }
     
    render(){
      var color='';
        if (this.props.selectedGood==this.props.name) {
          color='red';
        } else color='white';
      return(<tr key={this.props.name} id={this.props.name} style={{background:color}} onClick={this.selectedRow}> 
       
      <td>{this.props.name}</td> 
      <td>{this.props.price}</td>
      <td>{this.props.count}</td>
      <td>{this.props.url}</td>
        <td>
        <input type={'button'} value={'Edit'} onClick={this.editRow}/>
     <input type={'button'} value={'Delete'} onClick={this.deleteRow}/>
     
    </td>
      </tr>
      )
      
     }
  
  };

 export default Goods;