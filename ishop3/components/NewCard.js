import React from 'react';

import './editCard.css';
class NewCard extends React.Component {
    static propTypes = {
        edit:PropTypes.func.isRequired,
        newName:PropTypes.fun.isRequired,
        
       } 

       edit=()=>{
           this.props.edit('')
       }
       newRow=()=>{
        
       }
       newName=(EO)=>{
        this.props.newName(EO.target.value)
       }
       render(){
         return(  <div><h2>{'Добавить товар'}</h2>
         <table className='Card'>
           <tbody>
             <tr><td>{' Название: '}</td><td><input type={'text'} id={'name'} onChange={this.newName}/></td></tr>
             <tr><td>{'Цена: '}</td><td><input type={'text'} id={'price'}/></td></tr>
             <tr><td>{'Остаток: '}</td><td><input type={'text'} id={'count'}/></td></tr>
             <tr><td>{'URL: '}</td><td><input type={'text'} id={'url'}/></td></tr>
           </tbody>
         </table>
         <input type={'button'} value={'Add'} onClick={this.newRow}/>
         <input type={'button'} value={'Cancel'} onClick={this.edit}/>
         </div>)

         
        
       }
    }
    export default NewCard