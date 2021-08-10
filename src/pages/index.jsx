import { graphql, Link } from 'gatsby';
import React from 'react';
import Image from '../components/image';
import EmailNewsletter from '../components/email-newsletter';
import Layout from '../components/layout';

import './index.scss';

const IndexPage = ({ data }) => (
  <Layout>
    <div className="home">
      <article className="blog-list">
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li>
              <Link to={node.fields.slug}>
                <article className="blog-item">
                  <header className="item-header">
                    <h1 className="title">{node.frontmatter.title}</h1>
                    <h2 className="meta">
                      <span className="author">{node.frontmatter.author}</span>
                      <span className="date">
                        <time dateTime="true">{node.frontmatter.date}</time>
                      </span>
                      <span className="tags">{node.frontmatter.tags.join(', ')}</span>
                    </h2>
                  </header>
                  <main className="item-main">
                    <p>{node.excerpt}</p>
                  </main>
                  <footer className="item-footer">
                    <Image
                      image={node.frontmatter.thumbnail}
                      alt="Featured Image Thumbnail"
                      className="thumbnail"
                    />
                  </footer>
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
            tags
            author
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  placeholder: BLURRED
                  blurredOptions: { width: 50 }
                  aspectRatio: 1.75
                )
              }
            }
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
