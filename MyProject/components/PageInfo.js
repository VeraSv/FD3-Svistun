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
   info:PropTypes.object,
    pageId:PropTypes.string
  };
 
  state={
    dataH:{},
   cardEdit:'',
   cardState:1,
   add:false,
   page:''
  }
 
   componentWillUnmount = () => {
     
     events.addListener('SaveCard',this.saveCard);
     events.addListener('EditCard',this.editCard);
     events.addListener('Cancel',this.cancel);
     events.addListener('DeleteClicked',this.delete);
     events.addListener('AddNewCard',this.addNewCard);
     events.addListener('CancelAdd',this.cancelAdd);
     
   };
   
   componentDidMount() {
    events.addListener('SaveCard',this.saveCard);
    events.addListener('EditCard',this.editCard);
    events.addListener('Cancel',this.cancel);
    events.addListener('DeleteClicked',this.delete);
    events.addListener('CancelAdd',this.cancelAdd);
    events.addListener('AddNewCard',this.addNewCard);
    if(this.props.pageId=='A'){this.setState({page:'pageA'})}
    if(this.props.pageId=='Б'){this.setState({page:'pageB'})}
    if(this.props.pageId=='В'){this.setState({page:'pageV'})}
    this.props.dispatch( pagesLoadingAC() );
  var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";

  
  let sp = new URLSearchParams();
  sp.append('f', 'READ');
  sp.append('n', 'Svistun_Test');

  fetch(ajaxHandlerScript, { method: 'post', body: sp })
      .then( response => response.json() )
      .then( data => {  this.props.dispatch( pagesSetAC(data) ); } )
      .catch( error => { console.error(error); this.props.dispatch( pagesErrorAC() )} );

 }
 editCard=(state,id)=>{
   this.setState({cardState:state, cardEdit:id})
 }
 cancel=(state)=>{
this.setState({cardState:state})
 }

 saveCard=(newCard,page)=>{
  let changed=false;
  let dataH={result:''};
  dataH.result={...this.props.info.data}; 
  for(var i in dataH.result)
  {
    if(i==page) dataH.result[i].forEach( (c,j) => {
      if ( c.id==newCard.id) {
        dataH.result[i][j]=newCard
        changed=true;
      }
    } );
  }
  
  
  
  if ( changed ){
    let info=JSON.stringify(dataH.result);
    dataH.result=info;
this.setState({dataH:dataH},this.saveState)
  }
  
  }

  saveState=()=>{
   this.props.dispatch( pagesLoadingAC() );

   var updatePassword=Math.random();

  
 let sp = new URLSearchParams();
 sp.append('f', 'LOCKGET');
 sp.append('n', 'Svistun_Test');
 sp.append('p', updatePassword);
 fetch( "https://fe.it-academy.by/AjaxStringStorage2.php", { method: 'post', body: sp })
     .then( response => response.json() )
     .then( data => {   console.log(data) } )
     .catch( error => { console.error(error); });


 
     let sp1 = new URLSearchParams();
     sp1.append('f', 'UPDATE');
     sp1.append('n', 'Svistun_Test');
     sp1.append('p', updatePassword);
     sp1.append('v',this.state.dataH.result);
     fetch( "https://fe.it-academy.by/AjaxStringStorage2.php", { method: 'post', body: sp1 })
         .then( response => response.json() )
         .then( data => { console.log(data); this.props.dispatch( pagesSetAC(this.state.dataH) )} )
         .catch( error => { console.error(error); } );

  }
 
 

 delete=(cardId,page)=>{
  let dataH={result:''};
  dataH.result={...this.props.info.data}; 
  for(var i in dataH.result)
  {
    if(i==page) dataH.result[i]= dataH.result[i].filter( c => c.id!=cardId
     );
  }
  let info=JSON.stringify(dataH.result);
  dataH.result=info;
  this.setState({dataH:dataH},this.saveState)
  
  }

  addCard=()=>{
    this.setState({add:true})
    }
    cancelAdd=(state)=>{
      this.setState({add:state})
    }

addNewCard=(data, page)=>{
  let dataH={result:''};
 dataH.result={...this.props.info.data}; 
  for(var i in this.props.info.data)
  {
    if(i==page) dataH.result[i].push(data); 
  }

  let info=JSON.stringify(dataH.result);
  dataH.result=info;
  this.setState({dataH:dataH},this.saveState)
  
  //this.saveState()

}

  render() {
  
  
    let info;
    if( this.props.info.status===3){

      if(this.props.pageId=='A'){ info=this.props.info.data.pageA.map(i=> {let cardState; if(this.state.cardEdit==i.id && this.state.cardState==2) cardState=2; else cardState=1; return <Info key={i.id} cardState={cardState} info={i} page={this.state.page}/>})};
      if(this.props.pageId=='Б'){ info=this.props.info.data.pageB.map(i=> {let cardState; if(this.state.cardEdit==i.id && this.state.cardState==2) cardState=2; else cardState=1; return <Info key={i.id} cardState={cardState} info={i} page={this.state.page}/>})};
      if(this.props.pageId=='В'){ info=this.props.info.data.pageV.map(i=> {let cardState; if(this.state.cardEdit==i.id && this.state.cardState==2) cardState=2; else cardState=1; return <Info key={i.id} cardState={cardState} info={i} page={this.state.page}/>})}
    
    }
   let newCard=''
    if(this.state.add==true) {var x=Math.round(Math.random()*50/0.1)*0.1+50; newCard=<AddCard id={x} page={this.state.page}/>}
   
    if ( this.props.info.status<=1 )
      return "загрузка...";

    if ( this.props.info.status===2 )
      return "ошибка загрузки данных";

    
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
      <input type={'button'} value={'New product'} onClick={this.addCard}/> 
      <div>{newCard}</div>
       
      </div>
    )
    ;

  }

}


const mapStateToProps = function (state) {
  return {
    info: state.info,
  };
};

export default connect(mapStateToProps)(PageInfo);



