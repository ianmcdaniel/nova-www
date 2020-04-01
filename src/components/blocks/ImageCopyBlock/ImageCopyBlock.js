import React from 'react';
import Img from 'gatsby-image';
import { string, bool, object } from 'prop-types';
import RichText from '../../common/RichText';
import { graphql } from 'gatsby';
import classnames from 'classnames';
import './imageCopyBlock.scss';

const ImageCopyBlock = ({
  preheader,
  title,
  image,
  copy,
  imageOnRight,
  icon,
  bottomMargin,
}) => {
  return (
    <div
      className={classnames('image-copy-block', {
        'image-copy-block--flipped': !imageOnRight,
      })}
      style={{ marginBottom: `${bottomMargin}px` }}
    >
      <div className="image-copy-block__column">
        {icon && (
          <Img
            className="image-copy-block__icon"
            alt={icon.title}
            fluid={icon.fluid}
          />
        )}
        {preheader && <h4 className="preheader">{preheader}</h4>}
        {title && <h1 className="title">{title}</h1>}
        {copy && <RichText {...copy} />}
      </div>
      <div
        className={classnames('image-copy-block__column', {
          'pl-5': imageOnRight,
          'pr-5': !imageOnRight,
        })}
      >
        <Img alt={title} fluid={image.fluid} />
      </div>
    </div>
  );
};

ImageCopyBlock.propTypes = {
  preheader: string,
  title: string,
  imageOnRight: bool,
  image: object,
  copy: object,
  icon: object,
};

ImageCopyBlock.defaultProps = {
  imageOnRight: true,
};

export default ImageCopyBlock;

export const IMAGE_COPY_BLOCK_FIELDS = graphql`
  fragment ImageCopyBlockFields on ContentfulBlockImageWCopy {
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
`;
