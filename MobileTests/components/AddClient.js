import React from 'react';
import PropTypes from 'prop-types';

import {events} from './events';
class AddClient extends React.PureComponent {
   static PropTypes={
       id:PropTypes.number
   }
  
    state = {
        
        newCard:{id:this.props.id, name:'', surname:'',middleName:'', balance:''},
    }
   
      newSurName=null;
      newName=null;
      newMiddleName=null;
      newBalance=null;
      setNewSurName=(ref)=>{
      this.newSurName=ref
      
      }
      setNewName=(ref)=>{
        this.newName=ref
        
        }
        setMiddleName=(ref)=>{
            this.newMiddleName=ref
            
            }
            setBalance=(ref)=>{
                this.newBalance=ref
                
                }
      setNewText=()=>{
if(this.newSurName) {
    let newText=this.newSurName.value;
      this.setState({surname:newText});
       
}
if(this.newName) {
    let newText=this.newName.value;
      this.setState({name:newText});
       
}
if(this.newMiddleName) {
    let newText=this.newMiddleName.value;
      this.setState({middleName:newText});
       
}
if(this.newBalance) {
    let newText=this.newSurName.value;
      this.setState({balance:newText});
       
}
var newCard=this.state.newCard;
      newCard.surname=this.newSurName.value;
      newCard.name=this.newName.value;
      newCard.middleName=this.newMiddleName.value;
      newCard.balance=this.newBalance.value;
      this.setState({newCard:newCard})
events.emit('AddCard',this.state.newCard);
events.emit('Cancel');
      }

      cancel=()=>{
        events.emit('Cancel');
      }
       render(){
      
          return(   <div><h2>{'Редактирование'}</h2>
         <table className='Card' >
           <tbody>
           <tr><td>{'Фамилия: '}</td><td><input type={'text'} defaultValue='' ref={this.setNewSurName}/></td></tr>
             <tr><td>{'Имя: '}</td><td><input type={'text'} defaultValue='' ref={this.setNewName}/></td></tr>
             <tr><td>{'Отчество: '}</td><td><input type={'text'} defaultValue='' ref={this.setMiddleName}/></td></tr>
             <tr><td>{'Баланс: '}</td><td><input type={'text'} defaultValue=''  ref={this.setBalance}/></td></tr>
           </tbody>
         </table>
         <input type={'button'} value={'Save'} onClick={this.setNewText} />
         <input type={'button'} value={'Cancel'} onClick={this.cancel}/>
         </div>)
        
       }
    }
    export default AddClient