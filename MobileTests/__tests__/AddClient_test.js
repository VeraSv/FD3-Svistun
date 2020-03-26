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

  const buttonSaveAddClient = component.root.find( el => el.id=='SaveAddClient' );
  buttonSaveAddClient.props.onClick();

  const buttonCancelAdd = component.root.find( el => el.id=='CancelAdd' );
  buttonCancelAdd.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonSaveAddClient.props.onClick();
  buttonCancelAdd.props.onClick();
 

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
})