import React, { Component } from 'react';
import styled from 'styled-components';

import Documentation from './Documentation/Documentation.container';

const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Documentation />
      </Container>
    );
  }
}

export default App;
