import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  // uri: 'https://offers.novacredit.com/api/graphql',
  uri: 'https://cors-anywhere.herokuapp.com/https://offers.novacredit.com/api/graphql',
  // fetch,
  request: async operation => {
    operation.setContext({
      headers: {
        origin: "https://novacredit.com"
      }
    });
  },
});
