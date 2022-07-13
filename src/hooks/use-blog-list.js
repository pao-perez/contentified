import { graphql, useStaticQuery } from 'gatsby';

const useBlogList = () => {
  const { localSearchPages, allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        localSearchPages {
          index
          store
        }
        allMarkdownRemark(
          limit: 10
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {frontmatter: {featured: {ne: true}}}
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
                    width: 300
                    aspectRatio: 1
                    transformOptions: {
                      fit: COVER
                    }
                  )
                }
              }
              featured
            }
          }
        }
      }
    `
  );
  return {
    index: localSearchPages.index,
    store: localSearchPages.store,
    nodes: allMarkdownRemark.nodes,
  };
};

export default useBlogList;
