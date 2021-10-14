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
  const type = `website`;

  return (
    <>
      <Helmet
        defer={false} // workaround for when the title doesn’t appear in the tab bar until switching to that tab https://github.com/nfl/react-helmet/issues/315
        titleTemplate={`${siteTitle} - %s`}
      >
        <html lang={siteLang} />
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        {/* meta keywords is ignored by Google but declare it for other Search engines anyway */}
        <meta name="keywords" content={keywords.join(', ')} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />

        <meta property="twitter:creator" content={author} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
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
