module.exports = {
  siteMetadata: {
    title: `aagaard design studio`,
    description: `A Copenhagen–based, one-man army design studio.`,
    author: `Frederik Aagaard`,
    keywords: [
      `aagaard design studio`,
      `Frederik Aagaard`,
      `aagaarddesign.studio`,
      `designer`,
      `design`,
      `digital designer`,
      `design studio`,
      `creative advisor`,
      `creative director`,
      `copenhagen`,
      `charlie tango`,
      `danske bank`,
      `denmark`,
      `dansk`,
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xcrnl231rw4u`,
        accessToken: `LP3jDBZQ1lgpE9tDA__he0aRW1KLe4Tin1HfWy7HZrE`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
