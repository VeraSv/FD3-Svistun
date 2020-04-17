import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Info from './Info';
import AddCard from './AddCard'
import {events} from './events';
import './PageInfo.css';


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
   page:'',
   searchValue:'',
   data:this.props.data,
   pagination:false,
   numberItem:0,
   numberPage:0
   
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
inputSearch=null;
inputSort=null;
    search=(ref)=>{
      this.inputSearch=ref 
    }
    changeSearch=()=>{
      this.setState({searchValue:this.inputSearch.value}, this.setData)
    }

    
    setData=()=>{
      var res={...this.props.data};
      
      if(this.state.searchValue) {
      res[this.state.page]=res[this.state.page].filter(s=>{var str=s.name.toLowerCase();return  str.indexOf(this.state.searchValue)!=-1})};
     
            this.setState({data:res})
      
     
    }
   select=null
    selectPagination=(ref)=> {
    this.select=ref
    }

    changePagination=()=>{

      if(this.select.value=='All') this.setState({pagination:false});
     else  {
       var v=Number.parseInt(this.select.value)
       this.setState({pagination:true, numberItem:v, numberPage:0});
     }
    }

    clickPage=(EO)=>{
      var n=Number.parseInt(EO.target.innerText)
      this.setState({numberPage:n})
    }

  render() {
  
   
    let info;
    let pagination;
    
       if(this.state.page) {
         info=this.state.data[this.state.page].map(i=> {let cardState; if(this.state.cardEdit==i.id && this.state.cardState==2) cardState=2; else cardState=1; return <Info  key={i.id} cardState={cardState} info={i} page={this.state.page} disabled={ this.state.changeCard} disabledDelete={this.state.disabledDelete}/>});
         if(this.state.pagination)  {
          let numberH=[];
          for(let i=1; i<=Math.ceil(this.state.data[this.state.page].length / this.state.numberItem); i++) {
            numberH.push(i)
          }
         let number=numberH.map(n => {return <li key={this.state.page+n} onClick={this.clickPage}>{n}</li>})
         if(this.state.numberPage<=1)info=info.slice(0,this.state.numberItem)
         else {
           var prePage=this.state.numberItem*(this.state.numberPage-1);
           var page=this.state.numberItem*this.state.numberPage
            info=info.slice(prePage,page)
         }
         pagination=<ul className='List'>{number}</ul> 
        } 
      }
       
   let newCard=''
    if(this.state.add==true) {var x=Math.round(Math.random()*50/0.1)*0.1+50; newCard=<AddCard id={x} page={this.state.page}  disabled={this.state.changeCard} />}
    var disAdd; if(this.state.cardState==2) disAdd=true; else disAdd=false; 
    
    return (
      <div >
        <br />
   
        <span>{'Поиск: '}</span>
        <input type='text' defaultValue={''} ref={this.search} onChange={this.changeSearch}></input> 
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
      <input className={'NewProduct'} type={'button'} value={'New product'} onClick={this.addCard} disabled={ disAdd}/> 
    <div><br />{pagination}
    <br />
    <span>{'Количество строк на странице: '}</span>
    <select ref={this.selectPagination} onChange={this.changePagination}>
      <option value='All'>{'All'}</option> 
    <option value='5'>{'5'}</option>
    <option value='10'>{'10'}</option>
    </select>

    </div>
      <div>{newCard}</div>
       
      </div>
    )
    ;

  }

}

export default PageInfo;



