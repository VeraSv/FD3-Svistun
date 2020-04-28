import React from 'react';
import {connect} from 'react-redux';
import {events} from '../components/events';
import { pagesLoadingAC, pagesErrorAC, pagesSetAC } from "../redux/pagesAC";
import PageInfo from '../components/PageInfo';

class Page_Info extends React.PureComponent {

  state={
    dataH:{}
  }

  componentWillUnmount = () => {
   events.addListener('SaveCard',this.saveCard);
    events.addListener('DeleteClicked',this.delete);
    events.addListener('AddNewCard',this.addNewCard);
  };

  componentDidMount() {
    events.addListener('SaveCard',this.saveCard);
    events.addListener('DeleteClicked',this.delete);
    events.addListener('AddNewCard',this.addNewCard);
    this.props.dispatch( pagesLoadingAC() );
    this.loadData();
  }

  loadData=()=> {
    var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
    let sp = new URLSearchParams();
    sp.append('f', 'READ');
    sp.append('n', 'Svistun_Test');
 
    fetch(ajaxHandlerScript, { method: 'post', body: sp })
    .then( response => response.json() )
    .then( data => {  this.props.dispatch( pagesSetAC(data) )} )
    .catch( error => { console.error(error); this.props.dispatch( pagesErrorAC() )} );
  }

 saveCard=(newCard,page)=>{
   let changed=false;
   let dataH={result:''};
   dataH.result={...this.props.info.data}; 
   for(var i in dataH.result) {
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
     this.props.dispatch( pagesLoadingAC() );
     this.setState({dataH:dataH},this.saveState)
    }
  }
  
  saveState=()=>{
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
   for(var i in dataH.result) {
     if(i==page) dataH.result[i]= dataH.result[i].filter( c => c.id!=cardId);
    }
   let info=JSON.stringify(dataH.result);
   dataH.result=info;
   this.setState({dataH:dataH},this.saveState)
  }
  
 addNewCard=(data, page)=>{
   let dataH={result:''};
   dataH.result={...this.props.info.data}; 
   for(var i in this.props.info.data)  {
     if(i==page) dataH.result[i].push(data); 
    }

   let info=JSON.stringify(dataH.result);
   dataH.result=info;
   this.props.dispatch( pagesLoadingAC() );
   this.setState({dataH:dataH},this.saveState)
  }

  
  render() {
    if ( this.props.info.status<=1 )
    return "загрузка...";

    if ( this.props.info.status===2 )
    return "ошибка загрузки данных";

    let pageId=this.props.match.params.clid;

    let numPage=this.props.match.params.clid.slice(-1);
    var numberPage=0;
    var n=Number.parseInt(numPage);
    if(n) numberPage=n;
    
    
    return (
     <PageInfo  pageId={pageId} numberPage={numberPage} {...this.props.info}/> 
    );
  }
}

const mapStateToProps = function (state) {
  return {
    info: state.info,
  };
};

export default connect(mapStateToProps)(Page_Info);  

    