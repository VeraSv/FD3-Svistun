import React from 'react';
import PropTypes from 'prop-types';
import {events} from './events';
import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
client: PropTypes.object
 
  };

  edit=(EO)=>{
    events.emit('EditClicked',this.props.client.id);
  }

  delete=(EO)=>{
    events.emit('DeleteClicked',this.props.client.id);
  }
  render() {
    console.log("MobileClient id="+this.props.client.id+" render");
    return (
     <tr key={this.props.client.name} >
         
      <td>{this.props.client.surname}</td> 
      <td>{this.props.client.name}</td> 
      <td>{this.props.client.middleName}</td>
      <td>{this.props.client.balance}</td>
    <td className={(this.props.client.balance>0)?'Active':'Blocked'}>{(this.props.client.balance>0)?'Active':'Blocked'}</td>
        <td>
        <input type={'button'} value={'Редактировать'} id='Edit' onClick={this.edit}/></td>
        <td> <input type={'button'} value={'Удалить'}  id='Delete' onClick={this.delete}/> </td>
     </tr>
    );

  }

}

export default MobileClient;
