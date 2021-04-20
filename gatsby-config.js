module.exports = {
  siteMetadata: {
    title: "syngular_g",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-SNFZF3NJQ1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
          process.env.WPGRAPHQL_URL || `https://api.syngular.co/graphql`,
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
        },
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token:
          "IGQVJYejMxZADFoTDJNV3JaMXZA5SUVtUU80Y3J4aURfQ3A4U1RRS01CMjVzeFBhMEVTc3pva01kaUs0akRheTRPY3R4WXlpWm1WSk9jSTZAVdXVmUFpBWkJtbmNQV294WmlnM1UxdEZA4UHpFRkhtSUhjXwZDZD",
      },
    },
  ],
};
