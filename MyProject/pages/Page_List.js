import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { pagesLoadingAC, pagesErrorAC, pagesSetAC } from "../redux/pagesAC";


import Encyclopedia from '../components/Encyclopedia';



class Page_List extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch( pagesLoadingAC() );
  var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";

  
  let sp = new URLSearchParams();
  sp.append('f', 'READ');
  sp.append('n', 'Svistun_Test');

  fetch(ajaxHandlerScript, { method: 'post', body: sp })
      .then( response => response.json() )
      .then( data => {  this.props.dispatch( pagesSetAC(data) )} )
      .catch( error => { console.error(error); this.props.dispatch( pagesErrorAC() )} );

 }
  render() {
    if ( this.props.info.status<=1 )
    return "загрузка...";

  if ( this.props.info.status===2 )
    return "ошибка загрузки данных";
         
    return (
    
          
            <Encyclopedia  {...this.props.info}/>
          
     
      
    );
    
  }

}
const mapStateToProps = function (state) {
  return {
    info: state.info,
  };
};

export default connect(mapStateToProps)(Page_List);  

    