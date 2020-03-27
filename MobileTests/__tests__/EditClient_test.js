"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import EditClient from '../components/EditClient.js';

test('работа EditClient', () => {
  let client= {id:1,name:'Иван', surname:'Иванов', middleName:'Иванович', balance:200}

    const component = renderer.create(
        <EditClient client={client} />
      );

      let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

 

  const buttonCancelEdit = component.root.find((el) =>
  el.type == 'input' && el.props.className == 'CancelEdit');
  buttonCancelEdit.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonCancelEdit.props.onClick();
 

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
})