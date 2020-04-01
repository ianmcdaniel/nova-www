import React from 'react';
import { object } from 'prop-types';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import classnames from 'classnames';
import Helmet from 'react-helmet';
import { Row, Col } from '../components/common/Grid';
import Button from '../components/common/Button';
import Layout from '../components/layout/Layout';
import Breadcrumbs from '../components/common/Breadcrumbs';
import './contact.scss';

const contactSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please fill out this field'),
  message: Yup.string().required('Please fill out this field'),
});

const contact = ({ location }) => {
  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    message: '',
  };
  const breadcrumbs = [{ title: 'Contact', isActive: true }];
  return (
    <Layout location={location}>
      <Helmet title="Contact Nova Credit" />
      <Breadcrumbs crumbs={breadcrumbs} />
      <div className="contact-us">
        <Row>
          <h1 className="title mb-0">Contact us</h1>
          <p className="subheader">
            Questions? Contact us and our team will get back to you as quickly
            as possible - usually within 1-2 business days. For media inquiries,
            please contact{' '}
            <a href="mailto:media@novacredit.com">media@novacredit.com</a>
          </p>
        </Row>
        <Row>
          <Col size={{ md: 7 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={contactSchema}
            >
              {({ errors, touched }) => (
                <Form>
                  <Row>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email*"
                      className={classnames('contact-us__input', {
                        'contact-us__input--error':
                          errors.email && touched.email,
                      })}
                    />
                    {errors.email && touched.email && (
                      <div className="contact-us__error">{errors.email}</div>
                    )}
                  </Row>
                  <Row>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="contact-us__input contact-us__input--narrow"
                    />

                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="contact-us__input contact-us__input--narrow"
                    />
                  </Row>
                  <Row>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="How can we help?*"
                      className={classnames(
                        'contact-us__input',
                        'contact-us__input--text-area',
                        {
                          'contact-us__input--error':
                            errors.message && touched.message,
                        }
                      )}
                    />
                    {errors.message && touched.message && (
                      <div className="contact-us__error">{errors.message}</div>
                    )}
                  </Row>
                  <Row>
                    <Button
                      tag="button"
                      type="submit"
                      shape="rounded"
                      color="brand"
                    >
                      Submit
                    </Button>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
          <Col size={{ md: 4 }} offset={{ md: 1 }}>
            <Row className="mb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.066930871383!2d-73.99087478438173!3d40.738552743927094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a180527029%3A0xcab0f8a97bb00557!2s36%20E%2020th%20St%2C%20New%20York%2C%20NY%2010003!5e0!3m2!1sen!2sus!4v1582846356606!5m2!1sen!2sus"
                width="335"
                height="140"
                frameborder="0"
                style={{ border: '0' }}
                allowfullscreen=""
              ></iframe>
            </Row>
            <Row>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8778125902163!2d-122.42428988444672!3d37.76946312023754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085d38ed24b%3A0xcc25d0782e38bf57!2sNova%20Credit%20HQ!5e0!3m2!1sen!2sus!4v1582846601946!5m2!1sen!2sus"
                width="335"
                height="140"
                frameborder="0"
                style={{ border: '0' }}
                allowfullscreen=""
              ></iframe>
            </Row>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

contact.propTypes = {
  location: object,
};

export default contact;
