import React from 'react';

import { graphql } from 'gatsby';

import Follow from '../components/follow';
import Layout from '../components/layout';

const AboutPage = ({ data }) => {
  const { title, description, author } = data.site.siteMetadata;
  return (
    <Layout>
      <article>
        <h1>About {title}</h1>
        <p>{description}</p>
        <image />
        <h2>About the author</h2>
        <p>{author.name}{author.bio}</p>
        <Follow social={author.social} />
      </article>
    </Layout>
  );
};
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author {
          name
          bio
          social {
            name
            follow
            share
            icon
          }
        }
      }
    }
  }
`;

export default AboutPage;
