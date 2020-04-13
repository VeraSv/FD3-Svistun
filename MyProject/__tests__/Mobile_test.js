"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import Mobile from '../components/Mobile.js';

test('работа Mobile', () => {
  let companyName='Velcom';
  let clients=[
    {id:1,name:'Иван', surname:'Иванов', middleName:'Иванович', balance:200},
    {id:2,name:'Сидор', surname:'Сидоров', middleName:'Сидорович', balance:250},
    {id:3,name:'Петр', surname:'Петров', middleName:'Петрович', balance:180},
    {id:4,name:'Григорий', surname:'Григорьев', middleName:'Григорьевич', balance:-220},
]
    const component = renderer.create(
        <Mobile companyName={companyName} clients={clients}/>
      );

      let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonElem = component.root.find((el) =>
  el.type == 'input' && el.props.className == 'All');
  buttonElem.props.onClick();

  const buttonElemActive = component.root.find((el) =>
  el.type == 'input' && el.props.className == 'Active');
  buttonElem.props.onClick();
  buttonElemActive.props.onClick();

  const buttonElemBlocked = component.root.find((el) =>
  el.type == 'input' && el.props.className == 'Blocked');
  buttonElem.props.onClick();
  buttonElemBlocked.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonElem.props.onClick();
  buttonElemActive.props.onClick();
  buttonElemBlocked.props.onClick();


  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const inst = component.getInstance();

  //Добавление
  let client1={id:15,name:'Сидор', surname:'Сидоров', middleName:'Сидорович', balance:50}
  inst.addCard(client1)
  expect(inst.state.clients.length).toEqual(5);

  //удаление
  
  inst.deleteClient(3);
    expect(inst.state.clients.length).toEqual(4);
   
  //редактирование
  
    let client={id:2,name:'Сидор', surname:'Сидоров', middleName:'Сидорович', balance:50}
    inst.editCard(client)
    expect(inst.state.clients[1].balance).toEqual(50);
  

  
  
})