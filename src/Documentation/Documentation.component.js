import React from 'react';
import styled from 'styled-components';

import Document from './Document.component';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Name = styled.h1``;
const Description = styled.p``;
const Documents = styled.div``;

const Documentation = ({ name, description, documents }) =>
  <Container>
    <Name>
      {name}
    </Name>
    <Description>
      {description}
    </Description>
    <Documents>
      {documents.map((d, i) => <Document key={i} {...d} />)}
    </Documents>
  </Container>;

export default Documentation;
