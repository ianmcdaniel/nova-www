import React from 'react';
import { object } from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { getComponent } from '../../../utils';

const RichText = ({ json }) => {
  return (
    <div>
      {documentToReactComponents(json, {
        renderNode: {
          [BLOCKS.EMBEDDED_ENTRY]: ({ data }) => {
            const type = data.target.sys.contentType.sys.id;
            const fields = data.target.fields;
            Object.keys(fields).forEach(key => {
              if (typeof fields[key] === 'object') {
                fields[key] = fields[key]['en-US'];
              }
            });
            const Component = getComponent(type);
            if (!Component) {
              return null;
            }
            return <Component {...fields} />;
          },
        },
      })}
    </div>
  );
};

RichText.propTypes = {
  json: object,
};

export default RichText;
