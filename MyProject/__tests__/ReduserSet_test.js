"use strict";

import React from 'react';
import { PAGES_LOADING, PAGES_ERROR, PAGES_SET } from '../redux/pagesAC';
import pagesReducer  from '../redux/pagesReducer.js'
test('работа pagesReducer', () => {
const action = { 
    type: PAGES_SET,
    info:{result:'{"pageA":[{"id":1,"name":"Абелия","description":"Полувечнозеленый кустарник, достигающий в высоту до 2 м; листья блестящие, яйцевидные, относительно мелкие (длиной до 3 см), темно-зеленого цвета. Белые цветки колокольчиковидной формы с сильным запахом, собраны в соцветие метелку на концах побегов. Цветет с октября по июнь."}]}'}
  }
  const initState={

    status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
    data:null
  
  }

  expect(pagesReducer(initState,action)).toEqual({
    status:3,
    data:{pageA:[{id:1,name:"Абелия",description:"Полувечнозеленый кустарник, достигающий в высоту до 2 м; листья блестящие, яйцевидные, относительно мелкие (длиной до 3 см), темно-зеленого цвета. Белые цветки колокольчиковидной формы с сильным запахом, собраны в соцветие метелку на концах побегов. Цветет с октября по июнь."}]},
  })
  
   
  
})