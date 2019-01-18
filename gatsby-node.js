const path = require(`path`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const basicPagetemplate = path.resolve(`./src/templates/aboutPage.js`)
    const summerCampPagetemplate = path.resolve(`./src/templates/summerCampPage.js`)

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
          createPage({
            path: `summer-camp/${page.slug}`,
            component: summerCampPagetemplate,
            context: {
              slug: page.slug,
            },
          })
        })
      })
    )
  })
}
