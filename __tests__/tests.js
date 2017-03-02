import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';


// components that will be tested in this file.
import HomePage from '../src/routes/home.js';
import ErrorPage from '../src/routes/error.js';


// setup a ghost (fake) browser to use to check tests as if it was in the context of a browser
const jsdom = require('jsdom');
global.document = jsdom.jsdom('<!DOCTYPE><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {
  userAgent: 'node.js'
};


describe("DOM", () => {
  it("creates dom successfully", () => {
    expect(global.window.name).toEqual('nodejs')

  })
})

// Test the home component
describe("Homepage", () => {
  it('renders with default', () => {
    expect(renderIntoDocument(<HomePage />)).toExist()
  })
  it('renders with custom text', () => {
    expect(renderIntoDocument(<HomePage text="Hello There!"/>)).toExist()
  })
})
// Test the home component
describe("ErrorPage", () => {
  it('renders with default', () => {
    expect(renderIntoDocument(<ErrorPage />)).toExist()
  })
})
