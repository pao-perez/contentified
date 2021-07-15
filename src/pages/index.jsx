import { graphql, Link } from 'gatsby';
import React from 'react';
import EmailNewsletter from '../components/email-newsletter';
import Layout from '../components/layout';

import './index.scss';

const IndexPage = (props) => {
  const { data } = props;

  return (
    <Layout>
      <div className="home">
        <article className="blog-list">
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

        <aside aria-label="Subscribe to Newsletter" className="newsletter">
          <EmailNewsletter />
        </aside>
      </div>
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
