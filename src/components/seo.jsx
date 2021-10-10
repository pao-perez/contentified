import React from 'react';
import { Helmet } from 'react-helmet';

import PropTypes from 'prop-types';

import useSiteMetadata from '../hooks/use-site-metadata';

const SEO = ({ siteDescription, lang, meta, siteTitle, siteAuthor }) => {
  const { title, description, author } = useSiteMetadata();
  const metaDescription = siteDescription || description;
  const creator = siteAuthor || author.name;

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={siteTitle}
        titleTemplate={`%s | ${title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: siteTitle,
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
            content: siteTitle,
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
  siteDescription: ``,
  siteAuthor: ``,
};

SEO.propTypes = {
  siteDescription: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  siteTitle: PropTypes.string.isRequired,
  siteAuthor: PropTypes.string,
};

export default SEO;
