import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import Goods from './Goods';
import Card from './Card';
import EditCard from './EditCard';
import NewCard from './NewCard';

class Shop extends  React.Component {
 
  static propTypes = {
    shop: PropTypes.string,
    goods: PropTypes.array,
  }
      
  state = {
    selectedGood:' ',
    goods:this.props.goods,
    cardH:[],
    disabled:false,
    editDisabled:false,
    changeCard:false,
  };

  changeCard=(value)=>{
    this.setState({changeCard:value}) //проверка были ли изменения в карточке
  }
  drawCard=(cardH) => {
    this.setState({cardH:cardH})
  }
        
  editDisabled=(value)=>{
    this.setState({editDisabled:value});
  }


  newCard=()=>{                           //кнопка новый
    this.setState({disabled:true});
    this.setState({editDisabled:true});
    this.setState({selectedGood:'new'})
  }
  deleteGood= (a) => {
    var goodH= this.state.goods.filter(x=>(x.name!=a));
    this.setState({goods:goodH})
  }
      
  newName=(value)=>{                           //создание нового товара
    var good=[];
    good.push(value)
    var goods=this.state.goods.concat(good)
    this.setState({goods:goods})
  }
  select= (nameGood)=> {
    this.setState({selectedGood:nameGood})
  }
  disabled=(value)=> {
    this.setState({disabled:value})
  }

  editCard=(id,card)=>{
    var goods=this.state.goods.map(i=> {if(i.name==id) i=card; return i });
    this.setState({goods:goods})
  }
  
  render () {
    var selectedState;
    var good=this.state.goods.map(i=>{
    if(this.state.selectedGood==i.name) selectedState=true; else selectedState=false;
      return <Goods key={i.name} id={i.name} changeCard={this.state.changeCard} selectedState={selectedState} 
      disabled={this.state.disabled} setDisabled={this.disabled} editDisabled={this.state.editDisabled}
      drawCard={this.drawCard} deleteGood={this.deleteGood} selectedGood={this.state.selectedGood} select={this.select} 
      name={i.name} price={i.price} count={i.count} url={i.url} />})

       var card=''
       if (this.state.selectedGood=='new') card= <NewCard select={this.select} editDesabled={this.editDisabled}
        newName={this.newName}  disabled={this.disabled} />;
      else card=this.state.cardH.map(i=> {  
        if  (this.state.selectedGood=='edit') return <EditCard  key={i.name} id={i.name}  changeCard={this.changeCard} 
        setDisabled={this.disabled}  editCard={this.editCard} select={this.select} name={i.name} price={i.price} 
        count={i.count} url={i.url} />
      
      else if (this.state.selectedGood==i.name) return  <Card key={i.name} id={i.name} name={i.name} price={i.price}
       count={i.count} url={i.url} />})
      
       
      return ( <div className='Shop'> 
        <h1> {this.props.shop}</h1>
        <table className='Table'>
          <tbody>
           <tr  key='title'>
            <td> {"Название"}</td>
           <td>{"Цена"}</td>
            <td>{"Остаток"}</td>
            <td>{"URL"} </td>
       <td>{"Control"}</td>
       </tr> 
            {good}
        
       
      </tbody>
      </table>
      <input type={'button'} value={'New product'} onClick={this.newCard} disabled={this.state.disabled}/> 
        {<div>{card} </div>}
       
      </div>
      );
      
    }
  
  };
  
  export default Shop;