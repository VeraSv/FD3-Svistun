"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from '../components/MobileClient.js';

test('работа MobileClient', () => {
    const component = renderer.create(
        <MobileClient />
      );

      let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonEdit = component.root.find( el => el.id=='Edit' );
  buttonEdit.props.onClick();

  const buttonDelete = component.root.find( el => el.id=='Delete' );
  buttonDelete.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonEdit.props.onClick();
  buttonDelete.props.onClick();
 

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
})