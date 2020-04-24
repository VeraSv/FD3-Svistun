import React from 'react';
import { Route } from 'react-router-dom';
import Main_Page from './Main_Page';
import Page_List from './Page_List';
import Page_Info from './Page_Info'

class PagesRouter extends React.Component {
 
  render() {
   
    return (
      <div >
       <Route path="/" exact component={Main_Page} />
        <Route path="/list" component={() => <Page_List   />} />
        <Route path="/page/:clid" component={Page_Info} />
      </div>
    );
  }
}
 
export default PagesRouter;
    