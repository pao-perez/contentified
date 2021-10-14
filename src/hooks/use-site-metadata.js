import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteDescription
            siteUrl
            siteAuthor {
              name
              bio
              email
              twitter
              github
            }
            siteLang
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
