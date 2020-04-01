import React from 'react';
import { object } from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Layout from '../../components/layout/Layout';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import { getComponent } from '../../utils';

const LandingPage = ({ data, location, ...props }) => {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const pageTitle = get(data, 'contentfulPageLandingPage.title');
  const body = get(data, 'contentfulPageLandingPage.body');
  const breadcrumbs = [
    {
      title: pageTitle,
      isActive: true,
    },
  ];

  return (
    <Layout location={location}>
      <Breadcrumbs crumbs={breadcrumbs} />
      <div className="landing-page">
        <Helmet title={pageTitle} />
        {body.map(node => {
          const Component = getComponent(node.__typename);
          if (!Component) {
            return null;
          }
          return <Component key={node.id} {...node} />;
        })}
      </div>
    </Layout>
  );
};

LandingPage.propTypes = {
  data: object,
  location: object,
};

export default LandingPage;

export const pageQuery = graphql`
  query LandingPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageLandingPage(slug: { eq: $slug }) {
      title
      body {
        ...ImageCopyBlockFields
        ...RichTextBlockFields
        ...TwoColumnOfferBlockFields
        ...HeadlineBlockFields
        ...ComponentFields
        ...AccordionFields
        ...HeadlineCtaFields
        ...EmailSignupFields
        ...CollectionFields
        ...BlockQuoteFields
        ...ProductOfferFields
      }
    }
  }
`;
