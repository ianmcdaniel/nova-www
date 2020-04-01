import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './src/apollo/client';

export const shouldUpdateScroll = () => false;

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
