"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import Mobile from '../components/Mobile.js';

test('работа Mobile', () => {
 
    const component = renderer.create(
        <Mobile  />
      );

      let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonElem = component.root.find( '#All' );
  buttonElem.props.onClick();

  const buttonElemActive = component.root.find( '#Active' );
  buttonElemActive.props.onClick();

  const buttonElemBlocked = component.root.find('#Blocked' );
  buttonElemBlocked.props.onClick();

  const buttonElemNewClient = component.root.find( '#NewClient' );
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