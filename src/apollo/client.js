import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

const API_URLS = {
  development: 'http://localhost:8012/api/graphql',
  staging: 'https://cms.aphrodite.novacredit.com/api/graphql',
  production: 'https://cms.novacredit.com/api/graphql',
};

export const client = new ApolloClient({
  uri: API_URLS[process.env.GATSBY_ENV || 'development'],
});
