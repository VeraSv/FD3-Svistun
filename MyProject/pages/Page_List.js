import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducer from '../redux/reducers.js';
import Encyclopedia from '../components/Encyclopedia';

let store=createStore(combinedReducer);

class Page_List extends React.PureComponent {
 
  render() {
    
         
    return (
      <Provider store={store}>
          <div>
            <Encyclopedia />
          </div>
      </Provider>
      
    );
    
  }

}
    
export default Page_List;
    