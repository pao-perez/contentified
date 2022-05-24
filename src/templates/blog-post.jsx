import { graphql } from 'gatsby';
import React from 'react';
import Image from '../components/image';
import SEO from '../components/seo';
import Share from '../components/share';
import Tags from '../components/tags';
import './blog-post.scss';

const BlogPost = ({ data, location }) => {
  const { title, tags, author, date, avatar } = data.markdownRemark.frontmatter;
  const { html, excerpt } = data.markdownRemark;
  const url = location.href;

  return (
    <div className="blog">
      <aside aria-label="Share on Social Media">
        <Share title={title} url={url} twitterHandle={author} tags={tags} className="social-media" />
      </aside>

      <article className="blog-post">
        <SEO
          title={title}
          description={excerpt}
          url={url}
          tags={tags}
          author={author}
        />
        <section className="post-header">
          <section className="avatar">
            <Image image={avatar} alt="Avatar" className="avatar" />
          </section>
          <section className="text">
            <h1 className="title">{title}</h1>
            <h2 className="meta">
              <span>
                by <span className="author">{author}</span> on <time dateTime="true">{date}</time> in{" "}
                <Tags tags={tags} />
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
      excerpt(pruneLength: 160) # SEO meta descriptions should be between 150-170 characters
      frontmatter {
        title
        tags
        author
        date(formatString: "MMMM DD, YYYY")
        avatar {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              transformOptions: {
                fit: COVER
              }
            )
          }
        }
      }
    }
  }
`;

export default BlogPost;
