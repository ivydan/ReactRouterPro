import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

if (typeof window !== 'undefined') {
  window.React = React;
  window.localStorage = (function storageMock() {
    var storage = {};
    return {
      setItem: function (key, value) {
        storage[key] = value || '';
      },
      getItem: function (key) {
        return key in storage ? storage[key] : null;
      },
      removeItem: function (key) {
        delete storage[key];
      },
      get length() {
        return Object.keys(storage).length;
      },
      key: function (i) {
        var keys = Object.keys(storage);
        return keys[i] || null;
      }
    }
  })()
}