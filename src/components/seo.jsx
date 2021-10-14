import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import useSiteMetadata from '../hooks/use-site-metadata';

const SEO = ({ postTitle, postDescription, postUrl }) => {
  const { siteTitle, siteDescription, siteUrl, siteLang } = useSiteMetadata();
  const title = postTitle || siteTitle;
  const description = postDescription || siteDescription;
  const url = postUrl || siteUrl;
  const type = `blog`;

  return (
    <>
      <Helmet
        defer={false} // workaround for when the title doesn’t appear in the tab bar until switching to that tab https://github.com/nfl/react-helmet/issues/315
        title={title}
        titleTemplate={`${siteTitle} - %s`}
      >
        <html lang={siteLang} />
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
      </Helmet>
    </>
  );
};

SEO.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postDescription: PropTypes.string.isRequired,
  postUrl: PropTypes.string.isRequired,
};

export default SEO;
