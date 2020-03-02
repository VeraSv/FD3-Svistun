"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
import Shop from './components/Shop';
var goodsH=require('./Goods.json');
var nameShope="Эко-человеки";

ReactDOM.render(
  React.createElement(VotesBlock,{question:questionText,answers:answersArr,
    deffreeanswertext: defaultFreeAnswerText,startWorkMode:1}), 
  document.getElementById('container') 
);
