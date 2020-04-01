import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout/Layout';
import CardDetailsPage from '../components/common/CardDetailsPage';
import CardListPage from '../components/common/CardListPage';
import RedirectPage from '../components/common/RedirectPage';
import { FilterContextProvider } from '../context/Filter';

const cards = () => {
  return (
    <Layout>
      <FilterContextProvider>
        <Router>
          <CardDetailsPage path="/cards/:slug" />
          <RedirectPage path="cards/redirect/:slug" />
          <CardListPage path="/cards" />
        </Router>
      </FilterContextProvider>
    </Layout>
  );
};

export default cards;
