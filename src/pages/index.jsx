import React, { useContext, useMemo } from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import styled from 'styled-components';
import { ThemeContext } from '../providers/theme';
import Div from '../components/core/div';
import Section from '../components/core/section';
import useFeaturedBlog from '../hooks/use-featured-blog';
import useBlogList from '../hooks/use-blog-list';
import { SearchContext } from '../providers/search';
import unflattenNodes from '../utils/unflatten-nodes';
import BlogItem from '../components/blog-item';
import BlogList from '../components/blog-list';

const StyledContainer = styled(Section)`
    width: 70%;
    margin: auto;
    margin-bottom: 5rem;
`;

const StyledHeroSection = styled(Section)`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const StyledDivWithNoResults = styled(Div)`
  p {
    color: ${props => props.theme.primary.text};
    font-size: larger;
  }
`;

const IndexPage = () => {
  const { theme } = useContext(ThemeContext);
  const { search, hasSearchTerm } = useContext(SearchContext);
  const { index, store, nodes } = useBlogList();
  const searchResults = useFlexSearch(search, index, store);
  const searchResultsNodes = useMemo(() => unflattenNodes(searchResults), [searchResults]);
  const hasNoSearchResults = useMemo(() => hasSearchTerm && !searchResults.length, [hasSearchTerm, searchResults]);
  const { featured } = useFeaturedBlog();

  if (!hasSearchTerm) {
    return (
      <StyledContainer>
        <StyledHeroSection>
          <BlogItem node={featured} theme={theme} />
        </StyledHeroSection>
        <BlogList nodes={nodes} theme={theme} />
      </StyledContainer>
    );
  }

  if (hasNoSearchResults) {
    return (
      <StyledDivWithNoResults theme={theme} className="center">
        <p>No Search Results Found!</p>
      </StyledDivWithNoResults>
    )
  }

  return (
    <StyledContainer>
      <BlogList nodes={searchResultsNodes} theme={theme} />
    </StyledContainer>
  );
};

export default IndexPage;
