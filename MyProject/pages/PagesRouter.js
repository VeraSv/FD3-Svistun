import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import PageInfo from './PageInfo'
import Main_Page from './Main_Page';
import Page_List from './Page_List';


class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={Main_Page} />
        <Route path="/list" component={Page_List} />
        <Route path="/list/:page" component={PageInfo} />
        
      </div>
    );
    
  }

}
    
export default PagesRouter;
    