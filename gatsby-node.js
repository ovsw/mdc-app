const path = require(`path`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const basicPagetemplate = path.resolve(`./src/templates/aboutPage.js`)
    const summerCampPagetemplate = path.resolve(`./src/templates/summerCampPage.js`)
    const schoolYearPagetemplate = path.resolve(`./src/templates/schoolYearPage.js`)
    const staffPagetemplate = path.resolve(`./src/templates/staffPage.js`)

    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(`
        {
          allDatoCmsAboutPage {
            edges {
              node {
                slug
              }
            }
          }
          allDatoCmsSummerCampPage {
            edges {
              node {
                slug
                pageParent {
                  slug
                }
              }
            }
          }
          allDatoCmsSchoolYearPage {
            edges {
              node {
                slug
              }
            }
          }
          allDatoCmsStaffPage {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.allDatoCmsAboutPage.edges.forEach(({ node: page }) => {
          createPage({
            path: page.slug,
            component: basicPagetemplate,
            context: {
              slug: page.slug,
            },
          })
        })

        result.data.allDatoCmsSummerCampPage.edges.forEach(({ node: page }) => {
          let fullSlug = ''

          if (page.pageParent !== null) {
            fullSlug = `${page.pageParent.slug}/${page.slug}`
          } else {
            fullSlug = page.slug
          }
          createPage({
            path: `summer-camp/${fullSlug}`,
            component: summerCampPagetemplate,
            context: {
              slug: page.slug,
            },
          })
        })

        result.data.allDatoCmsSchoolYearPage.edges.forEach(({ node: page }) => {
          createPage({
            path: `school-year/${page.slug}`,
            component: schoolYearPagetemplate,
            context: {
              slug: page.slug,
            },
          })
        })

        result.data.allDatoCmsStaffPage.edges.forEach(({ node: page }) => {
          createPage({
            path: `staff/${page.slug}`,
            component: staffPagetemplate,
            context: {
              slug: page.slug,
            },
          })
        })
      })
    )
  })
}
