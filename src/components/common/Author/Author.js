import React from 'react';
import classNames from 'classnames';
import { string, object } from 'prop-types';
import Img from 'gatsby-image';
import './author.scss';

const Author = ({ name, thumbnail, summary, variant }) => {
  return (
    <div className="author">
      <Img
        className={classNames('author__image', {
          'author__image--blog': variant === 'blog',
        })}
        alt={name}
        fluid={thumbnail.fluid}
      />
      <div>
        {name && (
          <div
            className={classNames('author__name', {
              'author__name--blog': variant === 'blog',
            })}
          >
            {name}
          </div>
        )}
        {summary && (
          <div
            className={classNames('author__summary', {
              'author__summary--blog': variant === 'blog',
            })}
          >
            {summary}
          </div>
        )}
      </div>
    </div>
  );
};

Author.propTypes = {
  name: string,
  summary: string,
  thumbnail: object,
  variant: string,
};

export default Author;
