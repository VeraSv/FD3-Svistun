"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Mobile from './components/Mobile';
let companyName='Velcom';
let clients=[
    {name:'Иван', surname:'Иванов', middleName:'Иванович', balance:200},
    {name:'Сидор', surname:'Сидоров', middleName:'Сидорович', balance:250},
    {name:'Петр', surname:'Петров', middleName:'Петрович', balance:180},
    {name:'Григорий', surname:'Григорьев', middleName:'Григорьевич', balance:-220},
]
ReactDOM.render(<Mobile companyName={companyName} clients={clients}/>, document.getElementById('container') );

