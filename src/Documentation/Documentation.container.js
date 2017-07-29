import React, { Component } from 'react';
import DocumentationComponent from './Documentation.component';

const data = {
  name: 'Test',
  description: 'Lorem ipsum',
  documents: [
    { title: 'Foo', tags: ['foo', 'not-bar'], content: '<p>foo foo foo</p>' },
    { title: 'Bar', tags: ['bar', 'not-foo'], content: '<i>bar bar bar</i>' },
  ],
};

class Documentation extends Component {
  render() {
    return <DocumentationComponent {...data} />;
  }
}

export default Documentation;
