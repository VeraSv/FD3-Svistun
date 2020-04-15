import React from 'react';
import PropTypes from 'prop-types';
import {events} from './events';
import {Prompt} from 'react-router-dom';
import './Info.css'
class Info extends React.PureComponent {

    static propTypes = {
     info:PropTypes.object,
    cardState:PropTypes.number,
    page:PropTypes.string,
    disabled:PropTypes.bool,
    disabledDelete:PropTypes.bool
    };

    state = {
      name:this.props.info.name,
      description:this.props.info.description,
     info:this.props.info,
      newCard:{id:this.props.info.id, name:this.props.info.name,description:this.props.info.description},
      validName:'',
      validDescr:'',
      change:false,
      className:''
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
      events.emit('DisabledDelete',true);
    }
    cancel=()=>{
      if(this.state.change) { 
        let question =confirm('Есть несохраненные данные!')
        if(question) { events.emit('Cancel',1);

        this.setState({change:false})
                }
                } else  events.emit('Cancel',1);


    }
    delete=(EO)=>{
      
      var question=confirm('Удалить товар?');
        
      if (question) { 
this.setState({className:'Deleted'})
      events.emit('DeleteClicked',this.props.info.id,this.props.page);

     

     EO.stopPropagation();    
     }

     
    }

    onChange=()=>{
      events.emit('ChangeCard',true)
      events.emit('DisabledDelete',true);
      this.setState({change:true})
    }

    validName=(EO)=>{
      if(!EO.target.value) {
        this.setState({validName:'Пожалуйста, введите название'});
       } else {
           this.setState({validName:''});
       }
    }

    validDescr=(EO)=>{
      if(!EO.target.value) {
        this.setState({validDescr:'Пожалуйста, введите описание'});
       } else {
           this.setState({validDescr:''});
       }
    }

    render() {
      if(this.props.cardState==1)
      return (
        <tr key={this.props.info.id} id={this.props.info.id} className={this.state.className}> 
         
        <td>{this.state.info.name}</td> 
        <td className='Description'>{this.state.info.description}</td>
        
          <td>
          <input className='InputEdit' type={'button'} value={'Edit'} onClick={this.clickedEdit} disabled={this.props.disabled}/>
       <input className='Delete' type={'button'} value={'Delete'} onClick={this.delete} disabled={this.props.disabledDelete}/>
       
      </td>
        </tr>
      )
      ;
     if(this.props.cardState==2)
     return (
      <tr  key={this.props.info.id} id={this.props.info.id} > 
       
      <td><input  className={'Edit'} type={'text'} defaultValue={this.state.info.name} ref={this.setName} onBlur={this.validName} onChange={this.onChange}></input></td> 
      <td className='Description'><textarea  className={'Edit Description'}  defaultValue={this.state.info.description} ref={this.setDescription} onBlur={this.validDescr} onChange={this.onChange}></textarea></td>
      
        <td>
        <input className='SaveEdit' type={'button'} value={'Save'} style={{background:'green'}} onClick={this.setNewText} />
     <input className='CancelEdit' type={'button'} value={'Cancel'}  style={{background:'red'}} onClick={this.cancel} />
     
     </td>
     <td className='ValText'><span className={'Valid'}>{this.state.validName}</span><span className={'Valid'}>{this.state.validDescr}</span></td>
     <Prompt
					when={ this.state.change }
					message={ location => (
						`Вы уверены, что хотите перейти на другую страницу?`
					)}
				/>
      </tr>
    )
    ;
    }
  
  }
  export default Info;  