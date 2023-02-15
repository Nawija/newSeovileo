/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Tworzenie Stron Internetowych Seo www`,
    description: `Strona Internetowa poświęcona charakterystyce tworzenia szybkich stron www z wykorzystaniem popularnego frameworka GatsbyJS.`,
    author: `@Seovvileo`,
    siteUrl: `https://seovileo.pl/`,
  },
  plugins: [
    { 
      pathPrefix: "/newSeovileo",
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Signika`,
            file: `https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500&display=swap`,
          },
        ],
      },
    },
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0C0904`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#0C0904`,
        display: `minimal-ui`,
        icon: `src/assets/logoBrowser.png`,
      },
    },
  ],
}
