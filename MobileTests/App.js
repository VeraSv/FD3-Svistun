"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Mobile from './components/Mobile';
let companyName='Velcom';
let clients=[
    {id:1,name:'Иван', surname:'Иванов', middleName:'Иванович', balance:200},
    {id:2,name:'Сидор', surname:'Сидоров', middleName:'Сидорович', balance:250},
    {id:3,name:'Петр', surname:'Петров', middleName:'Петрович', balance:180},
    {id:4,name:'Григорий', surname:'Григорьев', middleName:'Григорьевич', balance:-220},
]
ReactDOM.render(<Mobile companyName={companyName} clients={clients}/>, document.getElementById('container') );

