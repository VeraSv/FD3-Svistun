import React from 'react';

import PageInfo from '../components/PageInfo';



class Page_Info extends React.PureComponent {
          
  render() {

    // раз написано <Route path="/client/:clid" component={Page_Client} />
    // значит Page_Client получит то что в УРЛе после /client/ под именем props.match.params.clid в виде строки
    let clientId=this.props.match.params.clid;
    let pageInfo;
    if(clientId=='A') pageInfo='yf'

    return (
        <PageInfo info={pageInfo}/>
      
    );
    
  }

}
    
export default Page_Info;
    