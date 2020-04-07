"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';
/*var info = require('./example.json');

var updatePassword=Math.random();

  
 let sp = new URLSearchParams();
 sp.append('f', 'LOCKGET');
 sp.append('n', 'Svistun_Test');
 sp.append('p', updatePassword);
 fetch( "https://fe.it-academy.by/AjaxStringStorage2.php", { method: 'post', body: sp })
     .then( response => response.json() )
     .then( data => {   console.log(data) } )
     .catch( error => { console.error(error); });


 
     let sp1 = new URLSearchParams();
     sp1.append('f', 'UPDATE');
     sp1.append('n', 'Svistun_Test');
     sp1.append('p', updatePassword);
     sp1.append('v',JSON.stringify(info));
     fetch( "https://fe.it-academy.by/AjaxStringStorage2.php", { method: 'post', body: sp1 })
         .then( response => response.json() )
         .then( data => { console.log(data); } )
         .catch( error => { console.error(error); } );*/
ReactDOM.render( 
  <BrowserRouter>
    <div>
      <PagesLinks />
      <PagesRouter />
    </div>
  </BrowserRouter>
, document.getElementById('container') );
