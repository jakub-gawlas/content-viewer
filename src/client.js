import { ApolloClient, createNetworkInterface } from 'react-apollo';
import {
  SubscriptionClient,
  addGraphQLSubscriptions,
} from 'subscriptions-transport-ws';

const wsClient = new SubscriptionClient('ws://localhost:5000/graphql', {
  reconnect: true,
});

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
});

export default client;
