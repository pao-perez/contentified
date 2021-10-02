import { Link } from 'gatsby';
import React from 'react';
import Image from '../components/image';
import useBlogList from '../hooks/use-blog-list';
import './index.scss';

const IndexPage = () => {
  const featuredBlogs = useBlogList(true);
  const nonFeaturedBlogs = useBlogList(false);

  return (
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
    </div>
  );
};

export default IndexPage;
