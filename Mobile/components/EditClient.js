import React from 'react';
import PropTypes from 'prop-types';
import './EditCard.css'
import {events} from './events';
class EditClient extends React.PureComponent{

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname:PropTypes.string.isRequired,
    middleName:PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    } 
    
    state = {
        name:this.props.name,
        surname:this.props.surname,
        middleName:this.props.middleName,
        balance: this.props.balance,
        newCard:{id:this.props.id, name:this.props.name, surname:this.props.surname,middleName:this.props.middleName, balance:this.props.balance},
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
events.emit('EditCard',this.state.newCard);
events.emit('Cancel');
      }

      cancel=()=>{
        events.emit('Cancel');
      }
       render(){
        console.log("MobileClient id=Edit "+this.props.name+" render");
          return(   <div><h2>{'Редактирование'}</h2>
         <table className='Card' id={this.props.id}>
           <tbody>
           <tr><td>{'Фамилия: '}</td><td><input type={'text'} defaultValue={this.state.surname}  ref={this.setNewSurName}/></td></tr>
             <tr><td>{'Имя: '}</td><td><input type={'text'} defaultValue={this.state.name} ref={this.setNewName}/></td></tr>
             <tr><td>{'Отчество: '}</td><td><input type={'text'} defaultValue={this.state.middleName} ref={this.setMiddleName}/></td></tr>
             <tr><td>{'Баланс: '}</td><td><input type={'text'} defaultValue={this.state.balance}  ref={this.setBalance}/></td></tr>
           </tbody>
         </table>
         <input type={'button'} value={'Save'} onClick={this.setNewText} />
         <input type={'button'} value={'Cancel'} onClick={this.cancel}/>
         </div>)
        
       }
    }
    export default EditClient