import React from 'react';
import PropTypes from 'prop-types';
import MobileClient from './MobileClient';
import  './Mobile.css'
import {events} from './events';
import EditClient from './EditClient';
import AddClient from './AddClient';


class Mobile extends React.PureComponent {
  static propTypes = {
    companyName:PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        middleName: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  }
  state = {
    companyName: this.props.companyName,
    clients: this.props.clients,
    list:[],
    edit:'',
    clientH:{},
    add:false  
  };

  setName1 = () => {
    this.setState({companyName:'Velcom'});
  };

  setName2 = () => {
    this.setState({companyName:'МТС'});
  };

allClients=() =>{
  this.setState({list:this.state.clients})
}

activeClients=()=>{
   let newClients=[...this.state.clients].filter(i=>i.balance>0)
   if(this.state.list.length!=newClients.length) {
  this.setState({list:newClients})
  }
}

blockedClients=()=>{
  let newClients=[...this.state.clients].filter(i=>i.balance<=0)
  if(this.state.list.length!=newClients.length) {
    this.setState({list:newClients})
    }
}

componentDidMount = () => {
 events.addListener('EditClicked',this.editClient);
 events.addListener('EditCard',this.editCard);
 events.addListener('Cancel',this.cancel);
 events.addListener('DeleteClicked',this.deleteClient);
 events.addListener('AddCard',this.addCard);
};

componentWillUnmount = () => {
  events.addListener('EditClicked',this.editClient);
  events.addListener('EditCard',this.editCard);
  events.addListener('Cancel',this.cancel);
  events.addListener('DeleteClicked',this.deleteClient);
  events.addListener('AddCard',this.addCard);
};

editClient=(client)=>{
this.setState({edit:true});
let editClient=this.state.clients.slice().filter(i=>i.name==client)
this.setState({clientH:editClient})
}

editCard=(newCard)=>{

    let changed=false;
    let newClients=[...this.state.clients]; 
    newClients.forEach( (c,i) => {
      if ( c.name==newCard.id) {
        newClients[i]=newCard
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients,list:newClients});
}

cancel=()=>{
  this.setState({edit:false, add:false});
}
  
deleteClient=(client)=>{
 
  let newClients=[...this.state.clients].filter(i=>i.name!=client)
  this.setState({clients:newClients, list:newClients})
}

addClient=()=>{
this.setState({add:true})
}
addCard=(value)=>{
  let newClients=[...this.state.clients,value]; 
 
    this.setState({clients:newClients,list:newClients})

}
  render() {
    console.log("MobileCompany render");
    var card=''
    if(this.state.edit==true) card=this.state.clientH.map(i=>
      { return <EditClient  key={i.name+1} id={i.name} name={i.name} surname={i.surname} middleName={i.middleName} balance={i.balance}
      />});
      if(this.state.add==true) card=<AddClient />
      if(!this.state.list.length) this.state.list=this.state.clients
var clients=this.state.list.map(i=>
  { return <MobileClient key={i.name} client={i}
  />})
    return (
      <div className='MobileCompany'>
        <input type="button" value="Velcom"  onClick={this.setName1}/>
        <input type="button" value="МТС"  onClick={this.setName2}/>
      
        <div className='MobileCompanyName'>Компания:{this.state.companyName}</div>
        <br></br>
        <input type="button" value="Все"  onClick={this.allClients}/>
        <input type="button" value="Активные"  onClick={this.activeClients}/>
        <input type="button" value="Заблокированные"  onClick={this.blockedClients}/>
        <table className='Table'>
          <tbody>
          <tr  key='title' className='Title'>
            <td> {"Фамилия"}</td>
           <td>{"Имя"}</td>
            <td>{"Отчество"}</td>
            <td>{"Баланс"} </td>
            <td>{"Статус"} </td>
            <td>{"Редактировать"} </td>
            <td>{"Удалить"} </td>
      
       </tr> 

         {clients}
            
       
      
          </tbody>
        </table>
        
        <input type="button" value="Добавить клиента"  onClick={this.addClient}/>
        <div>{card} </div>
      </div>
    )

  }

}

export default Mobile;
