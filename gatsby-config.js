module.exports = {
  siteMetadata: {
    title: `Contentually`,
    author: `Pao Perez`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
