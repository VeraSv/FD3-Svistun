"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import Info from '../components/Info.js';

test('работа Info', () => {
  let info= {id:1,name:'Абелия', description:'Полувечнозеленый кустарник, достигающий в высоту до 2 м; листья блестящие, яйцевидные, относительно мелкие (длиной до 3 см), темно-зеленого цвета. Белые цветки колокольчиковидной формы с сильным запахом, собраны в соцветие метелку на концах побегов. Цветет с октября по июнь.'}
  let page='pageA';
  let disabled=false;
  let disabledDelete=false;
    const component = renderer.create(
        <EditClient client={client} />
      );

      let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

 

  const buttonCancelEdit = component.root.find((el) =>
  el.type == 'input' && el.props.className == 'CancelEdit');
  buttonCancelEdit.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonCancelEdit.props.onClick();
 

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
})