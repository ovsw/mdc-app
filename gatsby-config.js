require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Maplewood Day Camp`,
    siteUrl: `https://www.maplewoodyearround.com`,
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
          title: 'Interactive Map',
          url: '/interactive-map',
          children: [],
        },
        {
          title: 'Driving Directions',
          url: '/driving-directions',
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
        {
          title: 'Testimonials',
          url: '/testimonials',
          children: [],
        },
      ],
      [
        {
          title: 'Summer Camp',
          url: '/summer-camp/',
          children: [
            {
              title: 'Preschool & Kindergarten',
              url: '/summer-camp/preschool-and-kindergarten',
            },
            {
              title: '1st-7th Grade',
              url: '/summer-camp/1st-7th-grade',
            },
            {
              title: 'Teen Leadership (C.I.T.)',
              url: '/summer-camp/teen-leadership-cit',
            },
            {
              title: 'Additional Programs',
              url: '/summer-camp/additional-programs',
            },
          ],
        },
        {
          title: 'Activities',
          url: '/summer-camp/activities',
          children: [
            {
              title: 'Swimming & Boating ',
              url: '/summer-camp/activities/swimming-and-boating',
            },
            {
              title: 'Club Day - Electives',
              url: '/summer-camp/activities/club-day-electives',
            },
          ],
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
      ],
      [
        {
          title: 'School-year',
          url: '/school-year-programs',
          children: [],
        },
        {
          title: "Children's Classes",
          url: '/school-year-programs/childrens-classes',
          children: [
            {
              title: '6 Years & Under',
              url: '/school-year-programs/childrens-classes/6-years-and-under-classes',
            },
            {
              title: 'K-8th grade',
              url: '/school-year-programs/childrens-classes/kindergarten-to-8th-grade-classes',
            },
          ],
        },
        {
          title: `Kids' Weekly Events`,
          url: '/school-year-programs/kids-weekly-events',
          children: [],
        },
        {
          title: 'Preschool (2.9-5 yrs)',
          url: '/school-year-programs/preschool-program',
          children: [],
        },
        {
          title: 'After School (K-8th)',
          url: '/school-year-programs/after-school-program',
          children: [],
        },
        {
          title: 'Vacation Program',
          url: '/school-year-programs/vacation-program',
          children: [],
        },
        {
          title: 'Birthday Parties',
          url: '/school-year-programs/birthday-parties',
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
          title: 'Summer Group Schedules',
          url: '/summer-camp/summer-group-schedules',
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
    ],
    staffNav: [
      [
        {
          title: ' ',
          url: '',
          children: [],
        },
      ],
      [
        {
          title: 'Why work at Maplewood?',
          url: '/staff/why-work-at-maplewood',
          children: [],
        },
        {
          title: 'Apply to work here',
          url: '/staff/application-summer-camp-job',
          children: [],
        },
      ],
      [
        {
          title: 'Staff Training',
          url: '/staff/camp-staff-training',
          children: [],
        },
        {
          title: 'Hired Summer Staff',
          url: '/staff/hired-summer-staff',
          children: [],
        },
      ],
    ],
  },
  plugins: [
    `gatsby-plugin-react-leaflet`,
    'gatsby-plugin-tailwindcss',
    'gatsby-plugin-styled-components',
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
    {
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: '5a2692ed5d3202175d9b673b',
        // get this from the tawk script widget
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maplewood Day Camp`,
        short_name: `Maplewood`,
        start_url: `/`,
        background_color: `#fffdfa`,
        theme_color: `#006600`,
        display: `standalone`,
        orientation: `portrait`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
