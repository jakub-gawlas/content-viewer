import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2``;

const Tags = styled.ul`
  display: flex;
  list-style-type: none;
`;

const Tag = styled.li`
  margin: .3rem;
  padding: .3rem;
  background: black;
  color: white;
  border-radius: .1rem;
`;

const Content = styled.div``;

const Document = ({ title, tags, content }) =>
  <Container>
    <Title>
      {title}
    </Title>
    <Tags>
      {tags.map((t, i) =>
        <Tag key={i}>
          {t}
        </Tag>
      )}
    </Tags>
    <Content dangerouslySetInnerHTML={{ __html: content }} />
  </Container>;

export default Document;
