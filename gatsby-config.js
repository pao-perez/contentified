module.exports = {
  siteMetadata: {
    title: `Contentified`,
    description: `Developer Tutorials`,
    founder: {
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
  ],
};
