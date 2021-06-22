module.exports = {
  siteMetadata: {
    title: `Contentually`,
    description: `Developer Tutorials`,
    author: {
      name: `Pao Perez`,
      bio: `Helping make the world a better place through crafting software while trying to make the most of this life. I spend most of my days learning and playing with these interests - Java, JavaScript, Linux, Google Cloud`,
      email: `paoperez@contentually.dev`,
      social: [
        {
          name: `twitter`,
          follow: `twitter follow`,
          share: `on twitter share`,
          icon: `fab fa-twitter`,
        },
        {
          name: `medium`,
          follow: `medium follow`,
          share: `on medium share`,
          icon: `fab fa-medium-m`,
        },
        {
          name: `linkedin`,
          follow: `linkedin follow`,
          share: `on linkedin share`,
          icon: `fab fa-linkedin-in`,
        },
        {
          name: `github`,
          follow: `github follow`,
          share: `on github share`,
          icon: `fab fa-github-alt`,
        },
        {
          name: `stackoverflow`,
          follow: `stackoverflow follow`,
          share: `on stackoverflow share`,
          icon: `fab fa-stack-overflow`,
        },
        {
          name: `reddit`,
          follow: `reddit follow`,
          share: `on reddit share`,
          icon: `fab fa-reddit-alien`,
        },
        {
          name: `slack`,
          follow: `slack follow`,
          share: `on slack share`,
          icon: `fab fa-slack`,
        },
        {
          name: `email`,
          follow: `email follow`,
          share: `via email share`,
          icon: `fas fa-envelope`,
        },
      ],
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Contentually`,
        short_name: `Contentually`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
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
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
};
