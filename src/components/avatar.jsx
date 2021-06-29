import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';

const Avatar = () => {
    const { site } = useStaticQuery(
        graphql`
        query {
          site {
            siteMetadata {
              author {
                name
                avatar {
                    childImageSharp {
                        gatsbyImageData(
                            width: 200
                            placeholder: BLURRED
                        )
                    }
                }
              }
            }
          }
        }
      `
    );
    const avatar = getImage(site.siteMetadata.author.avatar);
    return (
        <>
            <figure>
                <GatsbyImage image={avatar} alt={site.siteMetadata.author.name} />
            </figure>
        </>
    );
};
export default Avatar;
