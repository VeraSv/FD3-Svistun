import React from 'react';
import PropTypes from 'prop-types';

import './editCard.css';
class NewCard extends React.Component {
  static propTypes = {
    select:PropTypes.func.isRequired,
    newName:PropTypes.func.isRequired,
    disabled:PropTypes.func.isRequired,
    editDesabled:PropTypes.func.isRequired,
  } 

  state = {
    newCard:{name:'', count:0, price:'', url:''},
    validName:'Пожалуйста, введите значение',
    name:'',
    validCount:'Пожалуйста, введите значение',
    count:'',
    validPrice:'Пожалуйста, введите значение',
    price:'',
    validUrl:'Пожалуйста, введите значение',
    url:'',
    addDisabled:true,
  }

  cancelEdit=()=>{
    this.props.select('');
    this.setState({validName:'',addDisabled:false});
    this.props.disabled(false);
    this.props.editDesabled(false)
  }

  newRow=()=>{
    this.props.newName(this.state.newCard)
  }

  newName=(EO)=>{
    var newCard=this.state.newCard;
    newCard.name=EO.target.value
    this.setState({newCard:newCard,name:EO.target.value})
  }

  validName=(EO)=>{
    if(!EO.target.value) {
     this.setState({validName:'Пожалуйста, введите значение'});
    } else {
        this.setState({validName:''});
    }
    this.validForm()
  }
  
  newPrice=(EO)=>{
    var newCard=this.state.newCard;
    newCard.price=EO.target.value
    this.setState({newCard:newCard,price:EO.target.value})
  }
         
  validPrice=(EO)=>{
    if(!EO.target.value) {
     this.setState({validPrice:'Пожалуйста, введите значение'});
    } else {
      this.setState({validPrice:''});
    }
    this.validForm()
  }
         
  newCount=(EO)=>{
    var newCard=this.state.newCard;
    newCard.count=EO.target.value
    this.setState({newCard:newCard,count:EO.target.value})
  }
         
  validCount=(EO)=>{
    if(!EO.target.value) {
     this.setState({validCount:'Пожалуйста, введите значение'});
    } else {
      this.setState({validCount:''});
    }
    this.validForm()
  }
        
  newUrl=(EO)=>{
    var newCard=this.state.newCard;
    newCard.url=EO.target.value
   this.setState({newCard:newCard,url:EO.target.value})
  }
         
  validUrl=(EO)=>{
    if(!EO.target.value) {
      this.setState({validUrl:'Пожалуйста, введите значение'});
    } else {
      this.setState({validUrl:''});
    }
    this.validForm()
 }
        
 validForm=()=>{
    if(!this.state.name||!this.state.price||!this.state.count||!this.state.url) this.setState({addDisabled:true})
    else this.setState({addDisabled:false})
  }
       
  render(){
        
    return(  
    <div><h2>{'Добавить товар'}</h2>
      <table className='Card'>
        <tbody>
         <tr><td>{' Название: '}</td><td><input type={'text'} id={'name'} value={this.state.name} onChange={this.newName} onBlur={this.validName}/><span className='Valid'>{this.state.validName}</span></td></tr>
             <tr><td>{'Цена: '}</td><td><input type={'text'} id={'price'} value={this.state.price} onChange={this.newPrice} onBlur={this.validPrice}/><span className='Valid'>{this.state.validPrice}</span></td></tr>
             <tr><td>{'Остаток: '}</td><td><input type={'text'} id={'count'} value={this.state.count} onChange={this.newCount} onBlur={this.validCount}/><span className='Valid'>{this.state.validCount}</span></td></tr>
             <tr><td>{'URL: '}</td><td><input type={'text'} id={'url'} value={this.state.url} onChange={this.newUrl} onBlur={this.validUrl}/><span className='Valid'>{this.state.validUrl}</span></td></tr>
        </tbody>
      </table>
      <input type={'button'} value={'Add'} onClick={this.newRow} disabled={this.state.addDisabled}/>
      <input type={'button'} value={'Cancel'} onClick={this.cancelEdit}/>
    </div>)

  }
}
export default NewCard