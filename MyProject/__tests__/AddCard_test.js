"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import AddCard from '../components/AddCard.js';

test('работа AddCard', () => {
  var id=52;
  var page='pageA';
  var disabled=false;
    const component = renderer.create(
        <AddCard id={id} page={page} disabled={disabled} />
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