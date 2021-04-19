import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/layout";

const About = ({ data }) => (
  <Layout>
    <article>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
      <h2>About the author</h2>
      {data.site.siteMetadata.author} Lorem ipsum dolor Lorem ipsum dolor Lorem
      ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
      ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
      ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
    </article>
  </Layout>
);
export default About;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
