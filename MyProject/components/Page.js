import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Encyclopedia.css'
class Page extends React.PureComponent {

  static propTypes = {
    
  };

  render() {

    return (
        <div className='Nav'>
        
        <NavLink to={"/page/"+'A'} className="ElemList">{'A'}</NavLink>
        <NavLink to={"/page/"+'Б'} className="ElemList">{'Б'}</NavLink>
        <NavLink to={"/page/"+'В'} className="ElemList">{'В'}</NavLink>
      </div>
    )
    ;

  }

}

export default Page;
