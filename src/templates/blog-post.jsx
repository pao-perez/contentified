import React from 'react';

import { graphql } from 'gatsby';

import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Share from '../components/share';
import useSiteMetadata from '../hooks/use-site-metadata';
import './blog-post.scss';

const BlogPost = ({ data, location }) => {
  const { title, tags, author, avatar, date } = data.markdownRemark.frontmatter;
  const { html, excerpt } = data.markdownRemark;
  const { twitter } = useSiteMetadata();

  return (
    <Layout>
      <div className="blog">
        <aside aria-label="Share on Social Media" className="share">
          <section>
            <Share
              title={title}
              url={location.href}
              twitterHandle={twitter}
              tags={tags}
            />
          </section>
        </aside>

        <article className="blog-post">
          <SEO title={title} description={excerpt} author={author} />
          <section className="post-header">
            <section className="avatar">
              <Image image={avatar} alt="Avatar" className="is-round" />
            </section>
            <section className="text">
              <h1 className="title">{title}</h1>
              <h2 className="meta">
                <span>
                  by {author} on <time dateTime="true">{date}</time> in{' '}
                  {tags.join(', ')}
                </span>
              </h2>
            </section>
          </section>
          <section className="post-body">
            <p dangerouslySetInnerHTML={{ __html: html }} />
          </section>
        </article>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        author
        avatar {
          childImageSharp {
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
              blurredOptions: { width: 100 }
              aspectRatio: 0.7
              height: 500
            )
          }
        }
      }
    }
  }
`;

export default BlogPost;
