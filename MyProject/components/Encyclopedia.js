import React from 'react';
import PropTypes from 'prop-types';
import Page from './Page'

class Encyclopedia extends React.PureComponent {


   
   componentDidMount() {
  
 }
  render() {
    
   
     var elemA =this.props.data.pageA.map(i=>{return <li key={i.id}>{i.name}</li>})
     var elemB =this.props.data.pageB.map(i=>{return <li key={i.id}>{i.name}</li>})
     var elemV =this.props.data.pageV.map(i=>{return <li key={i.id}>{i.name}</li>})
    
    return (
      <div className="Component">
      
      <div className='List'>
        
 {<Page point={'A'}/>}
{ <Page point={'Б'}/>}
 {<Page point={'В'}/>} 

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

export default Encyclopedia;