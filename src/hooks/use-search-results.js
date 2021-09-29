import { useQuery, gql } from '@apollo/client';

import rinseTerm from '../utils/rinse-term';
import splitTerm from '../utils/split-term';

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

const useSearchResults = (term = '') => {
  const terms = [];
  splitTerm(term).forEach((t) => {
    const rinsedTerm = rinseTerm(t);
    if (rinsedTerm != null) {
      terms.push(rinsedTerm);
    }
  });

  const regex = `/(?:\\b${terms.join('|')}\\b)/gi`;
  const queryParams = {
    query: regex,
  };
  const { data } = useQuery(QUERY, {
    variables: queryParams,
  }); // Implement and pass onCompleted and onError callback fn?
  return data?.allMarkdownRemark.edges;
};

export default useSearchResults;
