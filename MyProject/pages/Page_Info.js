import React from 'react';

import PageInfo from '../components/PageInfo';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducer from '../redux/reducers.js';
let store=createStore(combinedReducer);
class Page_Info extends React.PureComponent {
    
  static propTypes = {
   // info: PropTypes.object.isRequired,
  };

  render() {
   
    let pageId=this.props.match.params.clid;
    
    
    // раз написано <Route path="/client/:clid" component={Page_Client} />
    // значит Page_Client получит то что в УРЛе после /client/ под именем props.match.params.clid в виде строки
   
    
      return (
      <Provider store={store}>
        
            <PageInfo  pageId={pageId} />
        
     
      
  </Provider>
     
  
  
        
      
    );
    
  }

}
export default  Page_Info
    