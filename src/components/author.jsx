import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Follow from './follow';

const Author = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
              summary
            }
          }
        }
      }
    `
  );

  const { author } = data.site.siteMetadata;

  return (
    <>
      <article>
        <image />
        <h1>{author.name}</h1>
        <p>{author.summary}</p>
        <Follow />
      </article>
    </>
  );
};

export default Author;
