"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import {events} from '../components/events';
import {Prompt} from 'react-router-dom';
import Info from '../components/Info.js';

test('работа Info', () => {
  let info= {id:1,name:'Абелия', description:'Полувечнозеленый кустарник, достигающий в высоту до 2 м; листья блестящие, яйцевидные, относительно мелкие (длиной до 3 см), темно-зеленого цвета. Белые цветки колокольчиковидной формы с сильным запахом, собраны в соцветие метелку на концах побегов. Цветет с октября по июнь.'}
  let page='pageA';

    const component = renderer.create(
        <Info info={info} page={page} cardState={1} disabled={false} disabledDelete={false} />
      );

      let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

 
  const buttonEdit = component.root.find((el) =>
  el.type == 'input' && el.props.className == 'InputEdit');
  buttonEdit.props.onClick();

  const buttonDelete = component.root.find((el) =>
  el.type == 'input' && el.props.className == 'Delete');
  buttonDelete.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonEdit.props.onClick();
  buttonDelete.props.onClick();
 

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();


})