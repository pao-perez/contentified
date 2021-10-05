import { graphql, useStaticQuery } from 'gatsby';

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
                      width: 512
                      placeholder: BLURRED
                      aspectRatio: 1
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
