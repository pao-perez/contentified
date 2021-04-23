import React from 'react';

import { graphql, Link } from 'gatsby';

import Follow from '../components/follow';
import Layout from '../components/layout';
import EmailNewsletter from '../components/email-newsletter';

const IndexPage = ({ data }) => (
  <Layout>
    <aside aria-label="Follow on Social Media">
      <Follow social={data.site.siteMetadata.author.social} />
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
      <EmailNewsletter />
    </aside>
  </Layout>
);

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
    site {
      siteMetadata {
        author {
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

export default IndexPage;
