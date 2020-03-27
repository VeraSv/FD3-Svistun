"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import AddClient from '../components/AddClient.js';

test('работа AddClient', () => {
    const component = renderer.create(
        <AddClient />
      );

      let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

 

  const buttonCancelAdd = component.root.find((el) =>
  el.type == 'input' && el.props.className == 'CancelAdd');
  buttonCancelAdd.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();


  buttonCancelAdd.props.onClick();
 

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
})