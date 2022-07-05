import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import styled from 'styled-components';
import { ThemeContext } from '../providers/theme';
import Div from '../components/core/div';
import Header from '../components/core/header';
import Main from '../components/core/main';
import Footer from '../components/core/footer';
import Section from '../components/core/section';
import Article from '../components/core/article';
import Image from '../components/image';
import Tags from '../components/tags';
import useBlogList from '../hooks/use-blog-list';
import { SearchContext } from '../providers/search';
import unflattenNodes from '../utils/unflatten-nodes';

const StyledDiv = styled(Div)`
    width: 70%;
    margin: auto;
    margin-top: 2rem;

    @media (max-width: 1024px) {
        margin-top: 5rem;
    }
`;

const StyledSection = styled(Section)`
    li {
        border-bottom: 0.1rem solid lightgray;
    }

    li:last-child {
        border-bottom: none;
    }
`;

const StyledArticle = styled(Article)`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "item-header item-main item-footer";
    
    @media (max-width: 1024px) {
      margin: 2rem 0rem;
      grid-template-columns: auto;
      grid-template-areas:
        "item-header"
        "item-footer";
    }
`;

const StyledHeader = styled(Header)`
    grid-area: item-header;
    overflow: hidden;
    font-family: ${props => props.theme.secondary.font};
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

const StyledMain = styled(Main)`
    grid-area: item-main;
    overflow: hidden;
    color: ${props => props.theme.secondary.text};
    font-family: ${props => props.theme.secondary.font};
    font-size: large;

    p {
      margin-top: 0.5rem;
    }

    @media (max-width: 1024px) {
        display: none;
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

const IndexPage = () => {
  const { theme } = useContext(ThemeContext);
  const { search } = useContext(SearchContext);
  const { index, store, nodes } = useBlogList();
  const searchResults = useFlexSearch(search, index, store);
  const searchResultsNodes = unflattenNodes(searchResults);
  const blogList = search.trim() === '' ? nodes : searchResultsNodes;

  return (
    <StyledDiv>
      <StyledSection>
        <ul>
          {blogList.map((node) => (
            <li key={node.id}>
              <Link to={node.fields.slug}>
                <StyledArticle>
                  <StyledHeader theme={theme}>
                    <h1 className="title">{node.frontmatter.title}</h1>
                    <h2 className="meta">
                      <span className="author">{node.frontmatter.author}</span>
                      <span className="date">
                        <time dateTime="true">{node.frontmatter.date}</time>
                      </span>
                      <Tags tags={node.frontmatter.tags} theme={theme} />
                    </h2>
                  </StyledHeader>
                  <StyledMain theme={theme}>
                    <p>{node.excerpt}</p>
                  </StyledMain>
                  <StyledFooter>
                    <Image
                      image={node.frontmatter.thumbnail}
                      alt="Featured Image Thumbnail"
                    />
                  </StyledFooter>
                </StyledArticle>
              </Link>
            </li>
          ))}
        </ul>
      </StyledSection>
    </StyledDiv>
  );
};

export default IndexPage;
