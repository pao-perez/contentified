import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/layout";
import Share from "../components/share";
import Subscribe from "../components/subscribe";
import SEO from "../components/seo";

const Blog = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <aside aria-label="Share on Social Media">
        <Share />
      </aside>

      <main>
        <article>
          <SEO title={post.frontmatter.title} description={post.excerpt} />
          <h1>{post.frontmatter.title}</h1>
          <p>Article description</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </main>

      <aside aria-label="Subscribe to Newsletter">
        <Subscribe />
      </aside>
    </Layout>
  );
};
export default Blog;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`;
