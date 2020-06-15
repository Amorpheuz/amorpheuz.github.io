module.exports = {
  siteMetadata: {
    name: "Amorpheuz's Portfolio",
    description: "A blog and portfolio site for Yash Dave",
    keywords: ["tech", "blog", "frontend developer", "data scientist", "frontend dev", "amorpheuz", "yash dave", "react dev", "javascript dev"],
    siteUrl: "https://amorpheuz.dev",
    siteImage: "images/favicon-128x128.png",
    profileImage: `images/favicon-64x64.png`,
    lang: `en`,
    config: {
      sidebarWidth: 280
    }
  },
  plugins: [
    {
      resolve: "@pauliescanlon/gatsby-theme-terminal",
      options: {
        source: ["posts", "projects"]
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://amorpheuz.dev`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/404`,
          `/dummy-page/`,
          `/dev-404-page/`,
          `/404.html`
        ],
        createLinkInHead: true,
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [
          {userAgent: '*', disallow: ['/404','/dummy-page/'], allow: ['/']}
        ]
      }
    },
  ]
};
