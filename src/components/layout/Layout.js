import React from 'react';

import { Container } from '../common/Grid';
import Navigation from './Navigation';
import Footer from './Footer';
import '../../styles/base.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
