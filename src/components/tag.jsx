import { Link } from 'gatsby';
import React from 'react';

const Tag = ({ title, url }) => (
  <>
    <li>
      <Link to={url}>{title}</Link>
    </li>
  </>
);

export default Tag;
