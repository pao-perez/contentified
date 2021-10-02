import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Font from '../components/font';
import { SearchContext } from '../providers/provider';
import './index.scss';

const Layout = ({ children }) => (
  <SearchContext.Consumer>
    {({ search, setSearch }) => (
      <>
        <Font />
        <div className="container">
          <header className="layout-header">
            <div className="center brand">
              <Link to="/">
                <figure>
                  <StaticImage
                    src="../images/brand.png"
                    alt="Contentified"
                    placeholder="blurred"
                    layout="fixed"
                    width={256}
                  />
                </figure>
              </Link>
            </div>
            <form className="center search" role="search" aria-label="Search Site">
              <input
                type="search"
                placeholder="Search Articles..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </form>
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
    )}
  </SearchContext.Consumer>
);

export default Layout;
