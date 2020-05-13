module.exports = {
  siteMetadata: {
    name: "Amorpheuz's Portfolio",
    description: "A blog and portfolio site for Yash Dave",
    keywords: ["tech", "blog"],
    siteUrl: "https://amorpheuz.github.io",
    siteImage: "terminal-open-graph-image.jpg",
    profileImage: ``,
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
    }
  ]
};
