"use strict";

import { PAGES_LOADING} from '../redux/pagesAC';
import pagesReducer  from '../redux/pagesReducer.js'
test('работа pagesReducer', () => {
  const action = { 
    type: PAGES_LOADING,
  }
  const initState={
    status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
    data: null,
  
  }

  expect(pagesReducer(initState,action)).toEqual({
    status:1,
    data:null,
  })
  
})