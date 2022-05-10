import React from 'react';
import { Link } from 'gatsby';
import './404.scss';

const NotFoundPage = () => (
  <article className="not-found">
    <h1 className="title">Page Not Found</h1>
    <p>
      Blimey! The page you requested does not exist <span>&#128531;</span>
    </p>
    <Link to="/" style={{ textDecoration: 'none' }}>
      Go Home
    </Link>
  </article>
);

export default NotFoundPage;
