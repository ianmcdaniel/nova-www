import React from 'react';
import { Row, Col } from '../../common/Grid';
import { Link } from 'gatsby';
import step1 from '../../../assets/images/step1.png';
import step2 from '../../../assets/images/step2.png';
import step3 from '../../../assets/images/step3.png';
import step4 from '../../../assets/images/step4.png';
import './amexInstructions.scss';

const steps = [
  {
    stepNumber: 1,
    stepText: 'Select a credit card',
    image: step1,
    description:
      'Visit our <a href=>credit card shop</a> to see all available <span class=\'nova-enabled-text\'>Nova Credit-enabled</span> cards that you can choose from. Click "Apply Now" to start you application on the American Express website.',
  },
  {
    stepNumber: 2,
    stepText: "Indicate you'd like to use us",
    image: step2,
    description:
      "On American Express' card application form, click the checkbox that indicates you have foreign credit history next to the Social Security Number field.",
  },
  {
    stepNumber: 3,
    stepText: 'Request your credit history',
    image: step3,
    description:
      'When you successfully use Nova Credit in your application, we will translate your international credit data and send it to the lender so that they can better evaluate your application.',
  },
  {
    stepNumber: 4,
    stepText: 'Build your U.S. credit history',
    image: step4,
    description:
      'If you are approved by American Express, you will receive your card and can start building U.S. credit history. Using your card and paying bills on time can help create good credit history.',
  },
];

const AmexInstructions = () => {
  return (
    <div className="amex-instructions">
      <Row>
        {steps.map(({ stepNumber, stepText, image, description }) => (
          <Col key={stepNumber} size={{ md: 3 }}>
            <div className="amex-instructions__step">
              <h1 className="amex-instructions__step-number">{`Step ${stepNumber}`}</h1>
              <div className="amex-instructions__step-text">
                <strong>{stepText}</strong>
              </div>
              <img className="amex-instructions__image" src={image} />
              <p className="amex-instructions__description">
                <span dangerouslySetInnerHTML={{ __html: description }} />
              </p>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <p className="amex-instructions__bottom-text">
          Need more help? Read our guide on{' '}
          <Link to="/resources/how-to-apply-for-an-american-express-card-with-your-international-credit-history">
            How to apply for an American Express Card with your international
            history
          </Link>{' '}
          or send us a message.
        </p>
      </Row>
    </div>
  );
};

export default AmexInstructions;
