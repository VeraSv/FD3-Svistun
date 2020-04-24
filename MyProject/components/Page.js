import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Encyclopedia.css'
class Page extends React.PureComponent {

  static propTypes = {
    point:PropTypes.string
  };

  render() {

    return (
      <div className='Nav'>
       <NavLink to={"/page/"+this.props.point} className="ElemList" >{this.props.point}</NavLink>
      </div>
    );
  }
}

export default Page;
