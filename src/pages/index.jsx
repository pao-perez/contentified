import { graphql, Link } from 'gatsby';
import React from 'react';
import EmailNewsletter from '../components/email-newsletter';
import Follow from '../components/follow';
import Layout from '../components/layout';
import './index.scss';

const IndexPage = (props) => {
  const { data } = props;

  return (
    <Layout>
      <aside aria-label="Follow on Social Media">
        <Follow />
      </aside>

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

      <aside aria-label="Subscribe to Newsletter">
        <EmailNewsletter />
      </aside>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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

export default IndexPage;
