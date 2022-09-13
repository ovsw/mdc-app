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
          children: [
            {
              title: 'Directors',
              url: '/directors',
            },
            {
              title: 'Teachers and Staff',
              url: '/teachers-and-staff',
            },
            {
              title: 'Our History',
              url: '/our-history',
            },
          ],
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
              title: '1st-9th Grade',
              url: '/summer-camp/1st-9th-grade',
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
          title: 'Camper Daily Photos',
          url:
            '/summer-camp/campanion-summer-camp-photos-app-face-finder-technology',
          children: [],
        },
        // {
        //   title: 'Smart Lunches',
        //   url: '/summer-camp/smart-lunches',
        //   children: [],
        // },
        // {
        //   title: 'Bostonwise Partnership',
        //   url: '/summer-camp/bostonwise-partnership',
        //   children: [],
        // },
      ],
      [
        {
          title: 'School-year',
          url: '/school-year-programs',
          children: [],
        },
        {
          title: 'Preschool Program',
          url: '/school-year-programs/preschool-program',
          children: [],
        },
        // {
        //   title: 'Kindergarten Program',
        //   url: '/school-year-programs/kindergarten-program',
        //   children: [],
        // },
        // {
        //   title: 'Remote Learning (K-8th)',
        //   url: '/school-year-programs/remote-learning-program',
        //   children: [],
        // },
        {
          title: 'After-school Program',
          url: '/school-year-programs/after-school-program',
          children: [],
        },
        {
          title: 'Vacation Program',
          url: '/school-year-programs/vacation-program',
          children: [],
        },
        {
          title: 'Indoor/Outdoor Playground',
          url: '/school-year-programs/indoor-outdoor-playgrounds',
          children: [],
        },
        {
          title: "Children's Classes, 6 years and under",
          url:
            '/school-year-programs/childrens-classes/6-years-and-under-classes',
          children: [],
        },
        // {
        //   title: "Children's Classes",
        //   url: '/school-year-programs/childrens-classes',
        //   children: [
        //     {
        //       title: '6 Years & Under',
        //       url: '/school-year-programs/childrens-classes/6-years-and-under-classes',
        //     },
        //     {
        //       title: 'K-8th grade',
        //       url: '/school-year-programs/childrens-classes/kindergarten-to-8th-grade-classes',
        //     },
        //   ],
        // },
        // {
        //   title: `Kids' Weekly Events`,
        //   url: '/school-year-programs/kids-weekly-events',
        //   children: [],
        // }
        // {
        //   title: 'Birthday Parties',
        //   url: '/school-year-programs/birthday-parties',
        //   children: [],
        // },
      ],
    ],
    familiesNav: [
      [
        {
          title: 'Maplewood At Home',
          url: '/at-home',
          children: [],
        },
        // {
        //   title: 'New for 2022!',
        //   url: '/summer-camp/new-for-2022',
        //   children: [],
        // },
        {
          title: 'Camper Daily Photos',
          url:
            '/summer-camp/campanion-summer-camp-photos-app-face-finder-technology',
          children: [],
        },
        {
          title: 'Online Store',
          url: '/online-store',
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
          title: 'Summer Group Schedules',
          url: '/summer-camp/summer-group-schedules',
          children: [],
        },
      ],
      [
        {
          title: 'Preschool Forms',
          url: '/school-year-programs/preschool-program-forms',
          children: [],
        },
        {
          title: 'After School Forms',
          url: '/school-year-programs/after-school-program-forms',
          children: [],
        },
        {
          title: 'School Year Login',
          url: 'https://campscui.active.com/orgs/MaplewoodCountryDayCamp',
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
    `gatsby-plugin-tailwindcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-root-import`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
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
        // previewMode: process.env.DATO_PREVIEW,
        disableLiveReload: false,
        previewMode: true,
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
        icon: `src/images/icon.png`,
        cache_busting_mode: `query`,
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-remove-serviceworker`,
  ],
}
