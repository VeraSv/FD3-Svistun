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

  const buttonSaveAddClient = component.root.find('#SaveAddClient' );
  buttonSaveAddClient.props.onClick();

  const buttonCancelAdd = component.root.find('#CancelAdd' );
  buttonCancelAdd.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonSaveAddClient.props.onClick();
  buttonCancelAdd.props.onClick();
 

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
})