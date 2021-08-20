import { graphql, Link } from 'gatsby';
import React from 'react';
import Image from '../components/image';
import EmailNewsletter from '../components/email-newsletter';
import Layout from '../components/layout';

import './index.scss';

const IndexPage = ({ data }) => {
  const featuredBlogs = data.allMarkdownRemark.edges.filter(
    (edge) => edge.node.frontmatter.priority > -1
  );
  const nonFeaturedBlogs = data.allMarkdownRemark.edges.filter(
    (edge) => edge.node.frontmatter.priority < 0
  );

  return (
    <Layout>
      <div className="home">
        <section className="blog-feature">
          <ul>
            {featuredBlogs.map(({ node }) => (
              <li key={node.id}>
                <Link to={node.fields.slug}>
                  <article
                    className="feature-item"
                    aria-label="Feature Article"
                  >
                    <section
                      className="feature-image"
                      aria-label="Feature Article Image"
                    >
                      <Image
                        image={node.frontmatter.thumbnail}
                        alt="Featured Image Thumbnail"
                        className="thumbnail"
                      />
                    </section>
                    <article className="feature-text">
                      <section
                        className="feature-header"
                        aria-label="Feature Article Header"
                      >
                        <h1 className="title">{node.frontmatter.title}</h1>
                        <h2 className="meta">
                          <span className="author">
                            {node.frontmatter.author}
                          </span>
                          <span className="date">
                            <time dateTime="true">{node.frontmatter.date}</time>
                          </span>
                          <span className="tags">
                            {node.frontmatter.tags.join(', ')}
                          </span>
                        </h2>
                      </section>
                      <section
                        className="feature-content"
                        aria-label="Feature Article Excerpt"
                      >
                        <p>{node.excerpt}</p>
                      </section>
                    </article>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="blog-list">
          <ul>
            {nonFeaturedBlogs.map(({ node }) => (
              <li key={node.id}>
                <Link to={node.fields.slug}>
                  <article className="blog-item">
                    <header className="item-header">
                      <h1 className="title">{node.frontmatter.title}</h1>
                      <h2 className="meta">
                        <span className="author">
                          {node.frontmatter.author}
                        </span>
                        <span className="date">
                          <time dateTime="true">{node.frontmatter.date}</time>
                        </span>
                        <span className="tags">
                          {node.frontmatter.tags.join(', ')}
                        </span>
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
        </section>
        <aside aria-label="Subscribe to Newsletter" className="newsletter">
          <EmailNewsletter />
        </aside>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            author
            priority
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  placeholder: BLURRED
                  blurredOptions: { width: 100 }
                  aspectRatio: 1.5
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
