import { graphql } from 'gatsby';
import React from 'react';
import Avatar from '../components/avatar';
import EmailNewsletter from '../components/email-newsletter';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Share from '../components/share';

import './blog.scss';

const Blog = ({ data, location }) => {
  const post = data.markdownRemark;
  const { founder } = data.site.siteMetadata;

  return (
    <Layout>
      <div className="blog">
        <aside aria-label="Share on Social Media" className="share">
          <section>
            <Share
              title={post.frontmatter.title}
              url={location.href}
              twitterHandle={founder.twitter}
              tags={post.frontmatter.tags}
            />
          </section>
        </aside>

        <article className="blog-post">
          <SEO
            title={post.frontmatter.title}
            description={post.excerpt}
            author={post.frontmatter.author}
          />
          <div className="heading">
            <Avatar
              avatar={post.frontmatter.avatar}
              author={post.frontmatter.author}
            />
            <h1 className="title">{post.frontmatter.title}</h1>
            <span className="meta">
              on <time datetime>{post.frontmatter.date}</time> in{' '}
              {post.frontmatter.tags.join(', ')}
            </span>
          </div>
          <p dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>

        <aside aria-label="Subscribe to Newsletter" className="newsletter center">
          <EmailNewsletter />
        </aside>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        avatar {
          childImageSharp {
            gatsbyImageData(
              width: 96
              blurredOptions: { width: 96 }
              placeholder: BLURRED
            )
          }
        }
        author
      }
      excerpt
    }
    site {
      siteMetadata {
        founder {
          name
          twitter
        }
      }
    }
  }
`;

export default Blog;
