import React from 'react';

import Page from '../components/Page';


class PageInfo extends React.PureComponent {
          
  render() {

    // раз написано <Route path="/client/:clid" component={Page_Client} />
    // значит Page_Client получит то что в УРЛе после /client/ под именем props.match.params.clid в виде строки
    let page=parseInt(this.props.match.params.page);

    return (
      <Page
      
      />
    );
    
  }

}
    
export default PageInfo;
    