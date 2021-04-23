import React from 'react';

import { Link } from 'gatsby';

import './layout.scss';

const Layout = ({ children }) => (
  <div className="container">
    <header>
      <a href="/" title="Go to home page">
        <img src="../images/icon.png" alt="Site Logo" />
      </a>
      <nav>
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
      <form role="search" aria-label="Site">
        <label>
          <span>Search</span>
          <input type="search" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </header>

    <div>{children}</div>

    <footer>
      <ul>
        <li>
          <a href="#">Footer link</a>
        </li>
        <li>
          <a href="#">Footer link</a>
        </li>
        <li>
          <a href="#">Footer link</a>
        </li>
        <li>
          <a href="#">Footer link</a>
        </li>
        <li>
          <a href="#">Footer link</a>
        </li>
      </ul>
    </footer>
  </div>
);

export default Layout;
