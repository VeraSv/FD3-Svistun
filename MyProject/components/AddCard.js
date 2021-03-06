import React from 'react';
import PropTypes from 'prop-types';
import './AddCard.css'
import {events} from './events';
class AddCard extends React.PureComponent {
  static propTypes={
    id:PropTypes.number,
    page:PropTypes.string,
    disabled:PropTypes.bool,
  }
 
  state = {
    disabled:this.props.disabled,
    newCard:{id:this.props.id, name:'', url:'', description:''},
    validName:'Пожалуйста, введите название',
    validUrl:'Пожалуйста, введите URL',
    validDescr:'Пожалуйста, введите описание',
    change:false,      
  }
   
  newDescription=null;
  newName=null;
  newUrl=null;
  
  setNewDescription=(ref)=>{
   this.newDescription=ref
  }
  
  setNewName=(ref)=>{
    this.newName=ref
  }

  setNewUrl=(ref)=>{
    this.newUrl=ref
  }

  setNewText=()=>{
    var newCard=this.state.newCard;
    newCard.description=this.newDescription.value;
    newCard.url=this.newUrl.value;
    newCard.name=this.newName.value;
    this.setState({newCard:newCard})
    events.emit('AddNewCard',this.state.newCard,this.props.page);
    events.emit('CancelAdd');
  }

  cancel=()=>{
    if(this.state.change) {         
     let question =confirm('Есть несохраненные данные!')
     if(question) { events.emit('CancelAdd',false);
       this.setState({change:false})
      }
    } else  events.emit('CancelAdd',false);
  }

  validName=(EO)=>{
    if(!EO.target.value) {
      this.setState({validName:'Пожалуйста, введите название'});
      this.setState({disabled:true})
    } else {
      this.setState({validName:''});
      this.setState({disabled:false})
    }
  }

  validUrl=(EO)=>{
    if(!EO.target.value) {
      this.setState({validUrl:'Пожалуйста, введите URL'});
      this.setState({disabled:true})
    } else {
      this.setState({validUrl:''});
      this.setState({disabled:false})
    }
  }

  validDescr=(EO)=>{
    if(!EO.target.value) {
      this.setState({validDescr:'Пожалуйста, введите описание'});
      this.setState({disabled:true})
    } else {
      this.setState({validDescr:''});
      this.setState({disabled:false})
    }
        
  }
    
  onChange=()=>{
    this.setState({change:true})
    events.emit('ChangeCard',true)
    events.emit('DisabledDelete',true);
  }
    
  render(){
      
    return(  
      <div className='AddCard'>
        <div className='Form'>
          <h2>{'Добавить позицию'}</h2>
          <table className='NewCard' >
            <tbody>
              <tr><td>{'Название: '}</td><td  className={'NewName'}><input className={'NewName'} type={'text'} defaultValue='' ref={this.setNewName} onBlur={this.validName} onChange={this.onChange}/></td><td className='ValText'><span className='Valid'>{this.state.validName}</span></td></tr>
              <tr><td>{'Картинка'}</td><td className={'NewUrl'}><textarea className={'NewUrl'} defaultValue='' ref={this.setNewUrl} onBlur={this.validUrl} onChange={this.onChange}/></td><td className='ValText'><span className='Valid'>{this.state.validUrl}</span></td></tr>
              <tr><td>{'Описание: '}</td><td  className={'NewText'}><textarea  className={'NewText'}  defaultValue='' ref={this.setNewDescription} onBlur={this.validDescr} onChange={this.onChange}/></td><td className='ValText'><span className='Valid'>{this.state.validDescr}</span></td></tr>
            </tbody>
          </table>
          <input className={'SaveAdd'} type={'button'} value={'Save'} onClick={this.setNewText} disabled={this.state.disabled}/>
          <input className={'CancelAdd'} type={'button'} value={'Cancel'} onClick={this.cancel} />
        </div>
      </div>)
        
  }
}

export default AddCard