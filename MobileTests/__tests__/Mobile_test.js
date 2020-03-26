"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import Mobile from '../components/Mobile.js';

test('работа CounterButton', () => {
    const component = renderer.create(
        <Mobile />
      );

      let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonElem = component.root.find( el => el.id=='All' );
  buttonElem.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonElem.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
})