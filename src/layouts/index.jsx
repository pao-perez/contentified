import { Link } from 'gatsby';
import React from 'react';
import Font from '../components/font';
import SearchBar from '../components/search-bar';
import './index.scss';

const Layout = ({ children, location }) => (
  <>
    <Font />
    <div className="container">
      <header className="layout-header">
        <Link to="/" style={{ textDecoration: 'none' }} className="center">
          <h1 className="brand center">Contentified</h1>
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

export default Layout;
