import { graphql } from 'gatsby';
import React from 'react';
import Avatar from '../components/avatar';
import EmailNewsletter from '../components/email-newsletter';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Social from '../components/social';
import Tag from '../components/tag';
import './blog.scss';


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
        <Avatar />
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date} in
          <ul>
            {post.frontmatter.tags.map((tag) => (
              <Tag url={tag} title={tag} />
            ))}
          </ul>
        </h2>
        <h3>by {author.name}</h3>
        <p dangerouslySetInnerHTML={{ __html: post.html }} />
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
      html
      frontmatter {
        title
        date
        tags
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
