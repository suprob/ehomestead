module.exports = {
  siteMetadata: {
    title: `E. Homestead`,
    description: `Small business creating custom designed shirts and other products`,
    author: `E. Homestead`,
    siteUrl: `https://www.etsy.com/shop/ehomestead`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ehomestead-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
