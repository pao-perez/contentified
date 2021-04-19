import React from "react";

import { graphql, Link } from "gatsby";

import Follow from "../components/follow";
import Layout from "../components/layout";
import Subscribe from "../components/subscribe";

const IndexPage = ({ data }) => (
  <Layout>
    <aside aria-label="Follow on Social Media">
      <Follow />
    </aside>

    <main>
      <article>
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li>
              <Link to={node.fields.slug}>
                <article>
                  <h1>
                    {node.frontmatter.title} — {node.frontmatter.date}
                  </h1>
                  <p>{node.excerpt}</p>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </main>

    <aside aria-label="Subscribe to Newsletter">
      <Subscribe />
    </aside>
  </Layout>
);
export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
