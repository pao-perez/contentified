import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import useSiteMetadata from '../hooks/use-site-metadata';

const SEO = ({ postTitle, postDescription, postAuthor, lang, meta }) => {
  const { title, description, author } = useSiteMetadata();
  const metaDescription = postDescription || description;
  const creator = postAuthor || author.name;

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={postTitle}
        titleTemplate={`%s | ${title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: postTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: creator,
          },
          {
            name: `twitter:title`,
            content: postTitle,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      />
    </>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};

SEO.propTypes = {
  postDescription: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postAuthor: PropTypes.string.isRequired,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;
