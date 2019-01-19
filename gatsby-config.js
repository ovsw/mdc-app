require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Maplewood Country Day Camp`,
    aboutNav: [
      [
        {
          title: 'item 1',
          url: '/',
          children: [],
        },
        {
          title: 'item 2',
          url: '/',
          children: [],
        },
        {
          title: 'item 3',
          url: '/',
          children: [
            {
              title: 'child 1',
              url: '/',
            },
            {
              title: 'child 2',
              url: '/',
            },
            {
              title: 'child 3',
              url: '/',
            },
          ],
        },
      ],
      [
        {
          title: 'item 4',
          url: '/',
          children: [],
        },
        {
          title: 'item 5',
          url: '/',
          children: [],
        },
        {
          title: 'item 6',
          url: '/',
          children: [],
        },
        {
          title: 'item 7',
          url: '/',
          children: [],
        },
        {
          title: 'item 8',
          url: '/',
          children: [],
        },
        {
          title: 'item 9',
          url: '/',
          children: [],
        },
      ],
      [
        {
          title: 'item 10',
          url: '/',
          children: [],
        },
        {
          title: 'item 11',
          url: '/',
          children: [],
        },
        {
          title: 'item 12',
          url: '/',
          children: [],
        },
        {
          title: 'item 13',
          url: '/',
          children: [],
        },
      ],
    ],
  },
  plugins: [
    `gatsby-plugin-root-import`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-layout`,
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
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        previewMode: process.env.DATO_PREVIEW,
        disableLiveReload: true,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css'], // Purge only tailwind
      },
    },
  ],
}
