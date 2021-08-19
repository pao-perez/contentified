import { Link } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Font from './font';

import './layout.scss';

const Layout = ({ children }) => (
  <>
    <Font />
    <div className="container">
      <header className="layout-header">
        <div className="center brand">
          <figure>
            <StaticImage
              src="../images/brand.png"
              alt="Contentually"
              placeholder="blurred"
              layout="fixed"
              width={256}
            />
          </figure>
        </div>
        <nav className="center nav" aria-label="Site Navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <form className="center search" role="search" aria-label="Search Site">
          <input type="search" placeholder="Search Articles..." />
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
        <p className="center">© 2021. All rights reserved. Contentually</p>
      </footer>
    </div>
  </>
);
export default Layout;
