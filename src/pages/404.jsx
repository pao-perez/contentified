import { Link } from 'gatsby';
import React from 'react';
import Article from '../components/core/article';
import styled from 'styled-components';

const StyledArticle = styled(Article)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NotFoundPage = () => (
  <StyledArticle>
    <h1>Page Not Found</h1>
    <p>
      Blimey! The page you requested does not exist <span>&#128531;</span>
    </p>
    <Link to="/" style={{ textDecoration: 'none' }}>
      Go Home
    </Link>
  </StyledArticle>
);

export default NotFoundPage;
