import React from 'react';
import { object } from 'prop-types';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { Row, Col } from '../components/common/Grid';
import ImageCopyBlock from '../components/blocks/ImageCopyBlock';
import Button from '../components/common/Button';
import ValuesList from '../components/common/ValuesList';
import Spotlight from '../components/common/Spotlight';
import ConstrainedContent from '../components/layout/ConstrainedContent';
import Layout from '../components/layout/Layout';
import BenefitsGrid from '../components/common/BenefitsGrid';
import angelList from '../assets/images/angelList.jpg';
import fintech50 from '../assets/images/ForbesFintech50.jpg';
import femaleFounders from '../assets/images/FemaleFounders.jpg';

import './careers.scss';

const DIVERSITY_COPY = [
  {
    title: 'Balance',
    text:
      'We strive to build teams across our organization where people can share unique views informed by their identities.',
  },
  {
    title: 'Inclusion',
    text:
      'From aggressively recruiting to fill the pipeline with diverse candidates to our holiday, benefits and workplace choices, we work towards an increasingly inclusive and inviting workplace.',
  },
  {
    title: 'Design',
    text:
      'Our product lowers barriers to access to finance for millions of newcomers to the U.S. each year. As we build products, we approach our engineering and design with inclusion in mind.',
  },
];

const careers = ({ location, data }) => {
  const funData = get(data, 'contentfulBlockImageWCopy');
  return (
    <Layout location={location}>
      <Helmet title="Nova Credit - Careers" />
      <div className="careers-page">
        <ConstrainedContent>
          <h1 className="title">Help us create a world beyond borders</h1>
          <p className="subheader">
            Nova Credit was built with a singular mission: to inspire and
            facilitate the flow of human diversity, helping the world's moving
            population to arrive and thrive.
          </p>
          <p className="subheader">
            Lack of a domestic credit report history keeps millions of people
            who move to the U.S. from realizing their dreams. We enable
            newcomers to the U.S. to share the credit history they built abroad
            with American underwriters to access financial products and more
            here. With our industry-leading technology, we connect lenders to a
            more diverse consumer base and ensure access to finance for millions
            of people each year.
          </p>
          <Row className="careers-page__logo-row">
            <Col size={{ sm: 4 }}>
              <img
                className="careers-page__logo"
                alt="AngelList best startup company 2020"
                src={angelList}
              />
            </Col>
            <Col size={{ sm: 4 }}>
              <img
                className="careers-page__logo"
                alt="Forbes Fintech 50"
                src={fintech50}
              />
            </Col>
            <Col size={{ sm: 4 }}>
              <img
                className="careers-page__logo"
                alt="Femal Founders 100"
                src={femaleFounders}
              />
            </Col>
          </Row>
          <p className="subheader">
            Browse our open positions, find a job you love, and apply
          </p>
          <Button
            tag="a"
            href="https://jobs.lever.co/neednova"
            target="_blank"
            color="brand"
            shape="rounded"
          >
            Explore Jobs
          </Button>
        </ConstrainedContent>
        <div className="careers-page__values">
          <Row>
            <Col size={{ md: 6 }}>
              <p className="preheader"> Nova 101</p>
              <h2 className="title">Company values</h2>
              <p className="careers-page__values__text">
                We're in the business of credit, so we like to give credit where
                credit is due. Our company culture is built on supporting each
                other's efforts and recognizing each other's contributions.
              </p>
              <p className="careers-page__values__text">
                Our values grew organically along with the company. For example,
                our value of "Tie your neighbor's shoes" is the result of a
                co-founder's broken arm, which prevented him
                from&mdash;literally&mdash;tying his shoes. Novans pitched in to
                keep him from tripping, in more ways than one.
              </p>
              <p className="careers-page__values__text">
                We strive to create a workplace where people can bring their
                whole selves and find opportunities for growth.
              </p>
            </Col>
            <Col size={{ md: 6 }}>
              <ValuesList />
            </Col>
          </Row>
        </div>
        <div className="careers-page__diversity">
          <h4 className="preheader">Diversity in all things</h4>
          <h1 className="title">From people to product to thought</h1>
          <p className="careers-page__diversity__text">
            Nova Credit's products and workforce embody our mission to inspire
            and facilitate the flow of human diversity. As of late 2019, more
            than two-thirds of our workforce is composed of immigrants to the
            U.S., but that is not the only kind of diversity we embrace. We
            strive for diversity of thought, communication, background,
            experience and more. Our goal is to create a culture where Novans
            feel comfortable bringing their entire selves to work, sharing ideas
            and asking for coaching in a sale, welcoming atmosphere.{' '}
          </p>
          <p className="careers-page__diversity__text">
            We're also stepping up investments to create an even more diverse
            and inclusive company. How?
          </p>
          <div className="careers-page__diversity__items">
            {DIVERSITY_COPY.map(({ title, text }) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <Spotlight />
        <div className="careers-page__work">
          <h4 className="preheader">Creating a world beyond borders</h4>
          <h2 className="title">The work</h2>
          <p className="careers-page__work__text">
            People who come to Nova Credit most often mention the mission as the
            reason they joined, but it's the work that keeps them engrossed
            daily. For software engineers, it's the quality of the code and the
            unique data problem that motivates them. For marketers, it's the
            storytelling and challenge of reaching a uniquely diverse global
            audience of people who move.
          </p>
          <p className="careers-page__work__text">
            Want to learn more about how you can build a career at Nova Credit?
          </p>
          <Button
            tag="a"
            href="https://jobs.lever.co/neednova"
            target="_blank"
            color="brand"
            shape="rounded"
          >
            Explore Jobs
          </Button>
        </div>
        <BenefitsGrid />
        <ImageCopyBlock {...funData} />
      </div>
    </Layout>
  );
};

careers.propTypes = {
  location: object,
  data: object,
};

export default careers;

export const pageQuery = graphql`
  query CareersQuery {
    contentfulBlockImageWCopy(title: { eq: "The fun" }) {
      title
      preheader
      id
      bottomMargin
      icon {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      image {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      copy {
        json
      }
      imageOnRight
    }
  }
`;
