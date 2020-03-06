'use strict'
import React from 'react';
import PropTypes from 'prop-types';

class Goods extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    selectedGood:PropTypes.string.isRequired,
    deleteGood:PropTypes.func.isRequired,
    drawCard:PropTypes.func.isRequired,
    editDisabled:PropTypes.bool.isRequired,
    select:PropTypes.func.isRequired,
    price:PropTypes.string.isRequired,
    count:PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    setDisabled:PropTypes.func.isRequired,
    disabled:PropTypes.bool.isRequired,
    selectedState:PropTypes.bool.isRequired,
    changeCard:PropTypes.bool.isRequired
  } 
    
  selectedRow=(EO) =>{
    if(this.props.selectedGood!='new'){
          
      if (this.props.changeCard==false) { 
        if(EO.target.value=='Edit') {
         
          this.props.select('edit');
          this.props.setDisabled(true)
          this.props.drawCard([{name:this.props.name, price:this.props.price, count:this.props.count, url:this.props.url}])
        }
       else if(EO.target.value=='Delete') {
        
         var question=confirm('Удалить товар?');
        
         if (question) this.props.deleteGood(this.props.name);
        EO.stopPropagation();    
        }
        else { this.props.select(this.props.name)
          this.props.setDisabled(false)
          this.props.drawCard([{name:this.props.name, price:this.props.price, count:this.props.count, url:this.props.url}])
        }
      
      }
    }
  }
               
    render(){
      var color='';
        if (this.props.selectedState==true) {
          color='red';
        } else color='white';
      return(<tr key={this.props.name} id={this.props.name} style={{background:color}} onClick={this.selectedRow}> 
       
      <td>{this.props.name}</td> 
      <td>{this.props.price}</td>
      <td>{this.props.count}</td>
      <td>{this.props.url}</td>
        <td>
        <input type={'button'} value={'Edit'} onClick={this.selectedRow} disabled={this.props.editDisabled}/>
     <input type={'button'} value={'Delete'} onClick={this.selectedRow} disabled={this.props.disabled}/>
     
    </td>
      </tr>
      )
      
     }
  
  };

 export default Goods;