import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Info from './Info';
import AddCard from './AddCard'
import {events} from './events';
import './PageInfo.css'
import { pagesLoadingAC, pagesErrorAC, pagesSetAC } from "../redux/pagesAC";
class PageInfo extends React.PureComponent {

  static propTypes = {
   data:PropTypes.object,
    pageId:PropTypes.string
  };
 
  state={
    changeCard:false,
    disabledDelete:false,
   cardEdit:'',
   cardState:1,
   add:false,
   page:''
  }
 
   componentWillUnmount = () => {
     
    events.addListener('DisabledDelete',this.disabledDelete);
     events.addListener('EditCard',this.editCard);
     events.addListener('Cancel',this.cancel);
     events.addListener('ChangeCard',this.changeCard);
     events.addListener('CancelAdd',this.cancelAdd);
     
   };
   
   componentDidMount() {
    events.addListener('DisabledDelete',this.disabledDelete);
    events.addListener('ChangeCard',this.changeCard);
    events.addListener('EditCard',this.editCard);
    events.addListener('Cancel',this.cancel);
    
    events.addListener('CancelAdd',this.cancelAdd);
  
    if(this.props.pageId=='A'){this.setState({page:'pageA'})}
    if(this.props.pageId=='Б'){this.setState({page:'pageB'})}
    if(this.props.pageId=='В'){this.setState({page:'pageV'})}
   
 }

 disabledDelete=(value)=>{
   this.setState({disabledDelete:value})
 }

 editCard=(state,id)=>{
   this.setState({cardState:state, cardEdit:id})
 }
 cancel=(state)=>{
this.setState({cardState:state,changeCard:false,disabledDelete:false,disAdd:true})

 }

  addCard=()=>{
    this.setState({add:true, disabledDelete:true,changeCard:true})
    
   
    }
    cancelAdd=(state)=>{
      this.setState({add:state,changeCard:false,disabledDelete:false})
      
    }
    changeCard=(value)=>{
      this.setState({changeCard:value, disAdd:true})
    }

  render() {
  
  
    let info;
    

      if(this.props.pageId=='A'){ info=this.props.data.pageA.map(i=> {let cardState; if(this.state.cardEdit==i.id && this.state.cardState==2) cardState=2; else cardState=1; return <Info key={i.id} cardState={cardState} info={i} page={this.state.page} disabled={ this.state.changeCard} disabledDelete={this.state.disabledDelete}/>})};
      if(this.props.pageId=='Б'){ info=this.props.data.pageB.map(i=> {let cardState; if(this.state.cardEdit==i.id && this.state.cardState==2) cardState=2; else cardState=1; return <Info key={i.id} cardState={cardState} info={i} page={this.state.page} disabled={ this.state.changeCard} disabledDelete={this.state.disabledDelete}/>})};
      if(this.props.pageId=='В'){ info=this.props.data.pageV.map(i=> {let cardState; if(this.state.cardEdit==i.id && this.state.cardState==2) cardState=2; else cardState=1; return <Info key={i.id} cardState={cardState} info={i} page={this.state.page} disabled={  this.state.changeCard} disabledDelete={this.state.disabledDelete}/>})}
    
   
   let newCard=''
    if(this.state.add==true) {var x=Math.round(Math.random()*50/0.1)*0.1+50; newCard=<AddCard id={x} page={this.state.page}  disabled={this.state.changeCard} />}
    var disAdd; if(this.state.cardState==2) disAdd=true; else disAdd=false; 
    
    return (
      <div > 
      <table className='Table'>
       <tbody>
        <tr className='title'  key='title'>
         <td> {"Название"}</td>
        <td>{"Описание"}</td>
         
    <td>{"Control"}</td>
    </tr>   
    {info}
      </tbody>
      </table>
      <input type={'button'} value={'New product'} onClick={this.addCard} disabled={ disAdd}/> 
      <div>{newCard}</div>
       
      </div>
    )
    ;

  }

}

export default PageInfo;



