import React from 'react';

import { graphql } from 'gatsby';

import EmailNewsletter from '../components/email-newsletter';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Social from '../components/social';

const Blog = ({ data }) => {
  const post = data.markdownRemark;
  const { author } = data.site.siteMetadata;

  return (
    <Layout>
      <aside aria-label="Share on Social Media">
        <section>
          <h2>Share</h2>
          <ul>
            {author.social.map((entry) => (
              <Social
                key={entry.name}
                title={`Share ${entry.name}`}
                url={entry.share}
                classNames={entry.icon}
              />
            ))}
          </ul>
        </section>
      </aside>

      <article>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}</h2>
        <h2>by {author.name}</h2>
        <p>whole blog here</p>
      </article>

      <aside aria-label="Subscribe to Newsletter">
        <EmailNewsletter />
      </aside>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      excerpt
    }
    site {
      siteMetadata {
        author {
          name
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

export default Blog;
