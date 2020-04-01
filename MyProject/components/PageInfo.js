import React from 'react';
import PropTypes from 'prop-types';

class PageInfo extends React.PureComponent {

  static propTypes = {
    info:PropTypes.string
  };

  render() {

    return (
      <h1>
        {this.props.info}
      </h1>
    )
    ;

  }

}

export default PageInfo;
