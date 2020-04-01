const Promise = require('bluebird');
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await new Promise((resolve, reject) => {
    const articleComponent = path.resolve(
      './src/templates/Resource/Resource.js'
    );
    const landingPageComponent = path.resolve(
      './src/templates/LandingPage/LandingPage.js'
    );
    const topicPageComponent = path.resolve(
      './src/templates/ArticleCategory/ArticleCategory.js'
    );
    const blogPostComponent = path.resolve(
      './src/templates/BlogPost/BlogPost.js'
    );
    resolve(
      graphql(
        `
          {
            allContentfulPageArticle {
              nodes {
                title
                slug
              }
            }
            allContentfulPageBlogPost {
              nodes {
                title
                slug
              }
            }
            allContentfulPageLandingPage {
              nodes {
                title
                slug
              }
            }
            allContentfulElementArticleCategory(
              filter: { slug: { ne: "promoted" } }
            ) {
              nodes {
                slug
                title
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const articles = result.data.allContentfulPageArticle.nodes;
        articles.forEach(({ slug }) => {
          createPage({
            path: `/resources/${slug}/`,
            component: articleComponent,
            context: {
              slug: slug,
            },
          });
        });

        const blogPosts = result.data.allContentfulPageBlogPost.nodes;
        blogPosts.forEach(({ slug }) => {
          createPage({
            path: `/blog/${slug}/`,
            component: blogPostComponent,
            context: {
              slug: slug,
            },
          });
        });

        const landingPages = result.data.allContentfulPageLandingPage.nodes;
        landingPages.forEach(({ slug }) => {
          createPage({
            path: `/${slug}/`,
            component: landingPageComponent,
            context: {
              slug: slug,
            },
          });
        });

        const topicPages =
          result.data.allContentfulElementArticleCategory.nodes;
        topicPages.forEach(({ slug }) => {
          createPage({
            path: `/categories/${slug}/`,
            component: topicPageComponent,
            context: {
              slug: slug,
            },
          });
        });
        createPage({
          path: '/',
          component: landingPageComponent,
          context: {
            slug: 'index',
          },
        });
      })
    );
  });
};
