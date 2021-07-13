import React from 'react';

import { graphql } from 'gatsby';

import Follow from '../components/follow';
import Layout from '../components/layout';

const AboutPage = ({ data }) => {
  const { title, description, founder } = data.site.siteMetadata;
  return (
    <Layout>
      <article>
        <h1>About {title}</h1>
        <p>{description}</p>
        <image />
        <h2>About the founder</h2>
        <p>{founder.name}{founder.bio}</p>
        <Follow />
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
        founder {
          name
          bio
        }
      }
    }
  }
`;

export default AboutPage;
