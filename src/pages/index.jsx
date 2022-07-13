import React, { useContext, useMemo } from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import styled from 'styled-components';
import { ThemeContext } from '../providers/theme';
import Div from '../components/core/div';
import Section from '../components/core/section';
import UnorderedList from '../components/core/unordered-list';
import useFeaturedBlog from '../hooks/use-featured-blog';
import useBlogList from '../hooks/use-blog-list';
import { SearchContext } from '../providers/search';
import unflattenNodes from '../utils/unflatten-nodes';
import BlogItem from '../components/blog-item';

const StyledHeroSection = styled(Section)`
  height: 50vh;
  margin-top: 5rem;
`;

const StyledDivWithNoResults = styled(Div)`
  p {
    color: ${props => props.theme.primary.text};
    font-size: larger;
  }
`;

const StyledDivWithResults = styled(Div)`
    width: 70%;
    margin: auto;
    margin-bottom: 5rem;
`;

const StyledUnorderedList = styled(UnorderedList)`
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
`;

const IndexPage = () => {
  const { theme } = useContext(ThemeContext);
  const { search, hasNoSearchTerm } = useContext(SearchContext);
  const { index, store, nodes } = useBlogList();
  const searchResults = useFlexSearch(search, index, store);
  const searchResultsNodes = useMemo(() => unflattenNodes(searchResults), [searchResults]);
  const blogList = useMemo(() => hasNoSearchTerm ? nodes : searchResultsNodes, [hasNoSearchTerm, nodes, searchResultsNodes]);
  const hasNoSearchResults = useMemo(() => !hasNoSearchTerm && !searchResults.length, [hasNoSearchTerm, searchResults]);
  const { featured } = useFeaturedBlog();

  if (hasNoSearchResults) {
    return (
      <StyledDivWithNoResults theme={theme} className="center">
        <p>No Search Results Found!</p>
      </StyledDivWithNoResults>
    )
  }

  return (
    <StyledDivWithResults>
      <section>
        <StyledHeroSection>
          <BlogItem node={featured} theme={theme} />
        </StyledHeroSection>
        <StyledUnorderedList>
          {blogList.map((node) => (
            <li key={node.id} theme={theme}>
              <BlogItem node={node} theme={theme} />
            </li>
          ))}
        </StyledUnorderedList>
      </section>
    </StyledDivWithResults>
  );
};

export default IndexPage;
