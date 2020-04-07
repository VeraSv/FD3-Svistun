import React from 'react';
import PropTypes from 'prop-types';
import './AddCard.css'
import {events} from './events';
class AddCard extends React.PureComponent {
   static PropTypes={
       id:PropTypes.number,
       page:PropTypes.string
   }
  
    state = {
     
        newCard:{id:this.props.id, name:'', description:''},
        validName:'Пожалуйста, введите значение',
        validDescr:'Пожалуйста, введите значение',
       
    }
   
      newDescription=null;
      newName=null;
      
      setNewDescription=(ref)=>{
      this.newDescription=ref
      
      }
      setNewName=(ref)=>{
        this.newName=ref
        
        }

      setNewText=()=>{
if(this.newDescription) {
    let newText=this.newDescription.value;
    
       
}
if(this.newName) {
    let newText=this.newName.value;
    
       
}

var newCard=this.state.newCard;
      newCard.description=this.newDescription.value;
      newCard.name=this.newName.value;
      
      this.setState({newCard:newCard})
events.emit('AddNewCard',this.state.newCard,this.props.page);
events.emit('CancelAdd');
      }

      cancel=()=>{
        events.emit('CancelAdd',false);
      }

      validName=(EO)=>{
        if(!EO.target.value) {
         this.setState({validName:'Пожалуйста, введите значение'});
        } else {
            this.setState({validName:''});
        }
       // this.validForm()
      }

      validDescr=(EO)=>{
        if(!EO.target.value) {
         this.setState({validDescr:'Пожалуйста, введите значение'});
        } else {
            this.setState({validDescr:''});
        }
        //this.validForm()
      }

       render(){
      
          return(   <div><h2>{'Добавить позицию'}</h2>
         <table className='NewCard' >
           <tbody>
           <tr><td>{'Название: '}</td><td  className={'NewText'}><input className={'NewText'} type={'text'} defaultValue='' ref={this.setNewName} onBlur={this.validName}/><span className='Valid'>{this.state.validName}</span></td></tr>
             <tr><td>{'Описание: '}</td><td  className={'NewText'}><textarea  className={'NewText'}  defaultValue='' ref={this.setNewDescription} onBlur={this.validDescr}/><span className='Valid'>{this.state.validDescr}</span></td></tr>
             
           </tbody>
         </table>
         <input type={'button'} value={'Save'} onClick={this.setNewText} />
         <input type={'button'} value={'Cancel'} onClick={this.cancel}/>
         </div>)
        
       }
    }
    export default AddCard