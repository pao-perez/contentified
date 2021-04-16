import * as React from "react";

const Layout = ({ children }) => (
  <div className="container">
    <header>
      <a href="/" title="Go to home page">
        <img src="../images/logo.png" alt="Site logo" />
      </a>
      <nav aria-label="Primary">
        <ul>
          <li>
            <a href="#">Primary nav</a>
          </li>
          <li>
            <a href="#">Primary nav</a>
          </li>
          <li>
            <a href="#">Primary nav</a>
          </li>
          <li>
            <a href="#">Primary nav</a>
          </li>
        </ul>
      </nav>
      <form role="search" aria-label="site">
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
