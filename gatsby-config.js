// Gatsby files can't use es6 unless esm module is used
// https://github.com/gatsbyjs/gatsby/issues/7810
module.exports = {
  siteMetadata: {
    title: `Contentified`,
    description: `Developer Tutorials`,
    author: {
      name: `Pao Perez`,
      bio: `Helping make the world a better place through crafting software while trying to make the most of this life. I spend most of my days learning and playing with these interests - Java, JavaScript, Linux, Google Cloud`,
      email: `paoperez@contentified.dev`,
      twitter: `pawieperez`,
      github: `pao-perez`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Contentified`,
        short_name: `Contentified`,
        start_url: `/`,
        background_color: `#FFAE42`,
        theme_color: `#FF5349`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`, // plugin will try to use Layout component located in src/layouts/index.js by default
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`, // Source root dir, any subdir will be part of the filepath
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
              linkImagesToOriginal: false,
              withWebp: true,
              quality: 50,
            },
          },
        ],
      },
    },
    // You can have multiple instances of this plugin to create indexes with
    // different names or engines. For example, multi-lingual sites could create
    // an index for each language.
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'pages',

        engine: 'flexsearch',

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allMarkdownRemark {
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
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'id',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['title', 'tags', 'excerpt'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: [
          'id',
          'excerpt',
          'slug',
          'title',
          'tags',
          'author',
          'date',
          'thumbnail',
        ],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map((node) => ({
            id: node.id,
            excerpt: node.excerpt,
            slug: node.fields.slug,
            title: node.frontmatter.title,
            tags: node.frontmatter.tags,
            author: node.frontmatter.author,
            date: node.frontmatter.date,
            thumbnail: node.frontmatter.thumbnail,
          })),
      },
    },
  ],
};
