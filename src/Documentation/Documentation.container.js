import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import DocumentationComponent from './Documentation.component';

class Documentation extends Component {
  componentWillMount(){
    this.props.subscribeToDocumentationChanges();
  }
  render() {
    const { data } = this.props;
    if (!data.documentation) return <p>Loading...</p>;
    return <DocumentationComponent {...data.documentation} />;
  }
}

const DOCUMENTATION_QUERY = gql`
  query Documentation {
    documentation {
      name
      description
      documents {
        title
        tags
        content
      }
    }
  }
`;

const DOCUMENTATION_SUBSCRIPTION = gql`
  subscription onDocumentationChanged {
    changedDocumentation {
      name
      description
      documents {
        title
        tags
        content
      }
    }
  }
`;

const withData = graphql(DOCUMENTATION_QUERY, {
  props: props => ({
    ...props,
    subscribeToDocumentationChanges: () =>
      props.data.subscribeToMore({
        document: DOCUMENTATION_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          return {
            ...prev,
            documentation: subscriptionData.data.changedDocumentation,
          };
        },
      }),
  }),
});

export default withData(Documentation);
