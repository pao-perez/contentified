import { graphql, useStaticQuery } from 'gatsby';

const useFeaturedBlog = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
      query {
        allMarkdownRemark(
          limit: 1
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {frontmatter: {featured: {eq: true}}}
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
        featured: allMarkdownRemark.nodes[0] ?? undefined,
    };
};

export default useFeaturedBlog;
