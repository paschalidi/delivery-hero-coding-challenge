/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Component from '../index';


describe('Snapshot Testing', () => {
  it('RowCategoryFilter', () => {
    const component = shallow(<Component />);
    expect(component).toMatchSnapshot();
  });
});
