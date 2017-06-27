import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MyAwesomeReactComponent from './myAwesomeReactComponent';

describe('MyAwesomeReactComponent component', () => {
  it('should render default text', () => {
    const myAwesomeReactComponent = TestUtils.renderIntoDocument(<MyAwesomeReactComponent/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(myAwesomeReactComponent, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
