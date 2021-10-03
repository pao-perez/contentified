import { gql, useApolloClient } from '@apollo/client';
import { useEffect, useState } from 'react';
import rinseTerm from '../utils/rinse-term';
import splitTermByWhitespace from '../utils/split-term';

const QUERY = gql`
  query ($query: String!) {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { title: { regex: $query } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            tags
            author
            priority
            date(formatString: "MMMM DD, YYYY")
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  placeholder: BLURRED
                  blurredOptions: { width: 100 }
                  aspectRatio: 1.5
                )
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const useSearchResult = (term = '') => {
  const [data, setData] = useState([]);
  const client = useApolloClient();

  useEffect(() => {
    const terms = [];
    splitTermByWhitespace(term).forEach((t) => {
      const rinsedTerm = rinseTerm(t);
      if (rinsedTerm != null) {
        terms.push(rinsedTerm);
      }
    });

    const queryTerm = async (queryTerms = []) => {
      const regex = `/(?:\\b${queryTerms.join('|')}\\b)/gi`;
      const result = await client.query({
        query: QUERY,
        variables: { query: regex },
      });
      setData(result?.data.allMarkdownRemark.edges);
    };

    queryTerm(terms);
  }, [term]);

  return data;
};

export default useSearchResult;
