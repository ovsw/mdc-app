require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Maplewood Day Camp`,
    aboutNav: [
      [
        {
          title: 'The Maplewood Family',
          url: '/the-maplewood-family',
          children: [],
        },
        {
          title: 'Directors',
          url: '/directors',
          children: [],
        },
        {
          title: 'Teachers and Staff',
          url: '/teachers-and-staff',
          children: [],
        },
        {
          title: 'Facilities',
          url: '/facilities',
          children: [],
        },
        {
          title: 'Location',
          url: '/location',
          children: [],
        },
        {
          title: 'FAQs',
          url: '/faqs',
          children: [],
        },
        {
          title: 'Our history',
          url: '/our-history',
          children: [],
        },
        {
          title: 'Giving Back',
          url: '/giving-back',
          children: [],
        },
      ],
      [
        {
          title: 'Summer Camp',
          url: '/summer-camp',
          children: [],
        },
        {
          title: 'Programs',
          url: '/summer-camp/',
          children: [
            {
              title: 'Preschool & Kindergarten',
              url: '/summer-camp/programs/preschool-and-kindergarten',
            },
            {
              title: '1st-7th Grade',
              url: '/summer-camp/programs/1st-7th-grade',
            },
            {
              title: 'Teen Leadership (C.I.T.)',
              url: '/summer-camp/programs/teen-leadership-cit',
            },
            {
              title: 'Additional Programs',
              url: '/summer-camp/programs/additional-programs',
            },
          ],
        },
        {
          title: 'Activities',
          url: '/summer-camp/activities',
          children: [],
        },
        {
          title: 'Bus Transportation',
          url: '/summer-camp/bus-transportation',
          children: [],
        },
        {
          title: 'Smart Lunches',
          url: '/summer-camp/smart-lunches',
          children: [],
        },
        {
          title: 'Testimonials',
          url: '/summer-camp/testimonials',
          children: [],
        },
      ],
      [
        {
          title: 'School-year',
          url: '/school-year',
          children: [],
        },
        {
          title: 'Preschool (2.9-5 yrs)',
          url: '/school-year/preschool',
          children: [],
        },
        {
          title: 'After School (K-8th)',
          url: '/school-year/after-school',
          children: [],
        },
        {
          title: `Kids' Weekly Events`,
          url: '/school-year/kids-weekly-events',
          children: [],
        },
        {
          title: 'Vacation Program',
          url: '/school-year/vacation-program',
          children: [],
        },
        {
          title: 'Birthday Parties',
          url: '/school-year/birthday-parties',
          children: [],
        },
        {
          title: 'Testimonials',
          url: '/school-year/testimonials',
          children: [],
        },
      ],
    ],
    familiesNav: [
      [
        {
          title: 'New for 2019!',
          url: '/summer-camp/new-for-2019',
          children: [],
        },
        {
          title: 'Events',
          url: '/events',
          children: [],
        },
      ],
      [
        {
          title: 'Summer Camp Login',
          url: 'https://maplewood.campintouch.com/v2/login/login.aspx?',
          children: [],
        },
        {
          title: 'School Year Login',
          url: 'https://shop.maplewoodyearround.com/shop/',
          children: [],
        },
      ],
      [
        {
          title: 'Camp Calendars',
          url: '/summer-camp/calendars',
          children: [],
        },
        {
          title: 'Camp Photos',
          url: 'https://waldophotos.com/camps/',
          children: [],
        },
      ],
    ],
    staffNav: [
      [
        {
          title: ' ',
          url: ' ',
          children: [],
        },
      ],
      [
        {
          title: 'Why work at Maplewood?',
          url: '/summer-camp/new-for-2019',
          children: [],
        },
        {
          title: 'Apply to work here',
          url: '/events',
          children: [],
        },
      ],
      [
        {
          title: 'Staff Training',
          url: 'https://maplewood.campintouch.com/v2/login/login.aspx?',
          children: [],
        },
        {
          title: 'Hired Summer Staff',
          url: 'https://shop.maplewoodyearround.com/shop/',
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
