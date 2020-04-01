const Promise = require('bluebird')
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await new Promise((resolve, reject) => {
    const articleComponent = path.resolve('./src/templates/resource.js')
    resolve(
      graphql(
        `
          {
            allContentfulArticle {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const articles = result.data.allContentfulArticle.edges
        articles.forEach((article, index) => {
          createPage({
            path: `/resources/${article.node.slug}/`,
            component: articleComponent,
            context: {
              slug: article.node.slug
            },
          })
        })
      })
    )
  })










}
