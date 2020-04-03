import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Info from './Info'
import {events} from './events';
import './PageInfo.css'
import { pagesLoadingAC, pagesErrorAC, pagesSetAC } from "../redux/pagesAC";
class PageInfo extends React.PureComponent {

  static propTypes = {
   info:PropTypes.object,
    pageId:PropTypes.string
  };
 
  state={
   
   cardEdit:'',
   cardState:1
  }
 
   componentWillUnmount = () => {
     
     events.addListener('SaveCard',this.saveCard);
     events.addListener('EditCard',this.editCard);
     events.addListener('Cancel',this.cancel);
     //events.addListener('DeleteClicked',this.deleteClient);
     //events.addListener('AddCard',this.addCard);
   };
   
   componentDidMount() {
    events.addListener('SaveCard',this.saveCard);
    events.addListener('EditCard',this.editCard);
    events.addListener('Cancel',this.cancel);

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
 saveCard=(newCard)=>{
  let changed=false;
  let newInfo=[...this.props.info]; 
  newInfo.forEach( (c,i) => {
    if ( c.id==newCard.id) {
      newInfo[i]=newCard
      changed=true;
    }
  } );
  if ( changed )
    this.setState({info:newInfo});
 }
  render() {
  
  
    let info;
    if( this.props.info.status===3){

      if(this.props.pageId=='A') info=this.props.info.data.pageA.map(i=> {let cardState; if(this.state.cardEdit==i.id && this.state.cardState==2) cardState=2; else cardState=1; return <Info key={i.id} cardState={cardState} info={i}/>});
      if(this.props.pageId=='Б') info=this.props.info.data.pageB.map(i=> {let cardState; if(this.state.cardEdit==i.id && this.state.cardState==2) cardState=2; else cardState=1; return <Info key={i.id} cardState={cardState} info={i}/>});
      if(this.props.pageId=='В') info=this.props.info.data.pageV.map(i=> {let cardState; if(this.state.cardEdit==i.id && this.state.cardState==2) cardState=2; else cardState=1; return <Info key={i.id} cardState={cardState} info={i}/>})
    
    }
   
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
      <input type={'button'} value={'New product'} /> 
    
       
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



