import React from 'react';
import PropTypes from 'prop-types';
import {events} from './events';
class PageInfo extends React.PureComponent {

    static propTypes = {
     info:PropTypes.object,
    cardState:PropTypes.number,
    page:PropTypes.string
    };
    state = {
      name:this.props.info.name,
      description:this.props.info.description,
     info:this.props.info,
      newCard:{id:this.props.info.id, name:this.props.info.name,description:this.props.info.description},
      validName:'',
      validDescr:''
  }
    newName=null;
    newDescription=null;
    setName=(ref)=>{
      this.newName=ref
    }
setDescription=(ref)=>{
  this.newDescription=ref
}

setNewText=()=>{
  if(this.newDescription) {
    let newText=this.newDescription.value;
      this.setState({description:newText});
       
}
if(this.newName) {
    let newText=this.newName.value;
      this.setState({name:newText});
       
}
var newCard=this.state.newCard;
      newCard.description=this.newDescription.value;
      newCard.name=this.newName.value;

      this.setState({newCard:newCard})
events.emit('SaveCard',this.state.newCard,this.props.page);
events.emit('Cancel',1);
}


    clickedEdit=()=>{
      events.emit('EditCard',2,this.props.info.id);
    }
    cancel=()=>{
      events.emit('Cancel',1);
    }
    delete=()=>{
      events.emit('DeleteClicked',this.props.info.id,this.props.page);
    }

    validName=(EO)=>{
      if(!EO.target.value) {
        this.setState({validName:'Пожалуйста, введите значение'});
       } else {
           this.setState({validName:''});
       }
    }

    validDescr=(EO)=>{
      if(!EO.target.value) {
        this.setState({validDescr:'Пожалуйста, введите значение'});
       } else {
           this.setState({validDescr:''});
       }
    }

    render() {
      if(this.props.cardState==1)
      return (
        <tr key={this.props.info.id} id={this.props.info.id} > 
         
        <td>{this.state.info.name}</td> 
        <td className='Description'>{this.state.info.description}</td>
        
          <td>
          <input type={'button'} value={'Edit'} onClick={this.clickedEdit}/>
       <input type={'button'} value={'Delete'} onClick={this.delete}/>
       
      </td>
        </tr>
      )
      ;
     if(this.props.cardState==2)
     return (
      <tr  key={this.props.info.id} id={this.props.info.id} > 
       
      <td><input  className={'Edit'} type={'text'} defaultValue={this.state.info.name} ref={this.setName} onBlur={this.validName}></input><span className={'Valid'}>{this.state.validName}</span></td> 
      <td className='Description'><textarea  className={'Edit Description'}  defaultValue={this.state.info.description} ref={this.setDescription} onBlur={this.validDescr}></textarea><span className={'Valid'}>{this.state.validDescr}</span></td>
      
        <td>
        <input type={'button'} value={'Save'} style={{background:'green'}} onClick={this.setNewText}/>
     <input type={'button'} value={'Cancel'}  style={{background:'red'}} onClick={this.cancel}/>
     
     </td>
      </tr>
    )
    ;
    }
  
  }
  export default PageInfo;  