import { useStaticQuery, graphql } from 'gatsby';

const useBlogList = () => {
  const { localSearchPages, allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        localSearchPages {
          publicIndexURL
          publicStoreURL
        }
        allMarkdownRemark(
          limit: 10
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          nodes {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              tags
              author
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
          }
        }
      }
    `
  );
  return {
    publicIndexURL: localSearchPages.publicIndexURL,
    publicStoreURL: localSearchPages.publicStoreURL,
    nodes: allMarkdownRemark.nodes,
  };
};

export default useBlogList;
