import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import useSiteMetadata from '../hooks/use-site-metadata';

const SEO = ({ postTitle, postDescription, postUrl, postTags, postAuthor }) => {
  const {
    siteTitle,
    siteDescription,
    siteUrl,
    siteTags,
    siteAuthor,
    siteLang,
  } = useSiteMetadata();
  const title = postTitle || siteTitle;
  const description = postDescription || siteDescription;
  const url = postUrl || siteUrl;
  const keywords = postTags || siteTags;
  const author = postAuthor || siteAuthor.name;

  return (
    <>
      <Helmet
        defer={false} // workaround for when the title doesn’t appear in the tab bar until switching to that tab https://github.com/nfl/react-helmet/issues/315
        htmlAttributes={{
          siteLang,
        }}
        title={title}
        titleTemplate={`${siteTitle} - %s`}
        link={[
          {
            rel: 'canonical',
            href: url,
          },
        ]}
        meta={[
          {
            name: `description`,
            content: description,
          },
          {
            /* meta keywords is ignored by Google but declare it for other Search engines anyway */
            name: `keywords`,
            content: keywords.join(', '),
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:url`,
            content: url,
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
            content: author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
        ]}
      />
    </>
  );
};

SEO.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postDescription: PropTypes.string.isRequired,
  postUrl: PropTypes.string.isRequired,
  postTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  postAuthor: PropTypes.string.isRequired,
};

export default SEO;
