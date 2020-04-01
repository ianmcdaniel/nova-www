import React from 'react';
import { object } from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Helmet from 'react-helmet';
import { Row, Col } from '../components/common/Grid';
import Button from '../components/common/Button';
import Layout from '../components/layout/Layout';
import ConstrainedContent from '../components/layout/ConstrainedContent';
import Breadcrumbs from '../components/common/Breadcrumbs';
import './disputes.scss';

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  dob: '',
  address: '',
  reportErrors: '',
};

const disputeSchema = Yup.object().shape({
  firstName: Yup.string().required('Please fill out this field'),
  lastName: Yup.string().required('Please fill out this field'),
  email: Yup.string()
    .required('Please fill out this field')
    .email('Please enter a valid email address'),
  dob: Yup.string()
    .matches(
      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
      'Please enter a date in the specified format'
    )
    .required('Please fill out this field'),
  address: Yup.string().required('Please fill out this field'),
  reportErrors: Yup.string().required('Please fill out this field'),
});

const disputeQuestions = [
  {
    question: 'How do I get a copy of my Nova Credit Report?',
    answer: (
      <>
        <p>
          When you apply for a product using your international credit history,
          you will receive an email with a link to access your Nova Credit
          report. Once you click the link in the email, you’ll be asked for your
          Last Name (surname) and Date of Birth (MM/DD/YYYY). Please fill those
          out in order to download your report.
        </p>
        <p>
          If you are still unable to access your report, please email{' '}
          <a href="mailto:help@novacredit.com">help@novacredit.com</a>
        </p>
      </>
    ),
  },
  {
    question: 'Do you believe there are errors on your Nova Credit Report?',
    answer: (
      <p>
        Inaccurate, negative information may lower your credit score and might
        indicate fraudulent activity. We recommend that you dispute any
        inaccurate, incomplete, outdated or unverified information in your
        credit report as soon as you spot it by contacting your local credit
        bureau.
      </p>
    ),
  },
  {
    question: 'How can I reach out to Nova Credit?',
    answer: (
      <p>
        If you have any questions, contact us at{' '}
        <a href="mailto:help@novacredit.com">help@novacredit.com</a>. You can
        also chat with us on our website
      </p>
    ),
  },
  {
    question: 'How do I correct information on my Nova Credit Report?',
    answer: (
      <>
        <p>
          If you believe that information contained in your Nova Credit Report
          is inaccurate, incomplete or otherwise incorrect, you can initiate a
          dispute by submitting our dispute form below.
        </p>
        <p>
          Once Nova Credit has checked our credit passport and the information
          received from the foreign credit bureau, we may ask you to dispute
          directly with the bureau. In those cases, contact information for our
          bureau partners can be found here.
        </p>
        <p>
          <strong>
            To initiate a dispute with Nova Credit, please submit this form, or
            mail your dispute request to Nova Credit, along with any supporting
            document(s), to:‍
          </strong>
        </p>
        <p>
          Nova Credit Inc.
          <br />
          225 Valencia Street
          <br />
          San Francisco, California, 94103
          <br />
        </p>
        <p>
          If we have your foreign credit file on record, we will initiate an
          investigation upon receipt of your request.
        </p>
      </>
    ),
  },
];

const disputes = ({ location }) => {
  const breadcrumbs = [
    {
      title: 'Disputes',
      isActive: true,
    },
  ];
  return (
    <Layout location={location}>
      <Helmet title="Disputes - Nova Credit" />
      <Breadcrumbs crumbs={breadcrumbs} />
      <ConstrainedContent>
        <div className="disputes__header">
          <h1>Dispute Resolution</h1>
          {disputeQuestions.map(({ question, answer }) => {
            return (
              <div key={question}>
                <h2>{question}</h2>
                {answer}
              </div>
            );
          })}
        </div>
        <Formik initialValues={initialData} validationSchema={disputeSchema}>
          {({ errors, touched }) => (
            <Form className="disputes__form">
              <h1 className="disputes__title">Dispute Form</h1>
              <div className="disputes__divider" />
              <Row>
                <Col size={{ md: 6 }}>
                  <p className="disputes__label">First Name:</p>
                  <Field
                    className="disputes__field"
                    type="text"
                    name="firstName"
                  />
                  {errors.firstName && touched.firstName && (
                    <div className="disputes__error">{errors.firstName}</div>
                  )}
                </Col>
                <Col size={{ md: 6 }}>
                  <p className="disputes__label">Last Name:</p>
                  <Field
                    className="disputes__field"
                    type="text"
                    name="lastName"
                  />
                  {errors.lastName && touched.lastName && (
                    <div className="disputes__error">{errors.lastName}</div>
                  )}
                </Col>
              </Row>
              <Row>
                <Col size={{ md: 6 }}>
                  <p className="disputes__label">
                    Email on your Nova Credit Passport:
                  </p>
                  <Field
                    className="disputes__field"
                    type="email"
                    name="email"
                  />
                  {errors.email && touched.email && (
                    <div className="disputes__error">{errors.email}</div>
                  )}
                </Col>
                <Col size={{ md: 6 }}>
                  <p className="disputes__label">Date of Birth (DD/MM/YYYY):</p>
                  <Field className="disputes__field" type="text" name="dob" />
                  {errors.dob && touched.dob && (
                    <div className="disputes__error">{errors.dob}</div>
                  )}
                </Col>
              </Row>
              <Row>
                <Col size={{ md: 12 }}>
                  <p className="disputes__label">Foreign Address:</p>
                  <Field
                    className="disputes__field"
                    type="text"
                    name="address"
                  />
                  {errors.address && touched.address && (
                    <div className="disputes__error">{errors.address}</div>
                  )}
                </Col>
              </Row>
              <Row>
                <Col size={{ md: 12 }}>
                  <p className="disputes__label">
                    Describe the errors in your report:
                  </p>
                  <Field
                    className="disputes__field"
                    as="textarea"
                    name="reportErrors"
                  />
                  {errors.reportErrors && touched.reportErrors && (
                    <div className="disputes__error">{errors.reportErrors}</div>
                  )}
                </Col>
              </Row>
              <Button tag="button" type="submit" shape="rounded" color="brand">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </ConstrainedContent>
    </Layout>
  );
};

disputes.propTypes = {
  location: object,
};

export default disputes;
