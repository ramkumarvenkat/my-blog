// @flow strict

import React from 'react';
import renderer from 'react-test-renderer';
import Menu from './Menu';

describe('Menu', () => {
  const props = {
    menu: [
      {
        label: 'Item 0',
        path: '/#0/',
        newTab: false
      },
      {
        label: 'Item 1',
        path: '/#1/',
        newTab: true
      }
    ]
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Menu {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
