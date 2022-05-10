import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import favicon from '../images/icon.png';

const SEO = ({
  title,
  description,
  url,
  tags,
  author,
  icon,
  siteTitle,
  siteLang,
  siteCharSet,
  siteViewport,
}) => (
  <>
    <Helmet
      defer={false} // workaround for when the title doesn’t appear in the tab bar until switching to that tab https://github.com/nfl/react-helmet/issues/315
      defaultTitle={siteTitle}
      titleTemplate={`${siteTitle} - %s`}
    >
      <html lang={siteLang} />
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" type="image/png" href={favicon} />

      <meta charSet={siteCharSet} />
      <meta name="viewport" content={siteViewport} />
      <meta name="description" content={description} />
      {/* meta keywords is ignored by Google but declare it for other Search engines anyway */}
      <meta name="keywords" content={tags.join(', ')} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta property="twitter:title" content={title} />
      <meta property="twitter:creator" content={author} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:card" content="summary" />
      {/* To add an image when sharing links on Twitter. */}
      <meta property="og:image" content={icon} />
    </Helmet>
  </>
);

SEO.defaultProps = {
  siteTitle: `Contentified`,
  siteLang: `en`,
  siteCharSet: `utf-8`,
  siteViewport: `width=device-width, initial-scale=1, shrink-to-fit=no`,
  title: ``,
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  author: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  siteTitle: PropTypes.string,
  siteLang: PropTypes.string,
  siteCharSet: PropTypes.string,
  siteViewport: PropTypes.string,
};

export default SEO;
