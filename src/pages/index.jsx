import { graphql, Link } from 'gatsby';
import React from 'react';
import Image from '../components/image';
import EmailNewsletter from '../components/email-newsletter';
import Layout from '../components/layout';

import './index.scss';

const IndexPage = ({ data }) => {
  // sort by multiple fields doesn't work with graphql for some reason, so doing the sort by priority here instead
  const sortedByPriority = data.allMarkdownRemark.edges.sort((edgeA, edgeB) => {
    if (edgeA.node.frontmatter.priority < edgeB.node.frontmatter.priority) {
      return 1;
    }
    if (edgeA.node.frontmatter.priority > edgeB.node.frontmatter.priority) {
      return -1;
    }
    return 0;
  });
  return (
    <Layout>
      <div className="home">
        <section className="blog-feature">
test
        </section>
        <section className="blog-list">
          <ul>
            {sortedByPriority.map(({ node }) => (
              <li key={node.id}>
                <Link to={node.fields.slug}>
                  {node.frontmatter.priority >= 0 && (
                    <article className="blog-feature">
                      <header className="item-header">
                        <Image
                          image={node.frontmatter.thumbnail}
                          alt="Featured Image Thumbnail"
                          className="thumbnail"
                        />
                      </header>
                      <main className="item-main">
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
                      </main>
                      <footer className="item-footer">
                        <p>{node.excerpt}</p>
                      </footer>
                    </article>
                  )}
                  {node.frontmatter.priority < 0 && (
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
                  )}
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
                  width: 1000
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
