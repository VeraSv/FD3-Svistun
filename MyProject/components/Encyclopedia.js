import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Page from './Page'
import { pagesLoadingAC, pagesErrorAC, pagesSetAC } from "../redux/pagesAC";
class Encyclopedia extends React.PureComponent {

  static propTypes = {
    info: PropTypes.object.isRequired,
  };

   
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
    
   
     var elemA =this.props.info.data.pageA.map(i=>{return <li>{i.name}</li>})
     var elemB =this.props.info.data.pageB.map(i=>{return <li>{i.name}</li>})
     var elemV =this.props.info.data.pageV.map(i=>{return <li>{i.name}</li>})
    
    return (
      <div className="Component">
      
      <div className='List'>
        
 {<Page />} 

      </div>
      <div className='Description'>

        <span className='Point'><b>{'A'}</b></span><br />
       <ul>
         {elemA}
       </ul>
       
       <span className='Point'><b>{'Б'}</b></span><br />
       <ul>
         {elemB}
       </ul>
       
       <span className='Point'><b>{'В'}</b></span><br />
       <ul>
         {elemV}
       </ul>

</div>
    </div>
    )
    ;

  }

}

const mapStateToProps = function (state) {
  return {
    info: state.info,
  };
};

export default connect(mapStateToProps)(Encyclopedia);