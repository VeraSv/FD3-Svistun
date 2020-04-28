import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import AddCard from './AddCard'
import Image from './Image';
import Page from './Page'
import {events} from './events';
import './PageInfo.css';

class PageInfo extends React.PureComponent {

  static propTypes = {
    data:PropTypes.object,
    pageId:PropTypes.string,
    numberPage:PropTypes.number
  };
 
  state={
    pageId:this.props.pageId,
   changeCard:false,
   disabledDelete:false,
   cardEdit:'',
   cardState:1,
   add:false,
   page:'',
   searchValue:'',
   data:this.props.data,
   img:false,
   imgUrl:''
  }
 

  componentWillUnmount = () => {
    events.addListener('DisabledDelete',this.disabledDelete);
    events.addListener('EditCard',this.editCard);
    events.addListener('Cancel',this.cancel);
    events.addListener('ChangeCard',this.changeCard);
    events.addListener('CancelAdd',this.cancelAdd);
    events.addListener('CloseImg',this.closeImg);
    events.addListener('ShowImg',this.showImg);
   
    this.setPage();
    
  };
   
  componentDidMount() {
    events.addListener('DisabledDelete',this.disabledDelete);
    events.addListener('ChangeCard',this.changeCard);
    events.addListener('EditCard',this.editCard);
    events.addListener('Cancel',this.cancel);
    events.addListener('CancelAdd',this.cancelAdd);
    events.addListener('CloseImg',this.closeImg);
    events.addListener('ShowImg',this.showImg);
   
    this.setPage();
   
  }

setPage=()=> {
  let page='';
  if(this.props.numberPage) { page=this.props.pageId.slice(0,1); this.setState({pageId:page})}
  if(this.props.pageId=='A'||page=='A'){this.setState({page:'pageA'})}
  if(this.props.pageId=='Б'||page=='Б'){this.setState({page:'pageB'})}
  if(this.props.pageId=='В'||page=='В'){this.setState({page:'pageV'})}
}

  showImg=(value,url)=>{
   this.setState({img:value,imgUrl:url})
  }

  closeImg=(value)=>{
   this.setState({img:value})
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
     
     res[this.state.page]=res[this.state.page].filter(s=>{var str=s.name.toLowerCase();return  str.indexOf(this.state.searchValue)!=-1})
    };
    this.setState({data:res}) 
  }

  
  render() {
    

    let info;
    let pagination;
    var image='';
     
    if(this.state.page) {
      info=this.state.data[this.state.page].map(i=> {let cardState; if(this.state.cardEdit==i.id && this.state.cardState==2) cardState=2; else cardState=1; return <Info  key={i.id} cardState={cardState} info={i} page={this.state.page} disabled={ this.state.changeCard} disabledDelete={this.state.disabledDelete}/>});
      if(this.state.img) image= <Image src={this.state.imgUrl}/>
      if(this.props.numberPage)  {
        let numberH=[];
        for(let i=1; i<=Math.ceil(this.state.data[this.state.page].length / 5); i++) {
          numberH.push(i)
        }
        let number=numberH.map(n => {return <li key={this.state.page+n}><Page point={this.state.pageId+n} /></li>})
        if(this.props.numberPage<=1)info=info.slice(0,5)
        else {
          var prePage=5*(this.props.numberPage-1);
          var page=5*this.props.numberPage
          info=info.slice(prePage,page)
        }
        pagination=<ul className='List'>{number}</ul> 
      } 
    }
       
   let newCard='';
   if(this.state.add==true) {var x=Math.round(Math.random()*50/0.1)*0.1+50; newCard=<AddCard id={x} page={this.state.page}  disabled={this.state.changeCard} />}
   var disAdd; if(this.state.cardState==2) disAdd=true; else disAdd=false; 
    
    return (
      <div >
        <br />
        <span className={'Search'}>{'Поиск: '}</span>
        <input type='text' defaultValue={''} ref={this.search} onChange={this.changeSearch}></input> 
        <table className='Table'>
         <tbody>
           <tr className='title'  key='title'>
             <td> {"Название"}</td>
             <td> {"Внешний вид"}</td>
             <td>{"Описание"}</td>
             <td>{"Control"}</td>
           </tr>   
           {info}
         </tbody>
       </table>
       <input className={'NewProduct'} type={'button'} value={'New product'} onClick={this.addCard} disabled={ disAdd}/> 
       <div>
         <br />{pagination}
         <br />
         <span className={'NumberPage'}>{'Количество строк на странице: '}</span>
         <Page point={this.state.pageId} page={'All'}></Page>
           
        <Page point={this.state.pageId+1} page={'5'}></Page>
        
       </div>
       <div>{newCard}</div>
       <div>{image}</div>
      </div>
    );
  }
}

export default PageInfo;



