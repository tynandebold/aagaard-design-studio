module.exports = {
  siteMetadata: {
    title: `aagaard design studio.`,
    description: `A Copenhagen–based, one-man army design studio.`,
    author: `Frederik Aagaard`,
    keywords: [
      `aagaard design studio`,
      `Frederik Aagaard`,
      `design`,
      `design studio`,
      `creative advisor`,
      `creative director`,
      `copenhagen`,
      `charlie tango`,
      `danske bank`,
      `denmark`,
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
