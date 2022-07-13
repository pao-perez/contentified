import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Header from './core/header';
import Footer from './core/footer';
import Article from './core/article';
import Image from './image';
import Tags from './tags';

const StyledArticle = styled(Article)`
    padding: 1rem;
    box-shadow: .1rem .1rem 1rem ${props => props.theme.secondary.text};
    height: fit-content;
    background-color: ${props => props.theme.primary.background};
    display: grid;
    gap: 1rem;
    grid-template-areas:
      "item-header item-footer";

    @media (max-width: 1024px) {
      margin: 2rem 0rem;
      grid-template-areas:
        "item-header"
        "item-footer";
    }
`;

const StyledHeader = styled(Header)`
    grid-area: item-header;
    overflow: hidden;
    font-family: ${props => props.theme.primary.font};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      color: ${props => props.theme.primary.text};
      font-size: larger;
      margin-top: 0.5rem;
    }

    .meta {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      font-weight: normal;

      .author {
        color: ${props => props.theme.primary.text};
        font-size: medium;
      }

      .date {
        color: ${props => props.theme.secondary.text};
        font-size: medium;
      }
    }

    @media (max-width: 1024px) {
      .title,
      .meta {
        text-align: center;
        margin: 0.2rem;
      }
    }
`;

const StyledFooter = styled(Footer)`
    grid-area: item-footer;

    figure {
      margin-right: 0px;
      margin-top: 0.5rem;
    }

    @media (max-width: 1024px) {
        display: flex;

        figure {
          margin: auto;
        }
    }
`;

const BlogItem = ({ theme, node }) => {
    const { frontmatter, fields } = node;
    const { title, author, date, tags, thumbnail} = frontmatter;

    return (
        <Link to={fields.slug}>
            <StyledArticle theme={theme}>
                <StyledHeader theme={theme}>
                    <h1 className="title">{title}</h1>
                    <h2 className="meta">
                        <span className="author">{author}</span>
                        <span className="date">
                            <time dateTime="true">{date}</time>
                        </span>
                        <Tags tags={tags} theme={theme} />
                    </h2>
                </StyledHeader>
                <StyledFooter>
                    <Image
                        image={thumbnail}
                        alt="Featured Image Thumbnail"
                    />
                </StyledFooter>
            </StyledArticle>
        </Link>
    );
};

BlogItem.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  node: PropTypes.shape({}).isRequired,
};

export default BlogItem;
