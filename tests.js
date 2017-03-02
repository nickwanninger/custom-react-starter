import * as React from 'react';
import expect from 'expect';
import {
  renderIntoDocument
} from 'react-addons-test-utils';
import Home from './src/routes/home.js';

// setup a ghost browser to use to check tests as if it was in the context of a browser
const jsdom = require('jsdom')
global.document = jsdom.jsdom('<!DOCTYPE><html><body></body></html>')
global.window = document.defaultView;
global.navigator = {
  userAgent: 'node.js'
};

describe("Homepage", () => {
  it('should render', () => {
    const item = renderIntoDocument(<Home/>)
    expect(item).toExist()
  })
})
