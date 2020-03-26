"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import EditClient from '../components/EditClient.js';

test('работа EditClient', () => {
    const component = renderer.create(
        <EditClient />
      );

      let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonSaveEdit = component.root.find( el => el.id=='SaveEdit' );
  buttonSaveEdit.props.onClick();

  const buttonCancelEdit = component.root.find( el => el.id=='CancelEdit' );
  buttonCancelEdit.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonSaveEdit.props.onClick();
  buttonCancelEdit.props.onClick();
 

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
})