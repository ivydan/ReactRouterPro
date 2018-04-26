import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Link from "./Link";

it('renders correctly', () => {
    const tree = renderer
      .create(<Link page="http://www.facebook.com">Facebook</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

// Updated test case with a Link to a different address
it('renders correctly', () => {
    const tree = renderer
        .create(<Link page="http://www.instagram.com">Instagram</Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});