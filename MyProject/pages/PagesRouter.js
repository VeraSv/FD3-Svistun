import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import Main_Page from './Main_Page';
import Page_List from './Page_List';
import Page_Info from './Page_Info'

import { pagesLoadingAC, pagesErrorAC, pagesSetAC } from "../redux/pagesAC";

class PagesRouter extends React.Component {
  
 
  render() {
   
    return (
      <div>
       <Route path="/" exact component={Main_Page} />
       
        <Route path="/list" component={() => <Page_List   />} />
        <Route path="/page/:clid" component={Page_Info} />
        
      </div>
    );
   
  }

}
  

 
export default PagesRouter;
    