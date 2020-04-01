import React from 'react';
import PropTypes from 'prop-types';

import Page from './Page'
class Encyclopedia extends React.PureComponent {

  static propTypes = {
   
  };
  state = {
    list:[],
    listA:[],
    listB:[],
    listV:[]
  };
  info;
  updatePassword;
  componentDidMount() {
  
  
     this.load()
    // if(this.info) this.storeInfo();
  }
  load= () => {
  /*isoFetch('http://localhost:3000/example')
              .then(response => {
                  if (!response.ok)
                      throw new Error("fetch error " + response.status);
                  else
                      return response.json();
              })
              .then( data => {
                  console.log(data)
              })
              .catch( error => {
                  
              })
            }
  storeInfo=()=> {
   /*
      this.updatePassword=Math.random();
      $.ajax( {
              url :'https://fe.it-academy.by/AjaxStringStorage2.php', type : 'POST', cache : false, dataType:'json',
              data : { f : 'LOCKGET', n : 'Svistun_Test', p :  this.updatePassword },
              success : this.lockGetReady, error : this.errorHandler
          }
      );
  }
  
  lockGetReady=(callresult) =>{
      if ( callresult.error!=undefined )
          alert(callresult.error);
      else {
         
          $.ajax( {
                  url : 'https://fe.it-academy.by/AjaxStringStorage2.php', type : 'POST', cache : false, dataType:'json',
                  data : { f : 'UPDATE', n :  'Svistun_Test', v :this.info, p :  this.updatePassword },
                  success : this.updateReady, error : this.errorHandler
              }
          );
      }*/
  }
  
   updateReady=(callresult)=> {
      if ( callresult.error!=undefined )
          alert(callresult.error);
  }
  
   restoreInfo=() =>{
      $.ajax(
          {
              url : 'https://fe.it-academy.by/AjaxStringStorage2.php', type : 'POST', cache : false, dataType:'json',
              data : { f : 'READ', n :  'Svistun_Test' },
              success : this.readReady, error : this.errorHandler
          }
      );
  }
  
  readReady=(callresult)=> {
      if ( callresult.error!=undefined )
          alert(callresult.error);
      else if ( callresult.result!="" ) {
          var info=JSON.parse(callresult.result);
          
      }
  }
  
  errorHandler=(jqXHR,statusStr,errorStr)=> {
      alert(statusStr+' '+errorStr);
  }
  
  loadData=(data)=>{
    console.log(data)
    this.setState({list:data})
    this.info=data;
  }
  

  
  render() {

    return (
      <div className="Component">
      
      <div className='List'>
        
 {<Page />} 

      </div>
      <div className='Description'>
{'zdrhze'}
</div>
    </div>
    )
    ;

  }

}

export default Encyclopedia;
/*
  state = {
    list:[],
    listA:[],
    listB:[],
    listV:[]
  };
  errorHandler=(jqXHR,statusStr,errorStr)=> {
    alert(statusStr+' '+errorStr);
  }
  loadData=(data)=>{
    this.setState({list:data})
  }
  componentDidMount() {
    var list=require('./example.json');
  
    function f(a,i) {
    
    var el=<span key={i.id}>{i.name}<br /></span>
     var  newlist=[...a,el];
     return newlist
      };
     var listA= list.pageA.reduce(f,this.state.listA)
      this.setState({listA:listA})

      var listB= list.pageB.reduce(f,this.state.listB)
      this.setState({listB:listB})

      var listV= list.pageV.reduce(f,this.state.listV)
      this.setState({listV:listV})

   // $.ajax('example.json', { type:'GET', dataType:'json', success:this.loadData, error:this.errorHandler });
  }
  render() {
    
return (
 
      <div className="SExampleComponent">
        <h1>{this.props.name}</h1>
        <div className='List'>
          <ul>
<li>{'A'}</li>
<li>{'Б'}</li>
<li>{'В'}</li>
          </ul>
        </div>
        <div className='Description'>
<div> <span><b>{'A'}</b></span><br /><br />{ this.state.listA}<br /></div>
<div> <span><b>{'Б'}</b></span><br /><br />{ this.state.listB}<br /></div>
<div> <span><b>{'B'}</b></span><br /><br />{ this.state.listV}<br /></div>
</div>
      </div>
    )
    ;

  }*/