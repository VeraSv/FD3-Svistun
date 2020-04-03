import React from 'react';
import PropTypes from 'prop-types';
import {events} from './events';
class PageInfo extends React.PureComponent {

    static propTypes = {
     info:PropTypes.object,
    cardState:PropTypes.number
    };
    state = {
      name:this.props.info.name,
      description:this.props.info.description,
     info:this.props.info,
      newCard:{id:this.props.info.id, name:this.props.info.name,description:this.props.info.description},
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
events.emit('SaveCard',this.state.newCard);
events.emit('Cancel',1);
}


    clickedEdit=()=>{
      events.emit('EditCard',2,this.props.info.id);
    }
    cancel=()=>{
      events.emit('Cancel',1);
    }
    render() {
      if(this.props.cardState==1)
      return (
        <tr key={this.props.info.id} id={this.props.info.id} > 
         
        <td>{this.state.info.name}</td> 
        <td className='Description'>{this.state.info.description}</td>
        
          <td>
          <input type={'button'} value={'Edit'} onClick={this.clickedEdit}/>
       <input type={'button'} value={'Delete'} />
       
      </td>
        </tr>
      )
      ;
     if(this.props.cardState==2)
     return (
      <tr  key={this.props.info.id} id={this.props.info.id} > 
       
      <td><input  className={'Edit'} type={'text'} defaultValue={this.state.info.name} ref={this.setName}></input></td> 
      <td className='Description'><input  className={'Edit Description'} type={'text'} defaultValue={this.state.info.description} ref={this.setDescription}></input></td>
      
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