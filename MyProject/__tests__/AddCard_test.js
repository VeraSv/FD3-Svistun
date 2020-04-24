"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import AddCard from '../components/AddCard.js';

test('работа AddCard', () => {
  const component = renderer.create(
    <AddCard id={52} page={'pageA'} disabled={false} />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const inst = component.getInstance();
  inst.newDescription='aaa';
  inst.newName='a';
  inst.newUrl='a';
 
  const buttonAdd = component.root.find((el) =>
  el.type == 'input' && el.props.className == 'SaveAdd');
  buttonAdd.props.onClick();

  const buttonCancel = component.root.find((el) =>
  el.type == 'input' && el.props.className == 'CancelAdd');
  buttonCancel.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonAdd.props.onClick();
  buttonCancel.props.onClick();
 
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

})