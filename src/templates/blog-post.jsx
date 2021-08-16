import { graphql } from 'gatsby';
import React from 'react';
import Image from '../components/image';
import EmailNewsletter from '../components/email-newsletter';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Share from '../components/share';

import './blog-post.scss';

const BlogPost = ({ data, location }) => {
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
          <div className="post-header">
            <Image
              image={post.frontmatter.avatar}
              alt="Avatar"
              className="avatar"
            />
            <h1 className="title">{post.frontmatter.title}</h1>
            <h2 className="meta">
              <span>
                by {post.frontmatter.author} on{' '}
                <time dateTime="true">{post.frontmatter.date}</time> in{' '}
                {post.frontmatter.tags.join(', ')}
              </span>
            </h2>
          </div>
          <div className="post-body">
            <p dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </article>

        <aside
          aria-label="Subscribe to Newsletter"
          className="newsletter center"
        >
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
              width: 500
              placeholder: BLURRED
              blurredOptions: { width: 100 }
              aspectRatio: 0.7
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

export default BlogPost;
