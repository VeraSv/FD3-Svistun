import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
class Page extends React.PureComponent {

  static propTypes = {
    
  };

  render() {

    return (
        <div className='MobileClient'>
        
        <NavLink to={"/page/"+'A'} className="MobileClientFIO">{'A'}</NavLink>
        <NavLink to={"/page/"+'Б'} className="MobileClientFIO">{'Б'}</NavLink>
        <NavLink to={"/page/"+'В'} className="MobileClientFIO">{'В'}</NavLink>
      </div>
    )
    ;

  }

}

export default Page;
