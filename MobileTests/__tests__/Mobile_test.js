"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import Mobile from '../components/Mobile.js';

test('работа Mobile', () => {
    const component = renderer.create(
        <Mobile />
      );

      let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonElem = component.root.find( el => el.id=='All' );
  buttonElem.props.onClick();

  const buttonElemActive = component.root.find( el => el.id=='Active' );
  buttonElemActive.props.onClick();

  const buttonElemBlocked = component.root.find( el => el.id=='Blocked' );
  buttonElemBlocked.props.onClick();

  const buttonElemNewClient = component.root.find( el => el.id=='NewClient' );
  buttonElemNewClient.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonElem.props.onClick();
  buttonElemActive.props.onClick();
  buttonElemBlocked.props.onClick();
  buttonElemNewClient.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
})