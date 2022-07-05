import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { ThemeContext } from '../providers/theme';
import Image from '../components/image';
import SEO from '../components/seo';
import Share from '../components/share';
import Tags from '../components/tags';
import Div from '../components/core/div';
import Aside from '../components/core/aside';
import Article from '../components/core/article';
import Section from '../components/core/section';

const StyledDiv = styled(Div)`
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "share blog-post .";

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 9fr;
  }
`;

const StyledAside = styled(Aside)`
  grid-area: share;
  position: fixed;
  left: 0.5rem;
  margin-top: 3rem;
`;

const StyledArticle = styled(Article)`
  grid-area: blog-post;
`;

const StyledHeaderSection = styled(Section)`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 9fr;
  grid-template-rows: auto;
  grid-template-areas:
    "avatar text";
  font-family: ${props => props.theme.primary.font};

  * {
    padding: 0rem;
    margin: 0rem;
  }

  .avatar {
    grid-area: avatar;
    display: flex;
    align-items: center;

    figure {
      img {
        border-radius: 50%;
      }
    }
  }

  .text {
    grid-area: text;
    align-self: center;

    .title {
      font-size: x-large;
      padding-bottom: .2rem;
      color: ${props => props.theme.primary.text};
    }

    .meta {
      font-weight: lighter;
      font-size: small;

      .author {
        font-size: medium;
        color: ${props => props.theme.primary.text};
      }

      time {
        font-style: italic;
        color: ${props => props.theme.primary.text};
      }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: auto;
    grid-template-areas:
      "text";

    .avatar {
      display: none;
    }

    .text {
      .title {
        font-size: large;
      }

      .meta {
        font-size: smaller;

        .author {
          font-size: small;
        }
      }
    }
  }
`;

const StyledBodySection = styled(Section)`
  font-size: large;
  font-family: ${props => props.theme.secondary.font};
  color: ${props => props.theme.secondary.text};
`; 

const BlogPost = ({ data, location }) => {
  const { title, tags, author, date, avatar } = data.markdownRemark.frontmatter;
  const { html, excerpt } = data.markdownRemark;
  const url = location.href;
  const { theme } = useContext(ThemeContext);

  return (
    <StyledDiv>
      <StyledAside aria-label="Share on Social Media">
        <Share title={title} url={url} twitterHandle={author} tags={tags} />
      </StyledAside>

      <StyledArticle>
        <SEO
          title={title}
          description={excerpt}
          url={url}
          tags={tags}
          author={author}
        />
        <StyledHeaderSection theme={theme}>
          <section className="avatar">
            <Image image={avatar} alt="Avatar" className="avatar" />
          </section>
          <section className="text">
            <h1 className="title">{title}</h1>
            <h2 className="meta">
              <span>
                by <span className="author">{author}</span> on <time dateTime="true">{date}</time> in{" "}
                <Tags tags={tags} theme={theme} />
              </span>
            </h2>
          </section>
        </StyledHeaderSection>
        <StyledBodySection theme={theme}>
          <p dangerouslySetInnerHTML={{ __html: html }} />
        </StyledBodySection>
      </StyledArticle>
    </StyledDiv>
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
