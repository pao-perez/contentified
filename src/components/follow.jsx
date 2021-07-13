import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import { TwitterIcon } from 'react-share';

const Follow = ( props ) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            founder {
              twitter
            }
          }
        }
      }
    `
  );

  return (
    <article>
      <ul>
        <li>
          <a href={`https://twitter.com/@${site.siteMetadata.founder.twitter}`} target="_blank" rel="noreferrer">
            <TwitterIcon size={40} round={true} />
          </a>
        </li>
      </ul>
    </article>
  );
};

export default Follow;
