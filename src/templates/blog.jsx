import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import Avatar from '../components/avatar';
import EmailNewsletter from '../components/email-newsletter';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Social from '../components/social';

const Blog = ({ data }) => {
  const post = data.markdownRemark;
  const { author } = data.site.siteMetadata;
  const featuredImage = getImage(data.markdownRemark.frontmatter.featuredImage)

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
        <h3>{post.frontmatter.date} in {post.frontmatter.tags.join(', ')}</h3>
        <h3>by {author.name}</h3>
        <GatsbyImage image={featuredImage} alt="Featured Image" />
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
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
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
