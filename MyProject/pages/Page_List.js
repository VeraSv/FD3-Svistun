import React from 'react';

import Encyclopedia from '../components/Encyclopedia';



class Page_List extends React.PureComponent {
  info;
  

 loadData=()=>{
 
  $.ajax({
    url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
    data : { f : 'READ', n : 'Svistun_Test' },
    success :readReady, error : errorHandler
   }
  );
  function readReady(callresult) {
    if ( callresult.error!=undefined )
    alert(callresult.error);
    else  {
      this.info=JSON.parse(callresult.result);
     
    }
    
  }
  
  
  function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
  }
      }
      componentDidMount() {
        this.loadData()
      }
  render() {
    
    return (
      <Encyclopedia 
      info={this.info}
      />
    );
    
  }

}
    
export default Page_List;
    