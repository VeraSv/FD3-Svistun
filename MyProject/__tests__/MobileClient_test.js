"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from '../components/MobileClient.js';

test('работа MobileClient', () => {
  let client={id:1,name:'Иван', surname:'Иванов', middleName:'Иванович', balance:200}
    
    
    const component = renderer.create(
        <MobileClient client={client} />
      );

      let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonEdit = component.root.find((el) =>
  el.type == 'input' && el.props.className == 'Edit');
  buttonEdit.props.onClick();

  const buttonDelete = component.root.find((el) =>
  el.type == 'input' && el.props.className == 'Delete');
  buttonDelete.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonEdit.props.onClick();
  buttonDelete.props.onClick();
 

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

    
})