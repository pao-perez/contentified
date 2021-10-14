import React from 'react';
import { graphql } from 'gatsby';

import Image from '../components/image';
import SEO from '../components/seo';
import Share from '../components/share';
import useSiteMetadata from '../hooks/use-site-metadata';
import './blog-post.scss';

const BlogPost = ({ data, location }) => {
  const { title, tags, author, date, avatar } = data.markdownRemark.frontmatter;
  const { html, excerpt } = data.markdownRemark;
  const { twitter } = useSiteMetadata();
  const url = location.href;

  return (
    <div className="blog">
      <aside aria-label="Share on Social Media" className="share">
        <section>
          <Share title={title} url={url} twitterHandle={twitter} tags={tags} />
        </section>
      </aside>

      <article className="blog-post">
        <SEO postTitle={title} postDescription={excerpt} postUrl={url} />
        <section className="post-header">
          <section className="avatar">
            <Image image={avatar} alt="Avatar" className="avatar" />
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
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        tags
        author
        date(formatString: "MMMM DD, YYYY")
        avatar {
          childImageSharp {
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
              blurredOptions: { width: 100 }
              height: 500
            )
          }
        }
      }
    }
  }
`;

export default BlogPost;
