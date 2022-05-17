import { Link } from 'gatsby';
import React from 'react';
import Font from '../components/font';
import SearchBar from '../components/search-bar';
import SEO from '../components/seo';
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
          <p className="center">© 2021 Contentified | All Rights Reserved</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
