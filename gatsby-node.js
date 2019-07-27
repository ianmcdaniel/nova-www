const Promise = require('bluebird')
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
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

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })




  await new Promise((resolve, reject) => {
    const articleComponent = path.resolve('./src/templates/article.js')
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
            path: `/articles/${article.node.slug}/`,
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
