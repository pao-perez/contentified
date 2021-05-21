import React from 'react';

import { Link } from 'gatsby';

import './layout.scss';

const Layout = ({ children }) => (
  <div className="container">
    <header>
      <a className="logo" href="/" title="Go to home page">
        <img src="../images/icon.png" alt="Site Logo" />
      </a>
      <nav className="nav" aria-label="Site Navigation">
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
      <form className="search" role="search" aria-label="Search Site">
        <input type="search" />
        <button type="submit">Search</button>
      </form>
    </header>

    <main>{children}</main>

    <footer>
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
    </footer>
  </div>
);
export default Layout;