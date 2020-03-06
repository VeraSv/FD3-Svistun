import React from 'react';
import PropTypes from 'prop-types';
import './editCard.css';

class EditCard extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price:PropTypes.string.isRequired,
    count:PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    select:PropTypes.func.isRequired,
    editCard:PropTypes.func.isRequired,
    changeCard:PropTypes.func.isRequired,
    setDisabled:PropTypes.func.isRequired,
    } 
    
    state = {
      name:this.props.name,
      count:this.props.count,
      price:this.props.price,
      url:this.props.url,
      newCard:{name:this.props.name, count:this.props.count, price:this.props.price, url:this.props.url},
      validName:'',
      validCount:'',
      validPrice:'',
      validUrl:'',
      disabled:false,
    }
     
    cancelEdit=()=>{
      this.props.select('');
      this.setState({validName:'',disabled:false});
      this.props.setDisabled(false);
      this.props.changeCard(false);
    }
    newName=(EO)=>{
      var newCard=this.state.newCard;
      newCard.name=EO.target.value
      this.setState({newCard:newCard})
      this.setState({name:EO.target.value})
      this.props.changeCard(true)
     }
     validName=(EO)=>{
       if(!EO.target.value) {
         this.setState({validName:'Пожалуйста, введите значение', disabled:true});
        }
       else {
         this.setState({validName:'',disabled:false});
        }
     }
     newPrice=(EO)=>{
       var newCard=this.state.newCard;
       newCard.price=EO.target.value
       this.setState({newCard:newCard})
       this.setState({price:EO.target.value})
       this.props.changeCard(true)
      }
      validPrice=(EO)=>{
       if(!EO.target.value) {
         this.setState({validPrice:'Пожалуйста, введите значение', disabled:true});
        }
       else {
         this.setState({validPrice:'',disabled:false});
        }
      }
      newCount=(EO)=>{
       var newCard=this.state.newCard;
       newCard.count=EO.target.value
       this.setState({newCard:newCard})
       this.setState({count:EO.target.value})
       this.props.changeCard(true)
      }
      validCount=(EO)=>{
       if(!EO.target.value) {
         this.setState({validCount:'Пожалуйста, введите значение', disabled:true});
        }
       else {
         this.setState({validCount:'',disabled:false});
         }
       
      }
      newUrl=(EO)=>{
       var newCard=this.state.newCard;
       newCard.url=EO.target.value
       this.setState({newCard:newCard})
       this.setState({url:EO.target.value})
       this.props.changeCard(true)
      }
      validUrl=(EO)=>{
       if(!EO.target.value) {
         this.setState({validUrl:'Пожалуйста, введите значение', disabled:true});
        }
       else {
         this.setState({validUrl:'',disabled:false});
         }
      }
      
      saveRow=()=>{
       this.props.editCard(this.props.id,this.state.newCard);
       this.props.select('');
      this.setState({validName:'',disabled:false});
      this.props.setDisabled(false);
      this.props.changeCard(false);
      }

       render(){
         
          return(   <div><h2>{'Редактировать товар'}</h2>
         <table className='Card'>
           <tbody>
           <tr><td>{'Название: '}</td><td><input type={'text'} value={this.state.name} onChange={this.newName} onBlur={this.validName} /><span className='Valid'>{this.state.validName}</span></td></tr>
             <tr><td>{'Цена: '}</td><td><input type={'text'} value={this.state.price} onChange={this.newPrice} onBlur={this.validPrice}/><span className='Valid'>{this.state.validPrice}</span></td></tr>
             <tr><td>{'Остаток: '}</td><td><input type={'text'} value={this.state.count} onChange={this.newCount} onBlur={this.validCount}/><span className='Valid'>{this.state.validCount}</span></td></tr>
             <tr><td>{'URL: '}</td><td><input type={'text'} value={this.state.url} onChange={this.newUrl} onBlur={this.validUrl}/><span className='Valid'>{this.state.validUrl}</span></td></tr>
           </tbody>
         </table>
         <input type={'button'} value={'Save'} onClick={this.saveRow} disabled={this.state.disabled}/>
         <input type={'button'} value={'Cancel'} onClick={this.cancelEdit}/>
         </div>)
        
       }
    }
    export default EditCard