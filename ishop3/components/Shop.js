import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import Goods from './Goods';
import Card from './Card';
import EditCard from './EditCard';
import NewCard from './NewCard';

class Shop extends  React.Component {

   // displayName: 'Shop',
    static propTypes = {
     
       shop: PropTypes.string,
       goods: PropTypes.array,
      }
      
      state = {
         selectedGood:' ',
         delete:' ',
         goods:this.props.goods,
         cardH:[],
         stateCard:'',
         name:'',
         count:0,
         price:'',
         url:''
        };
      
       drawCard=(cardH) => {
         this.setState({cardH:cardH})
         
       }
        
       edit=(st)=>{
         this.setState({stateCard:st})
       }

       newCard=()=>{
        this.setState({stateCard:'new'})
        this.setState({selectedGood:' '})
       }
      deleteGood= (a) => {
       var goodH= this.state.goods.filter(x=>(x.name!=a));
       this.setState({goods:goodH})
      }
      
      newName=(value)=>{
        this.setState({name:value})
      }
      select= (nameGood)=> {
        this.setState({selectedGood:nameGood})
      }

    render () {
       var good=this.state.goods.map(i=>
        
        <Goods key={i.name} id={i.name} edit={this.edit} drawCard={this.drawCard} deleteGood={this.deleteGood} selectedGood={this.state.selectedGood} select={this.select} name={i.name} price={i.price} count={i.count} url={i.url}
        
       />)
       var card=''
       if (this.state.stateCard=='new') card= <NewCard edit={this.edit} newName={this.newName} />;
      else card=this.state.cardH.map(i=> {  
        if  (this.state.stateCard=='edit') return <EditCard  key={i.name} id={i.name} stateCard={this.state.stateCard} name={i.name} price={i.price} count={i.count} url={i.url} />
      
      else if (this.state.selectedGood==i.name) return  <Card key={i.name} id={i.name} name={i.name} price={i.price} count={i.count} url={i.url} />})
      
       
      return ( <div className='Shop'> 
        <h1> {this.props.shop}</h1>
        <table className='Table'>
          <tbody>
           <tr  key='title'>
            <td> {"Название"} </td>
           <td> {"Цена"}  </td>
            <td> {"Остаток"}  </td>
            <td> {"URL"}  </td>
       <td>{"Control"}</td>
       </tr> 
            {good}
        
       
      </tbody>
      </table>
      <input type={'button'} value={'New product'} onClick={this.newCard}/> 
        {<div>{card} </div>}
       
      </div>
      );
      
    }
  
  };
  
  export default Shop;