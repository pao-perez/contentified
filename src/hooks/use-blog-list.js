import { useStaticQuery, graphql } from 'gatsby';

const useBlogList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          limit: 10
          sort: { fields: [frontmatter___date], order: DESC }
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
    `
  );
  return allMarkdownRemark.edges;
};

export default useBlogList;
