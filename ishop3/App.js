"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop';
var goodsH=require('./Goods.json');
var nameShope="Эко-человеки";

ReactDOM.render(
  React.createElement(Shop, {shop: nameShope, goods: goodsH}), 
  document.getElementById('container') 
);
