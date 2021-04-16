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

    <main>{children}</main>

    <aside aria-label="Sidebar">
      <section>
        <h2>Share</h2>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Subscribe</h2>
        <article>
          <h3>Get notified every new related content lorem ipsum</h3>
          <form aria-label="subscribe to newsletter">
            <label>
              <span>Subscribe</span>
              <input type="email" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </article>
      </section>
    </aside>

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
