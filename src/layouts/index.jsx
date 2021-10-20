import { Link } from 'gatsby';
import React from 'react';

import SEO from '../components/seo';
import Font from '../components/font';
import SearchBar from '../components/search-bar';
import useSiteMetadata from '../hooks/use-site-metadata';
import './index.scss';

const Layout = ({ children, location }) => {
  const {
    siteDescription,
    siteUrl,
    siteTags,
    siteAuthor,
    siteIcon,
    siteTitle,
    siteLang,
    siteCharSet,
    siteViewport,
  } = useSiteMetadata();

  return (
    <>
      <SEO
        description={siteDescription}
        url={siteUrl}
        tags={siteTags}
        author={siteAuthor.name}
        icon={siteIcon}
        siteTitle={siteTitle}
        siteLang={siteLang}
        siteCharSet={siteCharSet}
        siteViewport={siteViewport}
      />
      <Font />
      <div className="container">
        <header className="layout-header">
          <Link to="/" style={{ textDecoration: 'none' }} className="center">
            <h1 className="brand center">{siteTitle}</h1>
          </Link>
          <SearchBar isHidden={location.pathname !== '/'} />
        </header>

        <main className="layout-main">{children}</main>

        <footer className="layout-footer">
          <nav aria-label="Other Site Information">
            <ul>
              <li>
                <a href="https://www.google.com/">Footer link</a>
              </li>
              <li>
                <a href="https://www.google.com/">Footer link</a>
              </li>
              <li>
                <a href="https://www.google.com/">Footer link</a>
              </li>
              <li>
                <a href="https://www.google.com/">Footer link</a>
              </li>
              <li>
                <a href="https://www.google.com/">Footer link</a>
              </li>
            </ul>
          </nav>
          <p className="center">© 2021 Contentified | All Rights Reserved</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
